import React from "react";
import { SafeAreaView, View, Text } from "react-native";
import { createSwitchNavigator, createAppContainer } from "react-navigation";

import LoginScreen from "../login/LoginScreen";
import TabNavigator from "./TabNavigator";

/* This is the Stack Navigator that goes from Login Screen to the Main App */
export default class SwitchNavigator extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const AppSwitchNavigator = createSwitchNavigator({
  Login: LoginScreen,
  TabNavigator: TabNavigator
});

const AppContainer = createAppContainer(AppSwitchNavigator);
