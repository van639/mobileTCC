import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    marginStart: 10,
  },
  input: {
    height: 25,
    width: "80%",
    paddingStart: 2,
    marginStart: -25,
    marginTop: 5,
    borderBottomWidth: 1,
    fontSize: 18,
    borderColor:"#8C8C8C",
  },
  containerIcon: {
    width: 45,
    height: "100%",
    marginEnd: 20,
    alignContent: "flex-end",
    justifyContent: "center",
  },
  icon: {
      alignSelf: "center"
  },
});