import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Card, ListItem, Button, Icon } from "react-native-elements";

const FriendCard = props => {
  return <Card title={props.friend.name} />;
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
