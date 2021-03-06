import { StyleSheet, Platform, StatusBar } from "react-native";

export default StyleSheet.create({
  statusBarBlue: {
    backgroundColor: "#629FE7",
    height: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  statusBarWhite: {
    backgroundColor: "#fff",
    height: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  horizontalLine: {
    borderBottomColor: "rgba(255,255,255,0.5)",
    borderBottomWidth: 1,
    marginVertical: 10
  }
});
