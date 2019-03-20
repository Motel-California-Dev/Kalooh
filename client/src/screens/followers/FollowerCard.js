import React, { Component } from "react";
import { StyleSheet, View, SafeAreaView, Text } from "react-native";

const FollowerCard = props => {
  return (
    <View style={styles.card}>
      <Text>{props.follower.username}</Text>
      <Text>{props.follower.name}</Text>
    </View>
  );
};

export default FollowerCard;

const styles = StyleSheet.create({
  card: {
    margin: 10,
    backgroundColor: "rgba(0,0,0,0.1)"
  }
});
