import React from "react";
import { View, Text, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.instructions}>witaj</Text>
            <Button
                title="zacznij gre"
                onPress={() => navigation.navigate("Game")}
            />
        </View>
    );
}

export default HomeScreen;

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
