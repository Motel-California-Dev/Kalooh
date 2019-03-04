import React from "react";
import { StyleSheet, View, SafeAreaView, Text } from "react-native";

export default class SearchScreen extends React.Component {
  render() {
    return (
      <SafeAreaView style={{ backgroundColor: "#EFEFF4", flex: 1 }}>
        <Text>Search SCREEN</Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff"
  }
});
