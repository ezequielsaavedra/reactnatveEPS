import Categories from '../screens/Categories';
import DetailScreen from '../screens/DetailScreen';
import React from 'react'
import TabNavigator from './TabNavigator';
import colors from '../constants/colors';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const MainNavigator = () => {

    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator
            initialRouteName='Watch List'
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
                name="Watch List"
                component={TabNavigator}
                options={{
                    title: "Watch List"
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

export default MainNavigator