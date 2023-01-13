import { StyleSheet, Text } from "react-native";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    borderWidth: 4,
    padding: 12,
    marginTop: 50,
    borderColor: "white",
    maxWidth: "80%",
    // fontFamily: "open-sans",
  },
});
