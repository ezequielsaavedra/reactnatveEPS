import Categories from '../screens/Categories';
import DetailScreen from '../screens/DetailScreen';
import React from 'react'
import colors from '../constants/colors';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const FavoritosNavigator = () => {

    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator
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
                name="Favoritos"
                component={Categories}
                options={{
                    title: "Favoritos"
                }}
            />
            <Stack.Screen
                name="Details"
                component={DetailScreen}
                options={({ route }) => ({
                    title: route.params.name,
                })}
            />
        </Stack.Navigator>
    )
}

export default FavoritosNavigator