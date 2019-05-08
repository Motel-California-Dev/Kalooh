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

import { SecureStore } from "expo";

import connect from '../../context/connect';
import { UserConsumer } from '../../context/User';

class SettingsScreen extends React.Component {
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
    const { username, firstName, lastName, picture } = this.props.user;
    console.log(this.props.user);
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
                  source={picture ? { uri: picture } : require("../../../assets/default-profile.png")}
                  style={{ width: 75, height: 75, borderRadius: 37.5 }}
                />
              </TouchableHighlight>
            </View>
            <View style={{ flex: 3 }}>
              <Text style={{ fontSize: 18 }}>{this.props.user.username}</Text>
              <Text>{this.props.user.firstName} {this.props.user.lastName}</Text>
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
              onPress={() => this.props.navigation.navigate("ChangePassword")}
            />
            <SettingsList.Header headerStyle={{ marginTop: 15 }} />
            <SettingsList.Item
              title="About Us"
              onPress={() => Alert.alert("Route To About Us Page")}
            />
            <SettingsList.Item
              title="Log out"
              onPress={async () => {
                await SecureStore.deleteItemAsync("token").then(() => {
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

export default connect(UserConsumer)(SettingsScreen);

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
