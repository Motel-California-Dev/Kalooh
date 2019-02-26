import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Constants, MapView, Location, Permissions } from 'expo';

export default class LoginScreen extends React.Component {

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

  _handleMapRegionChange = (mapRegion) => {
    console.log(mapRegion);
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
                    onRegionChange={this.handleMapRegionChange}
                    showsUserLocation={true}
                  />
        }
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
  }
});
