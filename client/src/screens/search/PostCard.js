import React from "react";
import { StyleSheet, View, Text, Image, TouchableHighlight} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const PostCard = props => {
  return (
    <View style={styles.card}>
      <TouchableHighlight onPress={props.onPressItem}>
        <View style={{ flexDirection: "row" }}>
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <Ionicons name="ios-pin" color="#ff0000" size={50} />
          </View>
          <View style={{ flex: 4 }}>
            <Text style={styles.title}>{props.post.title}</Text>
            <Text style={styles.message}>{props.post.message}</Text>
          </View>
          <View style={{ flex: 1 }} />
        </View>
      </TouchableHighlight>
    </View>
  );
};

export default PostCard;

const styles = StyleSheet.create({
  card: {
    paddingVertical: 10,
    backgroundColor: "rgba(255,255,255,1)"
  },
  title: {
    fontSize: 20
  },
  message: {
    fontStyle: "italic"
  }
});
