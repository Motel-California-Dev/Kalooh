import React from "react";
import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Keyboard,
  StyleSheet,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from "react-native";
import { login } from "../../controllers/UserController";

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  _loginOnClick = () => {
    let { username, password } = this.state;
    data = login({
      username,
      password
    });
    Alert.alert(data.welcomeMessage);
    this.props.navigation.navigate("Main"); //Navigates to the Main App
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
          <TouchableWithoutFeedback
            style={styles.container}
            onPress={Keyboard.dismiss}
          >
            <View style={styles.container}>
              <View style={styles.logoContainer}>
                <Image
                  source={require("../../../assets/logoFull.png")}
                  resizeMode="contain"
                  style={styles.logo}
                />
              </View>
              <View style={styles.formContainer}>
                <TextInput
                  placeholder="username or email"
                  placeholderTextColor="rgba(255,255,255,0.7)"
                  returnKeyType="next"
                  onSubmitEditing={() => this.passwordInput.focus()}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect={false}
                  style={styles.input}
                  onChangeText={username => this.setState({ username })}
                />
                <TextInput
                  placeholder="password"
                  placeholderTextColor="rgba(255,255,255,0.7)"
                  returnKeyType="go"
                  secureTextEntry
                  style={styles.input}
                  ref={input => (this.passwordInput = input)}
                  onChangeText={password => this.setState({ password })}
                />
                <TouchableOpacity
                  style={styles.buttonContainer}
                  onPress={this._loginOnClick}
                >
                  <Text style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#629FE7"
  },
  logoContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  logo: {
    width: "50%",
    height: "80%"
  },
  formContainer: {
    padding: 20
  },
  input: {
    height: 40,
    backgroundColor: "rgba(255,255,255,.2)",
    marginBottom: 10,
    color: "#fff",
    paddingHorizontal: 10
  },
  buttonContainer: {
    backgroundColor: "rgba(0,0,0,.5)",
    paddingVertical: 15
  },
  buttonText: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "700"
  }
});
