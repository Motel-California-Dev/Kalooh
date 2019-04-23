import React from "react";
import { 
  StyleSheet, 
  View, 
  SafeAreaView, 
  Text,
  Button,
  TextInput 
} from "react-native";
import axios from '../../../config/axios';

export default class CreateNoteScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      titleText: '',
      descriptionText: '',
      mapRegion: this.props.navigation.getParam('mapRegion'),
    };
  }

  _postOnClick = () => {
    let post = {
      title: this.state.titleText,
      userId: 1,
      message: this.state.descriptionText,
      createdAt: Date.now(),
      long: this.state.mapRegion.longitude,
      lati: this.state.mapRegion.latitude,
    }

    // TODO: Move to posts controller
    axios.post('posts', post)
    .then(res => {
      console.log(JSON.stringify(res));
    })
    .catch(err => {
      console.log("Fuck.");
      console.log(JSON.stringify(err));
    });
    ///////////////////////////////////

    this.props.navigation.navigate('HomeScreen');
  };

  _chooseLocationOnClick = () => {
    this.props.navigation.navigate('ChooseLocationScreen', {
      _chooseLocationGoBack: this._chooseLocationGoBack,
    });
  };

  _chooseLocationGoBack = (mapRegion) => {
    this.setState( { mapRegion } );
    this.props.navigation.navigate('CreateNoteScreen');
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <TextInput
          placeholder='Title...'
          onChangeText={(titleText) => this.setState({titleText})}
          value={this.state.titleText}
        />
        <TextInput
          placeholder='What shall you post...'
          multiline={true}
          numberOfLines={4}
          onChangeText={(descriptionText) => this.setState({descriptionText})}
          value={this.state.descriptionText}
        />
        <Button
          title='Choose Location'
          onPress={this._chooseLocationOnClick}
        />
        <Button
          title='Post'
          onPress={this._postOnClick}
        />
        <Text>Current location:</Text>
        <Text>{this.state.mapRegion.longitude}</Text>
        <Text>{this.state.mapRegion.latitude}</Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
