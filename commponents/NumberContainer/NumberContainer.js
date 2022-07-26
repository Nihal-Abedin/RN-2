import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Colors from "../constants/colors";

const NumberContainer = ({ children }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{children}</Text>
        </View>
    );
};

export default NumberContainer;

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Colors.yellow600,
        padding: 24,
        margin: 24,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        color: Colors.yellow600,
        fontSize: 36
    }
})