import React from "react";
import {
  Image,
  ImageBackground,
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
import { Icon } from "react-native-elements";
import { login } from "../../controllers/UserController";
import GlobalStyles from "../../components/GlobalStyles";

import { SecureStore } from "expo";

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "test1",
      password: "testpw",
      hidePassword: false
    };
  }

  componentDidMount() {
    SecureStore.getItemAsync("token").then(async token => {
      let res = await login({ token });
      if (res) {
        console.log("token is already stored. logging in");
        this.props.navigation.navigate("Main"); //Navigates to the Main App
      }
    });
  }

  _toggleHiddenPassword() {
    this.setState(prevState => ({ hidePassword: !prevState.hidePassword }));
  }

  _loginOnClick = async () => {
    let { username, password } = this.state;
    try {
      const res = await login({
        username,
        password
      });

      console.log(JSON.stringify(res));

      // "await" stops execution until the method is completed, which means the screen won't navigate to main
      // until after the token is stored.
      await SecureStore.setItemAsync("token", res.token);
      this.props.navigation.navigate("Main");
    } catch (err) {
      console.log(`Error while logging in: ${err}`);
    }
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ImageBackground
          source={require("../../../assets/bg.jpg")}
          style={{ flex: 1 }}
        >
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
                    value={this.state.username}
                  />
                  <TextInput
                    placeholder="password"
                    placeholderTextColor="rgba(255,255,255,0.7)"
                    returnKeyType="go"
                    autoCapitalize="none"
                    secureTextEntry={this.state.hidePassword}
                    ref={input => (this.passwordInput = input)}
                    style={styles.input}
                    onChangeText={password => this.setState({ password })}
                    value={this.state.password}
                  />
                  <TouchableOpacity
                    onPress={() => this._toggleHiddenPassword()}
                  >
                    <Icon name="remove-red-eye" type="material" color="#000" />
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.loginButton}
                    onPress={this._loginOnClick}
                  >
                    <Text style={styles.loginText}>Log In</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.signUpButton}
                    onPress={() => this.props.navigation.navigate("SignUp")}
                  >
                    <Text style={styles.signUpText}>Create an Account</Text>
                  </TouchableOpacity>
                  <View style={GlobalStyles.horizontalLine} />
                  <View style={styles.otherLogins}>
                    <TouchableOpacity style={styles.facebook}>
                      <View style={styles.otherButtonText}>
                        <Icon
                          name="facebook-f"
                          type="font-awesome"
                          color="#fff"
                        />
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.google}>
                      <View style={styles.otherButtonText}>
                        <Icon name="google" type="font-awesome" color="#fff" />
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </KeyboardAvoidingView>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(98, 159, 231, 0.7)"
  },
  logoContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  logo: {
    width: "60%",
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
    paddingHorizontal: 20,
    borderRadius: 50,
    fontFamily: "montserrat-light"
  },
  loginButton: {
    backgroundColor: "#062c52",
    paddingVertical: 10,
    marginTop: 10,
    borderRadius: 50
  },
  loginText: {
    textAlign: "center",
    letterSpacing: 2.5,
    color: "#fff",
    fontFamily: "montserrat-light",
    fontSize: 20
  },
  signUpButton: {
    paddingVertical: 10,
    marginTop: 10,
    borderRadius: 50
  },
  signUpText: {
    textAlign: "center",
    color: "#062c52",
    fontFamily: "montserrat-light",
    fontSize: 16
  },
  otherLogins: {
    flexDirection: "row"
  },
  facebook: {
    flex: 1,
    backgroundColor: "#3b5998",
    borderRadius: 50,
    padding: 10,
    marginVertical: 10,
    marginRight: 5,
    color: "#fff"
  },
  google: {
    flex: 1,
    backgroundColor: "#ff0000",
    borderRadius: 50,
    padding: 10,
    marginVertical: 10,
    marginLeft: 5,
    color: "#fff"
  },
  otherButtonText: {
    fontStyle: "italic",
    textAlign: "center",
    color: "#fff",
    fontWeight: "700",
    fontSize: 18
  }
});
