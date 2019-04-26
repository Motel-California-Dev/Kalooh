import React from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  FlatList,
  ScrollView
} from "react-native";
import { Constants, MapView, Location, Permissions, SecureStore } from "expo";
import { SearchBar, ListItem } from "react-native-elements";
import { getNotes } from "../../controllers/PostController";
import PostCard from "./PostCard";

export default class SearchScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mapRegion: null,
      search: "",
      posts: [],
      displayPosts: []
    };
  }

  componentDidMount() {
    this._getLocationAsync();
    this._getNotesAsync();
  }

  _getNotesAsync = async () => {
    await this._getLocationAsync();
    let notes = await getNotes({
      lati: this.state.mapRegion.latitude,
      long: this.state.mapRegion.longitude
    });
    await this.setState({ posts: notes });
    await this.setState({ displayPosts: notes });
  };

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== "granted") {
      this.setState({
        locationResult: "Permission to access location was denied"
      });
    } else {
      this.setState({ hasLocationPermissions: "true" });
    }
    let location = await Location.getCurrentPositionAsync({});
    this.setState({ locationResult: JSON.stringify(location) });
    this.setState({
      mapRegion: {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      }
    });
  };

  searchFilterFunction = searchText => {
    this.setState({ search: searchText });
    const newData = this.state.posts.filter(item => {
      const noteData = `${item.title.toUpperCase()}   
      ${item.message.toUpperCase()}`;
      const searchData = searchText.toUpperCase();

      return noteData.indexOf(searchData) > -1;
    });
    this.setState({ displayPosts: newData });
  };

  renderHeader = () => {
    return (
      <SearchBar
        placeholder="Type Here..."
        lightTheme
        cancelIcon
        onChangeText={text => this.searchFilterFunction(text)}
        autoCorrect={false}
        value={this.state.search}
      />
    );
  };

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "80%",
          backgroundColor: "#CED0CE",
          marginLeft: "14%"
        }}
      />
    );
  };

  render() {
    return (
      <SafeAreaView style={{ backgroundColor: "#ffffff", flex: 1 }}>
        <FlatList
          data={this.state.displayPosts}
          renderItem={({ item }) => <PostCard post={item} />}
          keyExtractor={item => item.id.toString()}
          ItemSeparatorComponent={this.renderSeparator}
          ListHeaderComponent={this.renderHeader}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff"
  }
});
