import AppNavigator from './app/navigation/AppNavigator';
import { store } from "./app/redux/store";
import { Provider } from "react-redux";
export default function App() {
    return (
        <Provider store={store}>
            <AppNavigator />
        </Provider>
    );
}

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
// });
