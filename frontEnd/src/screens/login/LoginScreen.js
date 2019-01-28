import React from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  Image
} from "react-native";
import LoginForm from "./LoginForm";

export default class LoginScreen extends React.Component {
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
                <Image source={require("../../../assets/logo.png")} />
              </View>
              <View style={styles.formContainer}>
                <LoginForm />
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
    backgroundColor: "#3498db"
  },
  logoContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  formContainer: {}
});
