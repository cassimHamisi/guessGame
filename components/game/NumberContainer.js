import { Dimensions, StyleSheet, Text, View } from "react-native";
import Color from "../../constants/Color";

function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

export default NumberContainer;

const deviceWidth = Dimensions.get("window").width;
// console.log(deviceWidth);

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: Color.accent500,
    padding: deviceWidth < 380 ? 20 : 24,
    borderRadius: 8,
    margin: deviceWidth < 380 ? 20 : 24,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: Color.accent500,
    fontSize: deviceWidth < 380 ? 26 : 38,
    fontWeight: "bold",
    fontFamily: "open-sans-bold",
  },
});
