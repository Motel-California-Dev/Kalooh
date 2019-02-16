import React from "react";
import { StyleSheet, View, SafeAreaView, Text } from "react-native";
import SettingsList from "react-native-settings-list";
import { Ionicons } from "@expo/vector-icons";
import GlobalStyles from "../../components/GlobalStyles";

export default class SettingsScreen extends React.Component {
  constructor() {
    super();
    this.onValueChange = this.onValueChange.bind(this);
    this.state = { switchValue: false };
  }
  render() {
    var iconColor = "#629FE7";
    return (
      <SafeAreaView style={{ backgroundColor: "#EFEFF4", flex: 1 }}>
        <View
          style={[
            {
              borderBottomWidth: 1,
              borderColor: "#c8c7cc"
            },
            GlobalStyles.statusBarBlue
          ]}
        />
        <Text style={styles.title}>Settings</Text>

        <View style={{ backgroundColor: "#EFEFF4", flex: 1 }}>
          <SettingsList borderColor="#c8c7cc" defaultItemSize={50}>
            <SettingsList.Item
              icon={<Ionicons name="ios-home" color={iconColor} size={32} />}
              hasSwitch={true}
              switchState={this.state.switchValue}
              switchOnValueChange={this.onValueChange}
              hasNavArrow={false}
              title="Airplane Mode"
            />
            <SettingsList.Item
              icon={<Ionicons name="ios-home" color={iconColor} size={32} />}
              title="Wi-Fi"
              titleInfo="Bill Wi The Science Fi"
              titleInfoStyle={styles.titleInfoStyle}
              onPress={() => Alert.alert("Route to Wifi Page")}
            />
            <SettingsList.Item
              icon={<Ionicons name="ios-home" color={iconColor} size={32} />}
              title="Blutooth"
              titleInfo="Off"
              titleInfoStyle={styles.titleInfoStyle}
              onPress={() => Alert.alert("Route to Blutooth Page")}
            />
            <SettingsList.Item
              icon={<Ionicons name="ios-home" color={iconColor} size={32} />}
              title="Cellular"
              onPress={() => Alert.alert("Route To Cellular Page")}
            />
            <SettingsList.Item
              icon={<Ionicons name="ios-home" color={iconColor} size={32} />}
              title="Personal Hotspot"
              titleInfo="Off"
              titleInfoStyle={styles.titleInfoStyle}
              onPress={() => Alert.alert("Route To Hotspot Page")}
            />
            <SettingsList.Header headerStyle={{ marginTop: 15 }} />
            <SettingsList.Item
              icon={<Ionicons name="ios-home" color={iconColor} size={32} />}
              title="Notifications"
              onPress={() => Alert.alert("Route To Notifications Page")}
            />
            <SettingsList.Item
              icon={<Ionicons name="ios-home" color={iconColor} size={32} />}
              title="Control Center"
              onPress={() => Alert.alert("Route To Control Center Page")}
            />
            <SettingsList.Item
              icon={<Ionicons name="ios-home" color={iconColor} size={32} />}
              title="Do Not Disturb"
              onPress={() => Alert.alert("Route To Do Not Disturb Page")}
            />
            <SettingsList.Header headerStyle={{ marginTop: 15 }} />
            <SettingsList.Item
              icon={<Ionicons name="ios-home" color={iconColor} size={32} />}
              title="General"
              onPress={() => Alert.alert("Route To General Page")}
            />
            <SettingsList.Item
              icon={<Ionicons name="ios-home" color={iconColor} size={32} />}
              title="Display & Brightness"
              onPress={() => Alert.alert("Route To Display Page")}
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
