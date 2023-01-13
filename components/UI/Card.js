import { StyleSheet, View } from "react-native";

function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

export default Card;

const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    padding: 16,
    marginTop: 42,
    backgroundColor: "#3b021f",
    marginHorizontal: 24,
    borderRadius: 10,
    elevation: 4,
    shadowColor: "black",
    shadowRadius: 4,
    shadowOffset: { height: 2, width: 1 },
    shadowOpacity: 0.25,
  },
});
