import React from "react";
import {
  Alert,
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  TextInput
} from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";
import { postNote } from "../../controllers/PostController";

export default class CreateNoteScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titleText: "",
      descriptionText: "",
      mapRegion: this.props.navigation.getParam("mapRegion")
    };
  }

  _backButton = () => {
    this.props.navigation.navigate("HomeScreen");
  };

  _postOnPress = () => {
    let post = {
      title: this.state.titleText,
      userId: 1,
      message: this.state.descriptionText,
      createdAt: Date.now(),
      long: this.state.mapRegion.longitude,
      lati: this.state.mapRegion.latitude
    };
    if (this.state.titleText.length > 0) {
      postNote(post);
      this.props.navigation.navigate("HomeScreen");
    }
  };

  _chooseLocationOnPress = () => {
    this.props.navigation.navigate("ChooseLocationScreen", {
      _chooseLocationGoBack: this._chooseLocationGoBack
    });
  };

  _chooseLocationGoBack = mapRegion => {
    this.setState({ mapRegion });
    this.props.navigation.navigate("CreateNoteScreen");
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={this._backButton}>
            <Feather
              name="x"
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
          <View style={{ flex: 2 }} />
          <TouchableOpacity
            onPress={this._chooseLocationOnPress}
            style={styles.chooseLocationButton}
          >
            <Text style={styles.chooseLocationText}>Choose Location</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this._postOnPress}
            style={
              this.state.titleText.length > 0
                ? styles.postButton
                : styles.postButtonDisabled
            }
            activeOpacity={this.state.titleText.length == 0 ? 1 : 0.2}
          >
            <Text style={styles.postText}>Post</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1, padding: 10 }}>
          <TextInput
            placeholder="Title..."
            onChangeText={titleText => this.setState({ titleText })}
            value={this.state.titleText}
          />
          <View
            style={{
              height: 1,
              margin: 10,
              backgroundColor: "#CED0CE"
            }}
          />
          <TextInput
            placeholder="Description..."
            multiline={true}
            onChangeText={descriptionText => this.setState({ descriptionText })}
            value={this.state.descriptionText}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    flexDirection: "row",
    height: 50,
    backgroundColor: "#fff",
    margin: 5
  },
  locationHeader: {
    flexDirection: "row",
    height: 30,
    backgroundColor: "#fff",
    margin: 5
  },
  postButton: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
    borderRadius: 20,
    backgroundColor: "#629FFF"
  },
  postButtonDisabled: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
    borderRadius: 20,
    backgroundColor: "#bbbbbb"
  },
  postText: {
    color: "#fff",
    fontFamily: "montserrat",
    fontSize: 16
  },
  chooseLocationButton: {
    flex: 4,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#629FFF"
  },
  chooseLocationText: {
    color: "#629FFF",
    fontFamily: "montserrat",
    fontSize: 16
  }
});
