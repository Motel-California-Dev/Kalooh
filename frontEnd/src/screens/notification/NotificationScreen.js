import React from "react";
import { StyleSheet, View, SafeAreaView, Text } from "react-native";

export default class LoginScreen extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>NOTIFICATION SCREEN</Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3498db"
  }
});
