import React from "react";
import {
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer
} from "react-navigation";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

import { Ionicons } from "@expo/vector-icons";
import SignUpScreen from "../login/SignUpScreen";
import LoginScreen from "../login/LoginScreen";
import HomeScreen from "../home/HomeScreen";
import SearchScreen from "../search/SearchScreen";
import PeopleNavigator from "./PeopleNavigation";
import NotificationScreen from "../notification/NotificationScreen";
import SettingsScreen from "../settings/SettingsScreen";

/* Navigator that goes from Login Screen to the Main App (TabNavigator)*/
export default class Navigation extends React.Component {
  render() {
    return <AppContainer />;
  }
}

/* Create Account & Login Screen */
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
const MainNavigator = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-home" color={tintColor} size={28} />
        )
      }
    },
    Search: {
      screen: SearchScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-search" color={tintColor} size={28} />
        )
      }
    },
    Notification: {
      screen: NotificationScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-notifications" color={tintColor} size={28} />
        )
      }
    },
    People: {
      screen: PeopleNavigator,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-people" color={tintColor} size={28} />
        )
      }
    },
    Settings: {
      screen: SettingsScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-settings" color={tintColor} size={28} />
        )
      }
    }
  },
  {
    navigationOptions: {
      tabBarVisible: true
    },
    animationEnabled: true,
    activeTintColor: "white",
    inactiveTintColor: "rgba(255,255,255,0.4)",
    barStyle: {
      backgroundColor: "#629FFF"
    }
  }
);

/* Navigator that goes from Login Screen to the Main App (TabNavigator)*/
const AppNavigator = createSwitchNavigator({
  Auth: AuthenticationNavigator,
  Main: MainNavigator
});

const AppContainer = createAppContainer(AppNavigator);
