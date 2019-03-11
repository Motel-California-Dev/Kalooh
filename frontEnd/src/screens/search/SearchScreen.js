import React from "react";
import { StyleSheet, View, SafeAreaView, Text } from "react-native";
import { SearchBar } from "react-native-elements";

export default class SearchScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
  }

  updateSearch = search => {
    this.setState({ search });
  };
  render() {
    const { search } = this.state;

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
