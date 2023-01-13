// import { Children } from "react";
import { StyleSheet, Text } from "react-native";
import Color from "../../constants/Color";

function InstructionText({ children, style }) {
  return <Text style={[styles.textNumber, style]}>{children}</Text>;
}

export default InstructionText;

const styles = StyleSheet.create({
  textNumber: {
    color: Color.accent500,
    // fontFamily: "open-sans-bold",
    fontWeight: "bold",
    fontSize: 20,
  },
});
