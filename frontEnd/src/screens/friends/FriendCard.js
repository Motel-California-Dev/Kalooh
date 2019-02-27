import React, { Component } from "react";
import { StyleSheet, View, SafeAreaView, Text } from "react-native";

const FriendCard = props => {
  return (
    <View style={styles.card}>
      <Text>{props.friend.username}</Text>
      <Text>{props.friend.name}</Text>
    </View>
  );
};

export default FriendCard;

const styles = StyleSheet.create({
  card: {
    margin: 10,
    backgroundColor: "rgba(0,0,0,0.1)"
  }
});
