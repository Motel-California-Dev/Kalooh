import React from "react";
import Navigation from "./src/screens/navigator/Navigation";
import { Font, AppLoading } from "expo";
export default class App extends React.Component {
  state = {
    isReady: false
  };
  async componentDidMount() {
    await Font.loadAsync({
      "montserrat-light": require("./assets/fonts/Montserrat-Light.ttf")
    });
    this.setState({ isReady: true });
  }
  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }
    return <Navigation />;
  }
}
