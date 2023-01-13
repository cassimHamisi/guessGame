import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
// import { Colors } from "react-native/Libraries/NewAppScreen";
import Title from "../components/UI/Title";
import PrimaryButton from "../components/UI/PrimaryButton";
import Color from "../constants/Color";

function GameOverScreen(props) {
  const { roundsNumber, onStartNewGame, userNumber } = props;
  const { height, width } = useWindowDimensions();
  let imageSize = 300;

  if (width < 380) {
    imageSize = 150;
  }
  if (height < 380) {
    imageSize = 80;
  }

  const imageStyle = {
    height: imageSize,
    width: imageSize,
    borderRadius: imageSize / 2,
  };

  return (
    <ScrollView>
      <View style={styles.rootContainer}>
        <Title>Game Over!!😆</Title>
        <View style={[styles.imageContainer, imageStyle]}>
          <Image
            style={styles.image}
            source={require("../assets/image/success.png")}
          />
        </View>
        <View style={styles.primaryStyle}>
          <Text style={styles.summaryText}>
            Your Phone Needed{" "}
            <Text style={styles.highlight}>{roundsNumber}</Text> Rounds To guess
            your number <Text style={styles.highlight}>{userNumber}</Text>
          </Text>
          <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
        </View>
      </View>
    </ScrollView>
  );
}
const deviceWidth = Dimensions.get("window");

export default GameOverScreen;
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    // height: deviceWidth < 380 ? 150 : 300,
    // width: deviceWidth < 380 ? 150 : 300,
    // borderRadius: deviceWidth < 380 ? 75 : 150,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: Color.primary800,
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontWeight: "bold",
    fontSize: 24,
    color: "red",
    textAlign: "center",
    marginBottom: 15,
  },
  highlight: {
    color: Color.primary700,
  },
  primaryStyle: {
    justifyContent: "center",
    alignItems: "center",
  },
});
