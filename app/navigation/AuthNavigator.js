import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text } from 'react-native';
import JoinScreen from '../screens/JoinScreen';

const Stack = createStackNavigator();

const AuthNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Join" component={JoinScreen} />
        </Stack.Navigator>
    )
}

export default AuthNavigator