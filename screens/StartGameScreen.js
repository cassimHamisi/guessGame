import { StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen(props) {
  return (
    <View style={styles.inputContainer}>
      <TextInput />
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Cancel</PrimaryButton>
    </View>
  );
}
export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    padding: 16,
    marginTop: 100,
    backgroundColor: "#720636",
    marginHorizontal: 24,
    borderRadius: 10,
    elevation: 4,
    shadowColor: "black",
    shadowRadius: 4,
    shadowOffset: { height: 2, width: 1 },
    shadowOpacity: 0.25,
  },
});
