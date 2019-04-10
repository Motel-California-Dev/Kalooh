import React from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  Alert,
  Image,
  TouchableHighlight
} from "react-native";
import SettingsList from "react-native-settings-list";
import { Ionicons } from "@expo/vector-icons";
import GlobalStyles from "../../components/GlobalStyles";

import { SecureStore } from 'expo';

export default class SettingsScreen extends React.Component {
  constructor() {
    super();
    this.onNotificationValueChange = this.onNotificationValueChange.bind(this);
    this.onFriendValueChange = this.onFriendValueChange.bind(this);
    this.state = { notificationSwitch: true, friendsSwitch: false };
  }
  changeAvatarOnClick = () => {
    Alert.alert("Change Avatar Function");
  };
  onNotificationValueChange(value) {
    this.setState({ notificationSwitch: value });
  }
  onFriendValueChange(value) {
    this.setState({ friendsSwitch: value });
  }

  render() {
    return (
      <SafeAreaView style={{ backgroundColor: "#EFEFF4", flex: 1 }}>
        <Text style={styles.title}>Account Settings</Text>
        <View style={{ backgroundColor: "#EFEFF4", flex: 1 }}>
          <View style={{ flexDirection: "row", marginVertical: 20 }}>
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <TouchableHighlight
                onPress={this.changeAvatarOnClick}
                style={{ width: 75, height: 75, borderRadius: 37.5 }}
              >
                <Image
                  source={require("../../../assets/default-profile.png")}
                  style={{ width: 75, height: 75, borderRadius: 37.5 }}
                />
              </TouchableHighlight>
            </View>
            <View style={{ flex: 3 }}>
              <Text style={{ fontSize: 18 }}>Username goes here</Text>
              <Text>Name goes here</Text>
            </View>
          </View>
          <SettingsList borderColor="#c8c7cc" defaultItemSize={50}>
            <SettingsList.Item
              hasSwitch={true}
              switchState={this.state.notificationSwitch}
              switchOnValueChange={this.onNotificationValueChange}
              hasNavArrow={false}
              title="Notifications"
            />
            <SettingsList.Item
              hasSwitch={true}
              switchState={this.state.friendsSwitch}
              switchOnValueChange={this.onFriendValueChange}
              hasNavArrow={false}
              title="Friends Only"
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
            <SettingsList.Item
              title="Log out"
              onPress={async () => {
                await SecureStore.deleteItemAsync('token')
                  .then(() => {
                    this.props.navigation.navigate("Login");
                  });
              }}
            />
          </SettingsList>
        </View>
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
  },
  title: {
    fontFamily: "montserrat",
    textAlign: "center",
    paddingVertical: 10,
    fontSize: 28
  }
});
