import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import Colors from "../constants/colors";

const PrimaryButton = ({ children, onPress, trySubmit }) => {

    const onButtonPress = () => {

        onPress()


    }
    const styleSet = ({ pressed }) => pressed ? [styles.buttonInnerConteiner, styles.IOSPressed] : styles.buttonInnerConteiner;
    return (
        <View style={styles.buttonOutterContainer} >
            <Pressable style={styleSet} onPress={onButtonPress} android_ripple={{ color: Colors.palm600 }}>
                <Text style={styles.buttonTxt}>{children}</Text>
            </Pressable>
        </View>
    );

};

const styles = StyleSheet.create({
    buttonOutterContainer: {
        overflow: "hidden",
        borderRadius: 28,
        // display: "inline"
    },
    buttonInnerConteiner: {
        backgroundColor: Colors.palm500,
        paddingVertical: 8, paddingHorizontal: 16, margin: 4, elevation: 2,
        flexDirection: "row"
    },
    buttonTxt: {
        flex: 1,
        color: "#FFF",
        textAlign: "center",
        // backgroundColor: "red"
    },
    IOSPressed: {
        opacity: 0.75
    }
})

export default PrimaryButton;