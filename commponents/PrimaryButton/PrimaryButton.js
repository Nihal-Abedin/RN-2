import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

const PrimaryButton = ({ children, onPress, trySubmit }) => {

    const onButtonPress = () => {

        onPress()


    }
    const styleSet = ({ pressed }) => pressed ? [styles.buttonInnerConteiner, styles.IOSPressed] : styles.buttonInnerConteiner;
    return (
        <View style={styles.buttonOutterContainer} >
            <Pressable style={styleSet} onPress={onButtonPress} android_ripple={{ color: "#640233" }}>
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
        backgroundColor: "#72063c",
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