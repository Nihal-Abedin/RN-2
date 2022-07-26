import React from "react";
import { View, StyleSheet } from "react-native";
import Colors from "../constants/colors";

const Card = ({ children }) => {
    return (
        <View style={styles.inputContainer}>{children}</View>
    );
};

export default Card;

const styles = StyleSheet.create({
    inputContainer: {
        // flex: 1,
        marginTop: 40,
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
    }
})