import React from "react";
import { StyleSheet, View, Text, TouchableHighlight } from "react-native";
import { Constants, MapView, Location, Permissions } from 'expo';
import { Ionicons } from "@expo/vector-icons";

export default class HomeScreen extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      mapRegion: null,
      hasLocationPermissions: false,
      locationResult: null
    };
  }

  componentDidMount(){
    this._getLocationAsync();
  }

  _handleMapRegionChangeComplete = (mapRegion) => {
    this.setState( { mapRegion } );
  };

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if(status !== 'granted'){
      this.setState( { locationResult: 'Permission to access location was denied'} );
    } else {
      this.setState( {hasLocationPermissions: 'true'} );
    }

    let location = await Location.getCurrentPositionAsync({});
    this.setState( { locationResult: JSON.stringify(location) } );

    this.setState( { mapRegion: {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421
    } } );
  };

  _handleConfirmLocationPress = () => {
    this.props.navigation.state.params._chooseLocationGoBack(this.state.mapRegion);
  }

  render() {
    return (
      <View style={styles.container}>
        {
          this.state.locationResult === null ? 
            <Text>Finding your current location...</Text> :
            this.state.hasLocationPermissions === false ? 
              <Text>Location permissions are not granted.</Text> : 
                this.state.mapRegion === null ? 
                  <Text>Map region doesn't exist.</Text> : 
                  <MapView
                    style={styles.map}
                    region={this.state.mapRegion}
                    onRegionChangeComplete={this._handleMapRegionChangeComplete}
                    showsUserLocation={true}
                  />
        }

        <Ionicons style={styles.noteFlag} name="ios-flag" size={32} color='#629FE7'/>

        <View style={styles.confirmLocationButtonContainer}>
          <TouchableHighlight underlayColor='white' style={styles.confirmLocationButton} onPress={this._handleConfirmLocationPress}>
            <Text>Confirm Location</Text>
          </TouchableHighlight>
        </View>

        <View style={styles.locationButtonContainer}>
          <TouchableHighlight underlayColor='white' style={styles.locationButton} onPress={this._getLocationAsync}>
            <Ionicons name="ios-locate" size={32} color='#629FE7'/>
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
    alignSelf: 'stretch'
  },
  noteFlag: {
    position: 'absolute',
    color: '#000000'
  },
  confirmLocationButtonContainer: {
    position: 'absolute',
    bottom: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  confirmLocationButton : {

  },
  locationButtonContainer: {
    backgroundColor: 'transparent',
    position: 'absolute',
    bottom: 15,
    right: 15,
  },
  locationButton: {
    height: 32,
    width: 32,
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#ffffff'
  },
});
