import React, { Component } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  TouchableOpacity
} from "react-native";

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
    margin: 5,
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 30,
    backgroundColor: "rgba(255,255,255,1)"
  }
});
