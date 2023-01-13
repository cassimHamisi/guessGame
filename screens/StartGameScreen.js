import { useEffect, useState } from "react";
import Color from "../constants/Color";
import {
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  useWindowDimensions,
  View,
} from "react-native";
import PrimaryButton from "../components/UI/PrimaryButton";
import Title from "../components/UI/Title";
import Card from "../components/UI/Card";
import InstructionText from "../components/UI/InstructionText";

function StartGameScreen(props) {
  const { changeScreenFn } = props;
  const [enteredNumber, setEnteredNumber] = useState("");
  const { height, width } = useWindowDimensions();
  const marginDeviceTop = height < 380 ? 5 : 100;

  const onChangeTextHandler = (inputNumber) => {
    setEnteredNumber(+inputNumber);
  };
  const onResetInputHandler = () => {
    setEnteredNumber("");
  };

  const onConfirmInputHandler = () => {
    if (isNaN(enteredNumber) || enteredNumber <= 0) {
      Alert.alert("Invalid Number!!", "Number must be 0 to 99", [
        { onPress: onResetInputHandler, text: "Okay", style: "destructive" },
      ]);
    }
    changeScreenFn(enteredNumber);
  };

  return (
    <ScrollView style={styles.rootContainer}>
      <KeyboardAvoidingView style={styles.rootContainer}>
        <View style={[styles.rootContainer2, { marginTop: marginDeviceTop }]}>
          <Title>Guess A Number😉</Title>
          <Card>
            <InstructionText>Enter a Number</InstructionText>
            <TextInput
              style={styles.numberInput}
              maxLength={2}
              keyboardType="number-pad"
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={onChangeTextHandler}
              value={enteredNumber}
            />
            <View style={styles.btnsContainer}>
              <View style={styles.btnContainer}>
                <PrimaryButton onPress={onResetInputHandler}>
                  Reset
                </PrimaryButton>
              </View>
              <View style={styles.btnContainer}>
                <PrimaryButton onPress={onConfirmInputHandler}>
                  Confirm
                </PrimaryButton>
              </View>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}
export default StartGameScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  rootContainer2: {
    flex: 1,
    alignItems: "center",
  },
  numberInput: {
    height: 50,
    fontSize: 32,
    borderBottomColor: Color.accent500,
    borderBottomWidth: 2,
    color: Color.accent500,
    marginVertical: 8,
    fontWeight: "bold",
    // fontFamily: "open-sans-bold",
    width: 50,
    textAlign: "center",
  },
  btnsContainer: {
    flexDirection: "row",
  },
  btnContainer: {
    flex: 1,
  },
});
