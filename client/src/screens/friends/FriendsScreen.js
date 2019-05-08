import React from "react";
import { View, SafeAreaView, ScrollView } from "react-native";
import FriendsList from "./FriendsList";
import FriendCard from "./FriendCard";
import connect from '../../context/connect';
import { UserConsumer } from '../../context/User';
import { getFollowers } from '../../controllers/UserController';

const friendsList = FriendsList;

class FriendsScreen extends React.Component {
  constructor(props) {
    super(props);

    console.log(props);

    this.state = {
      followers: []
    };
  }

  async componentDidMount() {
    const followers = await getFollowers(this.props.user.id); 
    console.log(followers);
    this.setState({ followers });
  }

  render() {
    return (
      <SafeAreaView style={{ backgroundColor: "#EFEFF4", flex: 1 }}>
        <ScrollView style={{ flex: 1 }}>
          {
            this.state.followers && this.state.followers.map(follower => (
                <View key={follower.email}>
                  <FriendCard friend={follower} />
                </View>
            ))
          }
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default connect(UserConsumer)(FriendsScreen);

