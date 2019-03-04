import React from "react";
import { StyleSheet, View, SafeAreaView, Text } from "react-native";
import FriendsList from "./FriendsList";
import FriendCard from "./FriendCard";

const friendsList = FriendsList;
export default class FriendsScreen extends React.Component {
  render() {
    let friendCard = friendsList.map(friendInfo => {
      return (
        <View key={friendInfo.email}>
          <FriendCard friend={friendInfo} />
        </View>
      );
    });
    return (
      <SafeAreaView style={{ backgroundColor: "#EFEFF4", flex: 1 }}>
<<<<<<< HEAD
        <View style={[GlobalStyles.statusBarBlue]} />
        <View>{friendCard}</View>
=======
        {friendCard}
>>>>>>> 7786a605d1edbf9029368ed92fff2ca92fde519b
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
