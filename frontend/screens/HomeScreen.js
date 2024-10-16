import React from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>J E N G A</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate('Game')}
                style={styles.menu}>
                <Text style={styles.menuText}>Start Game</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('Menu')}
                style={styles.menu}>
                <Text style={styles.menuText}>Menu</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('Options')}
                style={styles.menu}>
                <Text style={styles.menuText}>Options</Text>
            </TouchableOpacity>
        </View>
    );
}

export default HomeScreen;

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    title: {
        position: 'absolute',
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
        top: 80,
    },
    menu: {
        width: 200,
        height: 50,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginBottom: 20,
    },
    menuText: {
        color: 'white',
        fontSize: 17,
        fontWeight: 'bold',
    },
}
