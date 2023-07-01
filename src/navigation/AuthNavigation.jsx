import AuthScreen from "../screens/AuthScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
                headerShadowVisible: false,
                headerShown: false,
            }}
        >
            <Stack.Screen name="Login" component={AuthScreen} />
        </Stack.Navigator>
    );
};

export default AuthNavigator