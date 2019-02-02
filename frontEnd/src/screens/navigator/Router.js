import React from "react";
import { SafeAreaView, View, Text } from "react-native";
import {
  createSwitchNavigator,
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer
} from "react-navigation";

import LoginScreen from "../login/LoginScreen";
import HomeScreen from "../home/HomeScreen";
import NotificationScreen from "../notification/NotificationScreen";

/* Navigator that goes from Login Screen to the Main App (TabNavigator)*/
export default class Router extends React.Component {
  render() {
    return <AppContainer />;
  }
}

/* Maybe add a Forget password screen later, but for now, just LoginScreen */
const AuthenticationNavigator = createStackNavigator(
  {
    Login: LoginScreen
  },
  {
    headerMode: "none",
    navigationOptions: {
      headerVisible: false
    }
  }
);

/* Tab Navigator that navigations between Home, Notification, Follower, and other screens */
const TabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  Notification: NotificationScreen
});

/* Navigator that goes from Login Screen to the Main App (TabNavigator)*/
const AppNavigator = createSwitchNavigator({
  Auth: AuthenticationNavigator,
  Main: TabNavigator
});

const AppContainer = createAppContainer(AppNavigator);
