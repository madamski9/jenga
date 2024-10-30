import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import GameScreen from './screens/GameScreen/GameScreen';

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen 
                    name="Home" 
                    component={HomeScreen} 
                    options={{
                        headerShown: false,
                        }}    
                    />
                <Stack.Screen 
                    name="Game" 
                    component={GameScreen} 
                    options={{
                        title: 'Game',
                        headerStyle: {
                            height: 70
                        },
                        headerTitleStyle: {
                            fontSize: 15
                        },
                        }}
                    />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;