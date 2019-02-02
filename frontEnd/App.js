import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Router from "./src/screens/navigator/Router";
export default class App extends React.Component {
  render() {
    return <Router />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#629FE7",
    alignItems: "center",
    justifyContent: "center"
  }
});
