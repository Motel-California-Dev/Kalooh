import React from "react";
import { StyleSheet, View, Text, TouchableHighlight, Modal, FlatList } from "react-native";
import { Constants, MapView, Location, Permissions, SecureStore } from "expo";
import { Ionicons } from "@expo/vector-icons";
import { getNotes, getNote, getComments } from "../../controllers/PostController";
import axios from "../../../config/axios";
import { UserConsumer } from '../../context/User';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      mapRegion: null,
      hasLocationPermissions: false,
      location: null,
      locationResult: null,
      posts: [],
    };
  }

  async componentDidMount() {
    await this._getLocationAsync();

    SecureStore.getItemAsync("token").then(token => {
      console.log("User token: " + token);
    });

    let notes = await getNotes({
      lati: this.state.mapRegion.latitude,
      long: this.state.mapRegion.longitude
    });
    
    this.setState({ posts: notes });
  }

  _handleMapRegionChangeComplete = mapRegion => {
    this.setState({ mapRegion });
  };

  _getLocationAsync = async () => {
    try {
      if (!this.state.hasLocationPermissions) {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== "granted") {
          this.setState({
            locationResult: "Permission to access location was denied"
          });
        } else {
          this.setState({ hasLocationPermissions: true });
        }
      }

      let location = await Location.getCurrentPositionAsync({});
      this.setState({ locationResult: JSON.stringify(location) });

      await this.setState({
        mapRegion: {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }
      });
    } catch (err) {
      console.log(`Error while setting location: ${err}`);
    }
  };

  _handleCreateNotePress = () => {
    this.props.navigation.navigate("CreateNoteScreen", {
      mapRegion: this.state.mapRegion,
      _createNoteGoBack: this._createNoteGoBack,
    });
  };

  _createNoteGoBack = async () => {
    let notes = await getNotes({
      lati: this.state.mapRegion.latitude,
      long: this.state.mapRegion.longitude
    });
    this.setState({ posts: notes });
    this.props.navigation.navigate('HomeScreen');
  };

  _handleDisplayNote = async key => {
    let note = await getNote(key);
    this.props.navigation.navigate('ViewNoteScreen', {
      note
    });
  };

  render() {
    return (
      <View style={styles.container}>
        {this.state.locationResult === null ? (
          <Text>Finding your current location...</Text>
        ) : this.state.hasLocationPermissions === false ? (
          <Text>Location permissions are not granted.</Text>
        ) : this.state.mapRegion === null ? (
          <Text>Map region doesn't exist.</Text>
        ) : (
          <MapView
            style={styles.map}
            region={this.state.mapRegion}
            onRegionChangeComplete={this._handleMapRegionChangeComplete}
            showsUserLocation={true}
            showsMyLocationButton={false}
            toolbarEnabled={false}
          >
            {this.state.posts && this.state.posts.map(post => (
              <MapView.Marker
                key={post.id}
                coordinate={{
                  latitude: post.lati,
                  longitude: post.long
                }}
                title={post.title}
                description={post.message}
                onCalloutPress={() => this._handleDisplayNote(post.id)}
              />
            ))}
          </MapView>
        )}

        <View style={styles.createNoteButtonContainer}>
          <TouchableHighlight
            underlayColor="white"
            style={styles.createNoteButton}
            onPress={this._handleCreateNotePress}
          >
            <Ionicons name="ios-add-circle-outline" size={64} color="#629FE7" />
          </TouchableHighlight>
        </View>
        <View style={styles.locationButtonContainer}>
          <TouchableHighlight
            underlayColor="white"
            style={styles.locationButton}
            onPress={this._getLocationAsync}
          >
            <Ionicons name="ios-navigate" size={32} color="#629FE7" />
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

export default connect(UserConsumer)(HomeScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff"
  },
  map: {
    flex: 1,
    alignSelf: "stretch"
  },
  locationButtonContainer: {
    backgroundColor: "transparent",
    position: "absolute",
    bottom: 15,
    right: 15
  },
  locationButton: {
    height: 32,
    width: 32,
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: "#ffffff"
  },
  createNoteButtonContainer: {
    position: "absolute",
    bottom: 15,
    justifyContent: "center",
    alignItems: "center"
  },
  createNoteButton: {
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
    height: 64,
    width: 64,
    borderRadius: 100
  },
});
