import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import NumberContainer from "../commponents/NumberContainer/NumberContainer";
import PrimaryButton from "../commponents/PrimaryButton/PrimaryButton";
import Title from "../commponents/Title/Title";


const generateRnadomNumber = (min, max, exclude) => {
    const rdNumb = Math.floor((Math.random() * (max - min)) + min);

    if (rdNumb === exclude) {
        return generateRnadomNumber(min, max, exclude)
    }
    else {
        return rdNumb;
    }
};
let minLimit = 1;
let maxLimit = 100;
const GameScreen = ({ userNumber, onGameOver }) => {

    const initialNumber = generateRnadomNumber(1, 100, userNumber);
    const [gussedNumber, setGussedNumber] = useState(initialNumber);

    // console.log(minLimit, maxLimit, userNumber, gussedNumber)

    useEffect(() => {
        if (userNumber === gussedNumber) {
            onGameOver();
        }
    }, [gussedNumber])

    const handleGuess = (direction) => {

        if ((direction === "lower" && gussedNumber < userNumber) || (direction === "higger" && gussedNumber > userNumber)) {
            Alert.alert("You Lied!", "You Shouldn't be luying", [{ text: "Sorry!", style: "cancel" }]);
            return
        }

        if (direction === "lower") {
            maxLimit = gussedNumber;
        } else {
            minLimit = gussedNumber + 1;
        }
        const newRndNumber = generateRnadomNumber(minLimit, maxLimit, gussedNumber);
        setGussedNumber(newRndNumber);
    };
    return (
        <View style={styles.screen}>
            <Title>Opponet's Guess</Title>
            <NumberContainer>{gussedNumber}</NumberContainer>
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={handleGuess.bind(this, "higger")} >High</PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={handleGuess.bind(this, "lower")} >Low</PrimaryButton>
                </View>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 26
    },
    buttonsContainer: {
        // flex: 1,
        flexDirection: "row",
        justifyContent: "center"
    },
    buttonContainer: {
        flex: 1,
        // justifyContent: "center",
        // alignItems: "center"
    }
})
export default GameScreen;