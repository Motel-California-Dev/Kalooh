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
import GlobalStyles from "../../components/GlobalStyles";

export default class SignUpScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      username: "",
      password: ""
    };
  }
  _signUpOnClick = () => {
    Alert.alert("-Send Email Verification & other back-end stuff");
  };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={GlobalStyles.statusBarBlue} />
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
                  onSubmitEditing={() => this.emailInput.focus()}
                  keyboardType="default"
                  autoCapitalize="none"
                  autoCorrect={false}
                  style={styles.input}
                  onChangeText={username => this.setState({ username })}
                />
                <TextInput
                  placeholder="email"
                  placeholderTextColor="rgba(255,255,255,0.7)"
                  returnKeyType="next"
                  ref={input => (this.emailInput = input)}
                  onSubmitEditing={() => this.passwordInput.focus()}
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
                  secureTextEntry
                  style={styles.input}
                  ref={input => (this.passwordInput = input)}
                  onChangeText={password => this.setState({ password })}
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
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#629FE7"
  },
  title: {
    paddingVertical: 10,
    color: "#062c52",
    fontSize: 40,
    textAlign: "center"
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
    paddingHorizontal: 10,
    borderRadius: 50
  },
  button: {
    backgroundColor: "#062c52",
    paddingVertical: 15,
    marginVertical: 5,
    borderRadius: 50
  },
  buttonText: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "700"
  },
  footer: {
    padding: 20,
    fontSize: 14,
    color: "rgba(0,0,0,0.5)",
    textAlign: "center"
  }
});
