import React from "react";
import { SafeAreaView, View, Text } from "react-native";
import {
  createSwitchNavigator,
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer
} from "react-navigation";

import { Ionicons } from "@expo/vector-icons";
import SignUpScreen from "../login/SignUpScreen";
import LoginScreen from "../login/LoginScreen";
import HomeScreen from "../home/HomeScreen";
import SearchScreen from "../search/SearchScreen";
import FriendsScreen from "../friends/FriendsScreen";
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
    Login: LoginScreen,
    SignUp: SignUpScreen
  },
  {
    headerMode: "none",
    navigationOptions: {
      headerVisible: false
    }
  }
);

/* Tab Navigator that navigations between Home, Notification, Follower, and other screens */
const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-home" color={tintColor} size={24} />
        )
      }
    },
    Search: {
      screen: SearchScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-search" color={tintColor} size={24} />
        )
      }
    },
    Friends: {
      screen: FriendsScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-people" color={tintColor} size={24} />
        )
      }
    },
    Notification: {
      screen: NotificationScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-notifications" color={tintColor} size={24} />
        )
      }
    }
  },
  {
    navigationOptions: {
      tabBarOptions: {
        activeTintColor: "#629FE7",
        inactiveTintColor: "#888888"
      }
    }
  }
);

/* Navigator that goes from Login Screen to the Main App (TabNavigator)*/
const AppNavigator = createSwitchNavigator({
  Auth: AuthenticationNavigator,
  Main: TabNavigator
});

const AppContainer = createAppContainer(AppNavigator);
