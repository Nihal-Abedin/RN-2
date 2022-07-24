import React, { useState } from "react";
import { View, TextInput, StyleSheet, Alert } from "react-native";

import PrimaryButton from "../commponents/PrimaryButton/PrimaryButton";

import Colors from "../commponents/constants/colors";

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
        <View style={styles.inputContainer}>
            <TextInput style={styles.numberInput} maxLength={2} value={gussedNumber} onChangeText={handleInput} keyboardType="number-pad" />
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={handleInputButtonReset}>Reset</PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={handleInputButtonConfirm}>Confirm</PrimaryButton>
                </View>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    inputContainer: {
        // flex: 1,
        marginTop: 100,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: Colors.palm800,
        borderRadius: 8,
        elevation: 4,
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 6,
        shadowOpacity: 0.25,
        // alignItems: "center"
        alignItems: "center"
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