import React from "react";
import { StyleSheet, View, SafeAreaView, Text } from "react-native";
import FollowersList from "./FollowersList";
import FollowerCard from "./FollowerCard";

const followersList = FollowersList;
export default class FriendsScreen extends React.Component {
  render() {
    let followerCard = followersList.map(followerInfo => {
      return (
        <View key={followerInfo.email}>
          <FollowerCard follower={followerInfo} />
        </View>
      );
    });
    return (
      <SafeAreaView style={{ backgroundColor: "#EFEFF4", flex: 1 }}>
        {followerCard}
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
