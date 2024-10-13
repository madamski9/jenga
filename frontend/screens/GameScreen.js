import React from "react";
import { View, Text, Button } from "react-native";

const GameScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.instructions}>gra</Text>
            <Button
                title="powrot"
                onPress={() => navigation.navigate("Home")}
            />
        </View>
    );
}

export default GameScreen;

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
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