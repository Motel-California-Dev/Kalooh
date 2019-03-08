import React from "react";
import {
  Alert,
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
import { login } from "../../controllers/UserController";
import GlobalStyles from "../../components/GlobalStyles";

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
    // Alert.alert(data.welcomeMessage);
    this.props.navigation.navigate("Main"); //Navigates to the Main App
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ImageBackground
          source={require("../../../assets/bg.jpg")}
          style={{ flex: 1 }}
        >
          <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <View style={GlobalStyles.statusBarBlue} />
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
                  <View style={styles.horizontalLine} />
                  <View style={styles.otherLogins}>
                    <TouchableOpacity style={styles.facebook}>
                      <Text style={styles.otherButtonText}>f</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.google}>
                      <Text style={styles.otherButtonText}>g</Text>
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
  signUpButton: {
    borderColor: "#062c52",
    borderWidth: 0,
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
  signUpText: {
    textAlign: "center",
    color: "#062c52",
    fontFamily: "montserrat-light",
    fontSize: 16
  },
  otherLogins: {
    flexDirection: "row",
    marginVertical: 10
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
  },
  horizontalLine: {
    borderBottomColor: "rgba(255,255,255,0.5)",
    borderBottomWidth: 1,
    marginTop: 10
  }
});
