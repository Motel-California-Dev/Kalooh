import React from "react";
import Navigation from "./src/screens/navigator/Navigation";
import { Font, AppLoading } from "expo";
import { UserProvider } from "./src/context/User";

export default class App extends React.Component {
  state = {
    isReady: false
  };
  async componentDidMount() {
    await Font.loadAsync({
      montserrat: require("./assets/fonts/Montserrat-Regular.ttf"),
      "montserrat-light": require("./assets/fonts/Montserrat-Light.ttf")
    });
    this.setState({ isReady: true });
  }
  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }
    return (
      <UserProvider>
        <Navigation />
      </UserProvider>
    );
  }
}
