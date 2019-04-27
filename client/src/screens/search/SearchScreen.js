import React from "react";
import {
  Alert,
  StyleSheet,
  View,
  SafeAreaView,
  FlatList,
  ActivityIndicator
} from "react-native";
import { Location, Permissions } from "expo";
import { SearchBar } from "react-native-elements";
import { getNotes } from "../../controllers/PostController";
import PostCard from "./PostCard";

export default class SearchScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mapRegion: null,
      search: "",
      posts: [],
      postsDisplay: [],
      isLoading: true
    };
  }

  componentDidMount() {
    this._getNotesAsync();
    this.setState({ isLoading: false });
  }

  _getNotesAsync = async () => {
    console.log("Getting Notes...");
    await this._getLocationAsync();
    let notes = await getNotes({
      lati: this.state.mapRegion.latitude,
      long: this.state.mapRegion.longitude
    });
    this.setState({ posts: notes });
    this.setState({ postsDisplay: notes });
    console.log("Success");
  };

  _getLocationAsync = async () => {
    console.log("Getting Current Location...");
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
    console.log("Success");
  };

  _searchFilterFunction = searchText => {
    this.setState({ search: searchText });
    const newData = this.state.posts.filter(item => {
      const noteData = `${item.title.toUpperCase()}   
      ${item.message.toUpperCase()}`;
      const searchData = searchText.toUpperCase();

      return noteData.indexOf(searchData) > -1;
    });
    this.setState({ postsDisplay: newData });
  };

  _renderHeader = () => {
    return (
      <View>
        <SearchBar
          placeholder="Type Here..."
          lightTheme
          cancelIcon
          onChangeText={text => this._searchFilterFunction(text)}
          autoCorrect={false}
          value={this.state.search}
        />
      </View>
    );
  };

  _renderSeparator = () => {
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

  _renderEmpty = () => {
    if (this.state.isLoading) {
      return (
        <ActivityIndicator
          size="large"
          color="#062c52"
          animating={this.state.isLoading}
        />
      );
    } else {
      return (
        <View style={styles.container}>
          <Text>No notes found... :(</Text>
        </View>
      );
    }
  };

  _renderItem = ({ item }) => (
    <PostCard post={item} onPressItem={this._onPressItem} />
  );

  _onPressItem = () => {
    //Navigate to View Note & pass in note props
    Alert.alert("Navigate to View Note Screen & pass in note props");
  };

  render() {
    return (
      <SafeAreaView style={{ backgroundColor: "#ffffff", flex: 1 }}>
        <FlatList
          data={this.state.postsDisplay}
          renderItem={this._renderItem}
          keyExtractor={item => item.id.toString()}
          ItemSeparatorComponent={this._renderSeparator}
          ListHeaderComponent={this._renderHeader}
          ListEmptyComponent={this._renderEmpty}
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
