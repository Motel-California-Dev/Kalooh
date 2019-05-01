import React from "react";
import {
  Alert,
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
import GlobalStyles from "../../components/GlobalStyles";

export default class SignUpScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      nameFirst: "",
      nameLast: "",
      email: "",
      password1: "",
      password2: "",
      confirmPassword: false
    };
  }
  _signUpOnClick = () => {
    if (
      this.state.username == "" ||
      this.state.nameFirst == "" ||
      this.state.nameLast == "" ||
      this.state.email == "" ||
      this.state.password1 == ""
    ) {
      Alert.alert("Create account failed. Missing fields.");
    } else if (this.state.password1 != this.state.password2) {
      Alert.alert("Your password did not match. Try again.");
    } else {
      Alert.alert("Nice! An email confirmation has been sent.");
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
                <View style={styles.formContainer}>
                  <Text style={styles.title}>Create an Account</Text>
                  <TextInput
                    placeholder="username"
                    placeholderTextColor="rgba(255,255,255,0.7)"
                    returnKeyType="next"
                    onSubmitEditing={() => this.nameFirstInput.focus()}
                    keyboardType="default"
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={styles.input}
                    onChangeText={username => this.setState({ username })}
                  />
                  <View style={{ flexDirection: "row" }}>
                    <View style={{ flex: 1 }}>
                      <TextInput
                        placeholder="first name"
                        placeholderTextColor="rgba(255,255,255,0.7)"
                        returnKeyType="next"
                        ref={input => (this.nameFirstInput = input)}
                        onSubmitEditing={() => this.nameLastInput.focus()}
                        keyboardType="default"
                        autoCapitalize="none"
                        autoCorrect={false}
                        style={[styles.input, { marginRight: 5 }]}
                        onChangeText={nameFirst => this.setState({ nameFirst })}
                      />
                    </View>
                    <View style={{ flex: 1 }}>
                      <TextInput
                        placeholder="last name"
                        placeholderTextColor="rgba(255,255,255,0.7)"
                        returnKeyType="next"
                        ref={input => (this.nameLastInput = input)}
                        onSubmitEditing={() => this.emailInput.focus()}
                        keyboardType="default"
                        autoCapitalize="none"
                        autoCorrect={false}
                        style={[styles.input, { marginLeft: 5 }]}
                        onChangeText={nameLast => this.setState({ nameLast })}
                      />
                    </View>
                  </View>
                  <TextInput
                    placeholder="email"
                    placeholderTextColor="rgba(255,255,255,0.7)"
                    returnKeyType="next"
                    ref={input => (this.emailInput = input)}
                    onSubmitEditing={() => this.passwordInput1.focus()}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={styles.input}
                    onChangeText={email => this.setState({ email })}
                  />
                  <View style={GlobalStyles.horizontalLine} />
                  <TextInput
                    placeholder="password"
                    placeholderTextColor="rgba(255,255,255,0.7)"
                    returnKeyType="go"
                    ref={input => (this.passwordInput1 = input)}
                    onSubmitEditing={() => this.passwordInput2.focus()}
                    secureTextEntry
                    style={styles.input}
                    onChangeText={password1 => this.setState({ password1 })}
                  />
                  <TextInput
                    placeholder="confirm password"
                    placeholderTextColor="rgba(255,255,255,0.7)"
                    returnKeyType="go"
                    secureTextEntry
                    style={styles.input}
                    ref={input => (this.passwordInput2 = input)}
                    onChangeText={password2 => this.setState({ password2 })}
                  />
                  <TouchableOpacity
                    style={styles.signUpButton}
                    onPress={this._signUpOnClick}
                  >
                    <Text style={styles.signUpText}>Sign Up</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.goBackButton}
                    onPress={() => this.props.navigation.navigate("Login")}
                  >
                    <Text style={styles.goBackText}>Back to Login</Text>
                  </TouchableOpacity>
                </View>
                <Text style={styles.footer}>
                  By creating an account, you are agreeing to Kalooh's User
                  Agreement
                </Text>
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
  title: {
    paddingVertical: 10,
    color: "#062c52",
    fontSize: 40,
    textAlign: "center",
    fontFamily: "montserrat"
  },
  formContainer: {
    flex: 3,
    padding: 20,
    justifyContent: "center"
  },
  input: {
    height: 40,
    backgroundColor: "rgba(255,255,255,.2)",
    marginVertical: 5,
    color: "#fff",
    paddingHorizontal: 20,
    borderRadius: 50,
    fontFamily: "montserrat-light"
  },
  signUpButton: {
    backgroundColor: "#062c52",
    paddingVertical: 10,
    marginTop: 10,
    borderRadius: 50
  },
  signUpText: {
    textAlign: "center",
    letterSpacing: 2.5,
    color: "#fff",
    fontFamily: "montserrat-light",
    fontSize: 20
  },
  goBackButton: {
    paddingVertical: 10,
    marginTop: 10,
    borderRadius: 50
  },
  goBackText: {
    textAlign: "center",
    color: "#062c52",
    fontFamily: "montserrat-light",
    fontSize: 16
  },
  footer: {
    padding: 20,
    fontSize: 14,
    color: "rgba(0,0,0,0.5)",
    textAlign: "center"
  }
});
