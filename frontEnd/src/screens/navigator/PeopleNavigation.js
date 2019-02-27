import React from "react";
import { View, SafeAreaView } from "react-native";
import {
  createAppContainer,
  createMaterialTopTabNavigator
} from "react-navigation";
import FriendsScreen from "../friends/FriendsScreen";
import FollowersScreen from "../followers/FollowersScreen";
import GlobalStyles from "../../components/GlobalStyles";

/* Navigator that goes from Login Screen to the Main App (TabNavigator)*/
export default class PeopleNavigation extends React.Component {
  render() {
    return (
      <SafeAreaView style={{ backgroundColor: "#EFEFF4", flex: 1 }}>
        <View style={[GlobalStyles.statusBarBlue]} />
        <PeopleNavContainer />
      </SafeAreaView>
    );
  }
}

/* Navigator between Friend and Followers */
const PeopleNavigator = createMaterialTopTabNavigator({
  Friends: FriendsScreen,
  Followers: FollowersScreen
});

const PeopleNavContainer = createAppContainer(PeopleNavigator);
