import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SwitchNavigator from "./src/screens/navigator/SwitchNavigator";
export default class App extends React.Component {
  render() {
    return <SwitchNavigator />;
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
