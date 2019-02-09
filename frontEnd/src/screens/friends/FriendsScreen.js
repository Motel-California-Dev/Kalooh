import React from "react";
import { StyleSheet, View, SafeAreaView, Text } from "react-native";

export default class FriendsScreen extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Friends SCREEN</Text>
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
