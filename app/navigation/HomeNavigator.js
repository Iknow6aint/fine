import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import MainTabNavigator from './MainTabNavigator';

const Stack = createStackNavigator();
const HomeNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="HomeScreen" component={MainTabNavigator} />
        </Stack.Navigator>
    )
}

export default HomeNavigator