import Account from '../screens/Account';
import DetailScreen from '../screens/DetailScreen';
import React from 'react'
import TabNavigator from './TabNavigator';
import colors from '../constants/colors';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const HomeNavigator = () => {

    return (
        <Stack.Navigator
            initialRouteName='TabNavigator'
            screenOptions={{
                headerStyle: {
                    backgroundColor: colors.black,
                    borderBottomWidth: 0.5
                }, headerTintColor: colors.yellowText,
                headerTitleStyle: {
                    fontFamily: "SourceSerifPro"
                }, headerTitleAlign: "center",
                animation: "none",
            }}>
            <Stack.Screen
                name="TabNavigator"
                component={TabNavigator}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="Details"
                component={DetailScreen}
                options={({ route }) => ({
                    title: route.params.name,
                })}
            />
            <Stack.Screen
                name="Account"
                component={Account}
            />
        </Stack.Navigator>
    )
}

export default HomeNavigator