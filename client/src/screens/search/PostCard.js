import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const PostCard = props => {
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
          <Text style={styles.title}>{props.post.title}</Text>
          <Text style={styles.message}>{props.post.message}</Text>
        </View>
        <View style={{ flex: 1 }} />
      </View>
    </View>
  );
};

export default PostCard;

const styles = StyleSheet.create({
  card: {
    margin: 10,
    padding: 10,
    backgroundColor: "rgba(255,255,255,1)"
  },
  title: {
    fontSize: 20
  },
  message: {
    fontStyle: "italic"
  }
});
