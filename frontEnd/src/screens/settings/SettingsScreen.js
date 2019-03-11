import React from "react";
import { StyleSheet, View, SafeAreaView, Text, Alert } from "react-native";
import SettingsList from "react-native-settings-list";
import { Ionicons } from "@expo/vector-icons";
import GlobalStyles from "../../components/GlobalStyles";

export default class SettingsScreen extends React.Component {
  constructor() {
    super();
    this.onValueChange = this.onValueChange.bind(this);
    this.state = { notificationSwitch: true, friendsSwitch: false };
  }
  render() {
    var iconColor = "#629FE7";
    return (
      <SafeAreaView style={{ backgroundColor: "#EFEFF4", flex: 1 }}>
        <Text style={styles.title}>Settings</Text>
        <View style={{ backgroundColor: "#EFEFF4", flex: 1 }}>
          <SettingsList borderColor="#c8c7cc" defaultItemSize={50}>
            <SettingsList.Item
              icon={
                <Ionicons
                  name="ios-notifications"
                  color={iconColor}
                  size={32}
                  style={{
                    margin: 8
                  }}
                />
              }
              hasSwitch={true}
              switchState={this.state.notificationSwitch}
              switchOnValueChange={this.onValueChange}
              hasNavArrow={false}
              title="Notifications"
            />
            <SettingsList.Item
              hasSwitch={true}
              switchState={this.state.friendsSwitch}
              switchOnValueChange={this.onValueChange}
              hasNavArrow={false}
              title="Friends Only"
              style={{
                marginLeft: 30
              }}
            />
            <SettingsList.Item
              icon={<Ionicons name="ios-home" color={iconColor} size={32} />}
              title="Blutooth"
              titleInfo="Off"
              titleInfoStyle={styles.titleInfoStyle}
              onPress={() => Alert.alert("Route to Blutooth Page")}
            />
            <SettingsList.Header headerStyle={{ marginTop: 15 }} />
            <SettingsList.Item
              title="Change Username"
              onPress={() => Alert.alert("Route To Change Username")}
            />
            <SettingsList.Item
              title="Change Email"
              onPress={() => Alert.alert("Route To Change Email")}
            />
            <SettingsList.Item
              title="Change Password"
              onPress={() => Alert.alert("Route To Change Password")}
            />
            <SettingsList.Header headerStyle={{ marginTop: 15 }} />
            <SettingsList.Item
              title="About Us"
              onPress={() => Alert.alert("Route To About Us Page")}
            />
          </SettingsList>
        </View>
      </SafeAreaView>
    );
  }
  onValueChange(value) {
    this.setState({ switchValue: value });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff"
  },
  title: {
    fontFamily: "montserrat",
    textAlign: "center",
    paddingVertical: 10,
    fontSize: 28
  }
});
