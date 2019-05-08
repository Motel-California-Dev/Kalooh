import { createMaterialTopTabNavigator } from "react-navigation";
import FriendsScreen from "../friends/FriendsScreen";
import FollowersScreen from "../followers/FollowersScreen";

/* Navigator between Friend and Followers */
export default (PeopleNavigator = createMaterialTopTabNavigator(
  {
    Followers: FriendsScreen,
  },
  {
    tabBarOptions: {
      upperCaseLabel: false,
      style: {
        backgroundColor: "#629FFF"
      },
      indicatorStyle: {
        backgroundColor: "white"
      }
    }
  }
));
