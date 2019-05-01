import { createStackNavigator } from "react-navigation";
import SettingsScreen from "../settings/SettingsScreen";
import ChangePassword from "../settings/ChangePasswordScreen";

/* Navigator between Friend and Followers */
export default (PeopleNavigator = createStackNavigator({
  Settings: {
    screen: SettingsScreen,
    navigationOptions: {
      header: null
    }
  },
  ChangePassword: {
    screen: ChangePassword,
    navigationOptions: {
      header: null
    }
  }
}));
