import React from "react";
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity
} from "react-native";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { updatePassword } from "../../controllers/UserController";

export default class ChangePasswordScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      oldPassword: "",
      newPassword: "",
      newPassword2: ""
    };
  }

  _backButton = () => {
    this.props.navigation.navigate("Settings");
  };

  _handleUpdatePassword = () => {
    if (this.state.newPassword != this.state.newPassword2) {
      Alert.alert("Error: Passwords did not match.");
    } else {
      Alert.alert("Password changed!");
      this._backButton;
    }
  };

  render() {
    return (
      <SafeAreaView style={{ backgroundColor: "#ffffff", flex: 1 }}>
        <View style={styles.header}>
          <TouchableOpacity onPress={this._backButton}>
            <Feather
              name="chevron-left"
              size={36}
              color="#000"
              style={{
                flex: 1,
                margin: 5
              }}
            />
          </TouchableOpacity>
        </View>
        <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={{ flex: 1 }}>
              <Text style={styles.title}>Change Your Password</Text>
              <View style={styles.topContainer}>
                <MaterialCommunityIcons
                  name="lock-reset"
                  size={150}
                  color="#000"
                />
              </View>
              <View style={styles.formContainer}>
                <Text style={styles.prompText}>Enter current password</Text>
                <View styles={styles.textInputContainer}>
                  <TextInput
                    returnKeyType="go"
                    autoCapitalize="none"
                    secureTextEntry={true}
                    autoCapitalize="none"
                    autoCorrect={false}
                    onSubmitEditing={() => this.newPasswordInput.focus()}
                    ref={input => (this.passwordInput = input)}
                    style={styles.input}
                    onChangeText={oldPassword => this.setState({ oldPassword })}
                    value={this.state.oldPassword}
                  />
                </View>
                <Text style={styles.prompText}>New password</Text>
                <TextInput
                  returnKeyType="go"
                  autoCapitalize="none"
                  secureTextEntry={true}
                  autoCapitalize="none"
                  autoCorrect={false}
                  onSubmitEditing={() => this.newPassword2Input.focus()}
                  ref={input => (this.newPasswordInput = input)}
                  style={styles.input}
                  onChangeText={newPassword => this.setState({ newPassword })}
                  value={this.state.newPassword}
                />
                <Text style={styles.prompText}>Confirm password</Text>
                <TextInput
                  returnKeyType="go"
                  autoCapitalize="none"
                  secureTextEntry={true}
                  autoCapitalize="none"
                  autoCorrect={false}
                  ref={input => (this.newPassword2Input = input)}
                  style={styles.input}
                  onChangeText={newPassword2 => this.setState({ newPassword2 })}
                  value={this.state.newPassword2}
                />
                <TouchableOpacity
                  style={styles.changePasswordButton}
                  onPress={this._handleUpdatePassword}
                >
                  <Text style={styles.changePasswordText}>Change Password</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff"
  },
  header: {
    flexDirection: "row",
    height: 50,
    margin: 5
  },
  topContainer: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontFamily: "montserrat",
    textAlign: "center",
    fontSize: 28
  },
  formContainer: {
    flex: 3,
    justifyContent: "center",
    padding: 20
  },
  prompText: {
    fontSize: 18,
    fontFamily: "montserrat",
    textAlign: "center"
  },
  input: {
    height: 40,
    borderRadius: 50,
    backgroundColor: "rgba(0,0,0,0.08)",
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.15)",
    fontSize: 20,
    fontFamily: "montserrat",
    color: "rgba(0,0,0,0.8)",
    paddingHorizontal: 20,
    marginVertical: 10
  },
  changePasswordButton: {
    backgroundColor: "#062c52",
    paddingVertical: 10,
    marginVertical: 30,
    borderRadius: 50
  },
  changePasswordText: {
    textAlign: "center",
    letterSpacing: 2.5,
    color: "#fff",
    fontFamily: "montserrat-light",
    fontSize: 20
  }
});
