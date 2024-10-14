import React from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";

const GameScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
        </View>
    );
}

export default GameScreen;

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    instructions: {
        fontSize: 16,
        marginBottom: 20,
    },
}