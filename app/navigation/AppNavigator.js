import { NavigationContainer } from '@react-navigation/native';
import HomeNavigator from './HomeNavigator';
//import AuthNavigator from './AuthNavigator';
export default function AppNavigator() {
    const user = true
    // const dispatch = useDispatch()

    // useEffect(() => {
    //     const unlisten = auth.onAuthStateChanged(authUser => {
    //         if (authUser) {
    //             const user = {
    //                 name: authUser.displayName,
    //                 image: authUser.photoURL,
    //                 email: authUser.email
    //             }
    //             dispatch(loginUser(user))
    //         }
    //         else {
    //             dispatch(logoutUser())
    //         }
    //     })
    //     return () => {
    //         unlisten();
    //     }
    // }, [])

    return (
        <NavigationContainer>
            <HomeNavigator />
        </NavigationContainer>
    )


}

