import { useEffect, useState } from "react";
import GuessLogItem from "../components/game/GuessLogItem";
import { AntDesign } from "@expo/vector-icons";
import PrimaryButton from "../components/UI/PrimaryButton";
import NumberContainer from "../components/game/NumberContainer";
import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import Title from "../components/UI/Title";
// import { Ionicons } from "@expo/vector-icons";
import Card from "../components/UI/Card";

import InstructionText from "../components/UI/InstructionText";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let maxNumber = 100;
let minNumber = 1;
let initialGuess;

function GameScreen({ userNumber, onGameOver }) {
  initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRound] = useState([initialGuess]);

  useEffect(() => {
    maxNumber = 100;
    minNumber = 1;
  }, []);

  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greator" && currentGuess > userNumber)
    ) {
      Alert.alert(
        "Do not Lie!!",
        `${
          direction === "lower" ? "It should be Greator" : "It Should be Lower"
        }`,
        [
          {
            text: "Okay I won`t",
            style: "cancel",
          },
        ]
      );
      return;
    }
    if (direction === "lower") {
      maxNumber = currentGuess;
    } else {
      minNumber = currentGuess + 1;
    }
    const randomNo = generateRandomBetween(minNumber, maxNumber, currentGuess);
    setCurrentGuess(randomNo);
    setGuessRound((prevState) => [randomNo, ...prevState]);
  };

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessRounds.length);
    }
  }, [currentGuess, userNumber, onGameOver]);

  const guessRoundIndex = guessRounds.length;
  const { height, width } = useWindowDimensions();
  const marginDeviceTop = height < 380 ? 2 : 100;

  let content = (
    <>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.instruction}>
          Higher or Lower??🤔🤔
        </InstructionText>
        <View style={styles.btnsContainer}>
          <View style={styles.btnContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
              <AntDesign name="stepbackward" size={24} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.btnContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "greator")}>
              <AntDesign name="stepforward" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </>
  );
  if (width > 500) {
    content = (
      <>
        <View style={styles.btnContainerWide}>
          <View style={styles.btnContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
              <AntDesign name="stepbackward" size={24} color="white" />
            </PrimaryButton>
          </View>
          <NumberContainer>{currentGuess}</NumberContainer>
          <View style={styles.btnContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "greator")}>
              <AntDesign name="stepforward" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </>
    );
  }

  return (
    <View style={[styles.screen, { marginTop: marginDeviceTop }]}>
      <Title>Opponents </Title>
      {content}
      <View style={styles.listContainer}>
        {/* {guessRounds.map((guessRound) => (
          <Text key={guessRound}>{guessRound}</Text>
        ))} */}
        <FlatList
          data={guessRounds}
          keyExtractor={(item) => item}
          renderItem={(itemData) => (
            <GuessLogItem
              roundNumber={guessRoundIndex - itemData.index}
              guess={itemData.item}
            />
          )}
        />
      </View>
    </View>
  );
}
export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    padding: 32,
    flex: 1,
    alignItems: "center",
  },
  btnsContainer: {
    flexDirection: "row",
  },
  btnContainer: {
    flex: 1,
  },
  btnContainerWide: {
    flexDirection: "row",
    alignItems: "center",
  },
  instruction: {
    marginBottom: 25,
  },
  listContainer: {
    flex: 1,
  },
});
