import React, { Component } from "react";

export const UserContext = React.createContext();

export class UserProvider extends Component {
  state = {
    id: null,
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: ""
  };

  componentDidUpdate() {
    console.log("Username: " + this.state.username);
  }

  render() {
    return (
      <UserContext.Provider
        value={{
          user: this.state,
          setUser: (id, firstName, lastName, email, username, password) =>
            this.setState({
              id,
              firstName,
              lastName,
              email,
              username,
              password
            }),
          updatePassword: password =>
            this.setState({
              password
            }),
          updateUsername: username =>
            this.setState({
              username
            })
        }}
      >
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export const UserConsumer = UserContext.Consumer;
