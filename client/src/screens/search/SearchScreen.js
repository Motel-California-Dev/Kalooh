import React from "react";
import { StyleSheet, View, SafeAreaView, Text } from "react-native";
import { SearchBar } from "react-native-elements";
import axios from "../../../config/axios";
//import PostCard from "./PostCard";

export default class SearchScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      posts: []
    };
  }
  async componentDidMount() {
    await axios
      .get("posts")
      .then(res => {
        console.log(res.data);
        this.setState({ posts: res.data });
        console.log("posts/////////////////\n" + this.state.posts);
      })
      .catch(err => {
        console.log("ahhh");
      });
  }
  updateSearch = search => {
    this.setState({ search });
  };

  render() {
    const { search, posts } = this.state;
    let postList = posts.map(postInfo => {
      return (
        <View key={postInfo.id}>
          { /* <PostCard post={postInfo} /> */}
        </View>
      );
    });
    return (
      <SafeAreaView style={{ backgroundColor: "#EFEFF4", flex: 1 }}>
        <SearchBar
          placeholder="Search here..."
          onChangeText={this.updateSearch}
          value={search}
          cancelIcon
          lightTheme
          containerStyle={{ backgroundColor: "white" }}
          inputContainerStyle={{ backgroundColor: "white" }}
        />
        {postList}
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
  }
});
