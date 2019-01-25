import React from "react";
import { StyleSheet, Text, View } from "react-native";
import LoginScreen from "./src/screens/login/LoginScreen";

export default class App extends React.Component {
  render() {
    return <LoginScreen />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3498db",
    alignItems: "center",
    justifyContent: "center"
  }
});
