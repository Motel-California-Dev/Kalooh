import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const FollowerCard = props => {
  return (
    <View style={styles.card}>
      <View style={{ flexDirection: "row" }}>
        <View style={{ flex: 1 }}>
          <Image
            source={require("../../../assets/default-profile.png")}
            style={{ width: 55, height: 55, borderRadius: 30 }}
          />
        </View>
        <View style={{ flex: 4 }}>
          <Text style={styles.usernameStyle}>{props.follower.username}</Text>
          <Text style={styles.nameStyle}>{props.follower.name}</Text>
        </View>
      </View>
    </View>
  );
};

export default FollowerCard;

const styles = StyleSheet.create({
  card: {
    margin: 10,
    padding: 10,
    borderRadius: 50,
    backgroundColor: "rgba(255,255,255,1)"
  },
  usernameStyle: {
    fontSize: 20
  },
  nameStyle: {
    fontStyle: "italic"
  }
});
