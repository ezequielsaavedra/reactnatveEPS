import Descubrir from '../screens/Descubrir';
import DescubrirCategories from '../screens/DescubrirCategories';
import colors from '../constants/colors';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const DescubrirNavigator = () => {

    return (
        <Stack.Navigator
            initialRouteName='Descubrir'
            screenOptions={{
                headerStyle: {
                    backgroundColor: colors.black,
                    borderBottomWidth: 0.5
                }, headerTintColor: colors.yellowText,
                headerTitleStyle: {
                    fontFamily: "SourceSerifPro"
                }, headerTitleAlign: "center",
                animation: "none"
            }}>
            <Stack.Screen
                name="Descubrir"
                component={Descubrir}
                options={{
                    title: "Descubrir"
                }}
            />
            <Stack.Screen
                name="DescubrirCategories"
                component={DescubrirCategories}
                options={({ route }) => ({
                    title: route.params.name,
                })}
            />
        </Stack.Navigator>
    )
}

export default DescubrirNavigator