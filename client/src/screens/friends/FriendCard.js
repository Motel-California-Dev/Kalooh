import React from "react";
import { StyleSheet, View, Text, Image, Button } from "react-native";

const FriendCard = props => {
  return (
    <View style={styles.card}>
      <View style={{ flexDirection: "row" }}>
        <View style={{ flex: 1 }}>
          <Image
            source={props.friend.picture || require("../../../assets/default-profile.png")}
            style={{ width: 55, height: 55, borderRadius: 30 }}
          />
        </View>
        <View style={{ flex: 4, marginLeft: 20 }}>
          <Text style={styles.usernameStyle}>{props.friend.username}</Text>
          <Text style={styles.nameStyle}>{props.friend.firstName} {props.friend.lastName}</Text>
        </View>
        <View style={{ flex: 2, alignSelf: 'center' }}>
          <Button
            onPress={() => console.log('Implement add follower here')}
            title="Follow"
          />
        </View>
      </View>
    </View>
  );
};

export default FriendCard;

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
