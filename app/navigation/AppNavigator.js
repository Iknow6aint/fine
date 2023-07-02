import React from 'react'
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import HomeNavigator from './HomeNavigator';
import AuthNavigator from './AuthNavigator';

const AppNavigator = () => {
    return (
        <NavigationContainer>
            {/* Your app's screens go here */}
            {/* <HomeNavigator /> */}
            <AuthNavigator />
        </NavigationContainer>
    )
}

export default AppNavigator