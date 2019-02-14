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
import SettingsScreen from "../settings/SettingsScreen";

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
          <Ionicons name="ios-home" color={tintColor} size={32} />
        )
      }
    },
    Search: {
      screen: SearchScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-search" color={tintColor} size={32} />
        )
      }
    },
    Notification: {
      screen: NotificationScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-notifications" color={tintColor} size={32} />
        )
      }
    },
    Friends: {
      screen: FriendsScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-people" color={tintColor} size={32} />
        )
      }
    },
    Settings: {
      screen: SettingsScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-settings" color={tintColor} size={32} />
        )
      }
    }
  },
  {
    navigationOptions: {
      tabBarVisible: true
    },
    animationEnabled: true,
    tabBarOptions: {
      showLabel: false,
      activeTintColor: "#629FE7",
      inactiveTintColor: "rgba(0,0,0,0.3)"
    }
  }
);

/* Navigator that goes from Login Screen to the Main App (TabNavigator)*/
const AppNavigator = createSwitchNavigator({
  Auth: AuthenticationNavigator,
  Main: TabNavigator
});

const AppContainer = createAppContainer(AppNavigator);
