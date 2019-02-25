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
      email: "",
      username: "",
      password1: "",
      password2: "",
      confirmPassword: false
    };
  }
  _signUpOnClick = () => {
    if (this.state.password1 != this.state.password2) {
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
            <View style={GlobalStyles.statusBarBlue} />
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
                    onSubmitEditing={() => this.nameInput.focus()}
                    keyboardType="default"
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={styles.input}
                    onChangeText={username => this.setState({ username })}
                  />
                  <TextInput
                    placeholder="full name"
                    placeholderTextColor="rgba(255,255,255,0.7)"
                    returnKeyType="next"
                    ref={input => (this.nameInput = input)}
                    onSubmitEditing={() => this.emailInput.focus()}
                    keyboardType="default"
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={styles.input}
                    onChangeText={name => this.setState({ name })}
                  />
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
                    style={styles.button}
                    onPress={this._signUpOnClick}
                  >
                    <Text style={styles.buttonText}>Sign Up</Text>
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
    marginBottom: 10,
    color: "#fff",
    paddingHorizontal: 20,
    borderRadius: 50,
    fontFamily: "montserrat-light"
  },
  button: {
    backgroundColor: "#062c52",
    paddingVertical: 10,
    marginTop: 10,
    borderRadius: 50
  },
  buttonText: {
    textAlign: "center",
    letterSpacing: 2.5,
    color: "#fff",
    fontFamily: "montserrat-light",
    fontSize: 20
  },
  footer: {
    padding: 20,
    fontSize: 14,
    color: "rgba(0,0,0,0.5)",
    textAlign: "center"
  }
});
