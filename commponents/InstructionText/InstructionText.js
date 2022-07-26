import React from "react";
import { Text, StyleSheet } from "react-native";
import Colors from "../constants/colors";

const InstructionText = ({ children, styles }) => {
    return (
        <Text style={[style.txt, styles]}>{children}</Text>
    );
};
export default InstructionText;

const style = StyleSheet.create({
    txt: {
        color: Colors.yellow600,
        fontSize: 24
    }
})