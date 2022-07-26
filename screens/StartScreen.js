import React, { useState } from "react";
import { View, TextInput, StyleSheet, Alert, Text } from "react-native";

import PrimaryButton from "../commponents/PrimaryButton/PrimaryButton";

import Colors from "../commponents/constants/colors";
import Title from "../commponents/Title/Title";
import Card from "../commponents/Card/Card";
import InstructionText from "../commponents/InstructionText/InstructionText";

const StartScreen = ({ setNumber }) => {

    const [gussedNumber, setGussedNumber] = useState("");
    const handleInput = (e) => {
        setGussedNumber(e);
        // console.log(parseInt(e));
    };
    const handleInputButtonReset = () => {
        setGussedNumber("");

    };

    const handleInputButtonConfirm = () => {
        const checkNumber = parseInt(gussedNumber);

        if ((checkNumber <= 0 || gussedNumber.length === 0) || isNaN(checkNumber)) {
            Alert.alert(
                "Invalid!",
                "Choose an number greater than 0",
                [
                    // {
                    //     text: "Cancel",
                    //     // onPress: () => console.log("Cancel Pressed"),
                    //     style: "cancel"
                    // },
                    { text: "OK", onPress: handleInputButtonReset, style: "destructive" }
                ]
            );
            return;
        }
        setNumber(checkNumber);

    }
    return (
        <View style={styles.rootContainer}>
            <Title>Guess My Number</Title>
            <Card>
                <InstructionText styles={styles.heading}>Enter a number</InstructionText>
                <TextInput style={styles.numberInput} maxLength={2} value={gussedNumber} onChangeText={handleInput} keyboardType="number-pad" />
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={handleInputButtonReset}>Reset</PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={handleInputButtonConfirm}>Confirm</PrimaryButton>
                    </View>
                </View>
            </Card>
        </View>
    );
};
const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        alignItems: "center",
        marginTop: 60
    }, heading: {
        color: Colors.yellow600,
        fontSize: 24
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: Colors.yellow600,
        borderBottomWidth: 2,
        color: Colors.yellow600,
        fontWeight: "bold",
        marginVertical: 8,
        textAlign: "center",
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
});
export default StartScreen;