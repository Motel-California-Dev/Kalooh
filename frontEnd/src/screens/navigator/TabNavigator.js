import React from "react";
import { View, SafeAreaView, Text, Ionicons } from "react-native";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "../home/HomeScreen";
import NotificationScreen from "../notification/NotificationScreen";

/* This is the Tab Navigator that navigations between Home, Notification, Follower, and other screens */
export default class TabNavigator extends React.Component {
  render() {
    return <MainContainer />;
  }
}

const AppTabNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: "Home"
    }
  },
  Notifications: NotificationScreen
});

const MainContainer = createAppContainer(AppTabNavigator);
