import React from "react";
import { StyleSheet, View, Text, TouchableHighlight } from "react-native";
import { Constants, MapView, Location, Permissions } from "expo";
import { Ionicons } from "@expo/vector-icons";

import axios from "../../../config/axios";

import { SecureStore } from "expo";

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mapRegion: null,
      hasLocationPermissions: false,
      location: null,
      locationResult: null,
      posts: []
    };
  }

  async componentDidMount() {
    const location = await this._getLocationAsync();
    this.setState({
      location,
      mapRegion: {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      }
    });

    console.log("testing if we can access token");
    SecureStore.getItemAsync("token").then(token => {
      console.log(token);
    });

    console.log("THIS STATE");
    console.log(this.state);

    // TODO: Move to posts controller
    axios
      .get("posts", {
        params: {
          lati: this.state.location.coords.latitude,
          long: this.state.location.coords.longitude
        }
      })
      .then(res => {
        console.log(res.data);
        this.setState({ posts: res.data });
      })
      .catch(err => {
        console.log("ahhh");
      });
  }

  _handleMapRegionChangeComplete = mapRegion => {
    this.setState({ mapRegion });
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

    ////Spagetti/////
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
    ////////////////

    return location;
  };

  _handleCreateNotePress = () => {
    this.props.navigation.navigate("CreateNoteScreen", {
      mapRegion: this.state.mapRegion
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
          >
            {this.state.posts.map(post => (
              <MapView.Marker
                key={post.id}
                coordinate={{
                  latitude: post.lati,
                  longitude: post.long
                }}
                title={post.title}
                description={post.message}
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
            <Ionicons name="ios-locate" size={32} color="#629FE7" />
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

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
  }
});
