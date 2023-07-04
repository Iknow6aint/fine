import React, { useEffect } from 'react';
import { Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import HomeNavigator from './HomeNavigator';
import AuthNavigator from './AuthNavigator';
import { loginUser, logoutUser, selectUser } from '../redux/slices/authSlice';
import { auth } from '../configs/firebase';
import { LogBox } from 'react-native';

LogBox.ignoreLogs(['new NativeEventEmitter']);


const AppNavigator = () => {
    const user = useSelector(selectUser)
    const dispatch = useDispatch()

    useEffect(() => {
        const unlisten = auth.onAuthStateChanged(authUser => {
            if (authUser) {
                const user = {
                    name: authUser.displayName,
                    image: authUser.photoURL,
                    email: authUser.email
                }
                dispatch(loginUser(user))
            }
            else {
                dispatch(logoutUser())
            }
        })
        return () => {
            unlisten();
        }
    }, [])

    return (
        <NavigationContainer>
            {user ? (
                <HomeNavigator />
            ) : (
                <AuthNavigator />
            )}
        </NavigationContainer>
    )
}

export default AppNavigator