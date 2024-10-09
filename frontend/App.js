import React from "react"
import { View, Text, Button, Alert } from 'react-native';
import AppStyles from './AppStyles';

export default function App() {
    const handlePress = () => {
        Alert.alert("skibidi sigma rizz")
    }
    return (
        <View style={AppStyles.container}>
            <Text style={AppStyles.title}>
                Witaj
            </Text>
            <Text style={AppStyles.instructions}>
                przycisk nacisnij
            </Text>
            <Button title="rozpocznij gre" onPress={handlePress}/>
        </View>
    )
}