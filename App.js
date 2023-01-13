// // import { StatusBar } from "expo-status-bar";
import { ImageBackground, StyleSheet, Text } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import GameScreen from "./screens/GameScreen";
import { SafeAreaView } from "react-native";
import { useState } from "react";
import Color from "./constants/Color";
import { useFonts } from "expo-font";
import GameOverScreen from "./screens/GameOverScreen";
import { StatusBar } from "expo-status-bar";
// import AppLoading from "expo-app-loading";

export default function App() {
  const [fontsloaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Bold.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Regular.ttf"),
  });
  // if (!fontsloaded) {
  //   return <AppLoading />;
  // }

  const [enteredNumber, setEnteredNumber] = useState();
  const [gameOverState, setGameOverState] = useState(false);
  const [guessRounds, setGuessRound] = useState(0);

  const gameOverHandler = (noOfRounds) => {
    setGameOverState((prevState) => !prevState);
    setGuessRound(noOfRounds);
  };

  const pickNumberHandler = (pickedNumber) => {
    setEnteredNumber(pickedNumber);
    setGameOverState(false);
  };
  let screen = <StartGameScreen changeScreenFn={pickNumberHandler} />;

  const onStartGameHandler = () => {
    setEnteredNumber(null);
    setGuessRound(0);
    setGameOverState(false);
  };

  if (enteredNumber) {
    screen = (
      <GameScreen userNumber={enteredNumber} onGameOver={gameOverHandler} />
    );
  }
  if (gameOverState && enteredNumber) {
    screen = (
      <GameOverScreen
        userNumber={enteredNumber}
        onStartNewGame={onStartGameHandler}
        roundsNumber={guessRounds}
      />
    );
  }
  return (
    <>
      <StatusBar style="light" />
      <LinearGradient
        colors={[Color.primary700, Color.accent500]}
        style={styles.rootScreen}
      >
        <ImageBackground
          resizeMode="cover"
          imageStyle={styles.backgroundImage}
          style={styles.rootScreen}
          source={require("./assets/image/background.png")}
        >
          <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.35,
  },
});
