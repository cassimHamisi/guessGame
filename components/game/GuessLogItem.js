import { StyleSheet, Text, View } from "react-native";
import Color from "../../constants/Color";

function GuessLogItem(props) {
  const { roundNumber, guess } = props;
  return (
    <View style={styles.listItem}>
      <Text style={styles.itemText}>#{roundNumber}</Text>
      <Text style={styles.itemText}>Opponents Guess: {guess}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: "yellow",
    borderWidth: 1,
    borderRadius: 20,
    padding: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: "white",
    marginVertical: 10,
    width: "100%",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  itemText: {
    fontSize: 20,
    fontWeight: "bold",
    color: Color.primary700,
  },
});
export default GuessLogItem;
