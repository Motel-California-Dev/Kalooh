import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { MapView, Location, Permissions } from "expo";
import { Ionicons, Feather } from "@expo/vector-icons";

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mapRegion: null,
      hasLocationPermissions: false,
      locationResult: null
    };
  }

  componentDidMount() {
    this._getLocationAsync();
  }

  _backButton = () => {
    this.props.navigation.navigate("CreateNoteScreen");
  };

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

  _confirmLocationOnPress = () => {
    this.props.navigation.state.params._chooseLocationGoBack(
      this.state.mapRegion
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={this._backButton}>
            <Feather
              name="arrow-left"
              size={36}
              color="#000"
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                margin: 5
              }}
            />
          </TouchableOpacity>
          <View style={{ flex: 4 }} />
          <TouchableOpacity
            onPress={this._confirmLocationOnPress}
            style={styles.confirmLocationButton}
          >
            <Text style={styles.confirmLocationText}>Confirm Location</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
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
            />
          )}
          <Ionicons
            style={styles.noteFlag}
            name="ios-flag"
            size={32}
            color="#629FE7"
          />
          <View style={styles.locationButtonContainer}>
            <TouchableOpacity
              underlayColor="white"
              style={styles.locationButton}
              onPress={this._getLocationAsync}
            >
              <Ionicons name="ios-locate" size={32} color="#629FE7" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff"
  },
  header: {
    flexDirection: "row",
    height: 50,
    margin: 5
  },
  map: {
    flex: 1,
    alignSelf: "stretch"
  },
  noteFlag: {
    position: "absolute",
    color: "#000000"
  },
  confirmLocationButton: {
    flex: 4,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
    borderRadius: 20,
    backgroundColor: "#629FFF"
  },
  confirmLocationText: {
    color: "#fff",
    fontFamily: "montserrat",
    fontSize: 16
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
  }
});
