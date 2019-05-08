import React, { Component } from "react";

export const UserContext = React.createContext();

export class UserProvider extends Component {
  state = {
    id: null,
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    picture: ""
  };

  componentDidUpdate() {
    console.log("Username: " + this.state.username);
  }

  render() {
    return (
      <UserContext.Provider
        value={{
          user: this.state,
          setUser: (user) =>
            this.setState(user)
        }}
      >
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export const UserConsumer = UserContext.Consumer;

