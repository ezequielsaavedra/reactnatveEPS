import Descubrir from '../screens/Descubrir'
import Favoritos from '../screens/Favoritos'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, } from 'react-native'
import colors from '../constants/colors'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Navigator = () => {

    const Stack = createNativeStackNavigator()


    return (
        <NavigationContainer >
            < Stack.Navigator initialRouteName='Descubrir' >
                <Stack.Screen name='Descubrir' component={Descubrir} options={{
                    title: "Descubrir", headerStyle: {
                        backgroundColor: colors.black,
                    }, headerTintColor: colors.yellowText,
                    headerTitleStyle: {
                        fontFamily: "SourceSerifPro"
                    },headerTitleAlign: "center",
                    animationTypeForReplace: "pop",
                    animation: "slide_from_left"
                }} />
                <Stack.Screen name='Favoritos' component={Favoritos} options={{
                    title: "Favoritos", headerStyle: {
                        backgroundColor: colors.black,
                    }, headerTintColor: colors.yellowText,
                    headerTitleStyle: {
                        fontFamily: "SourceSerifPro"
                    },headerTitleAlign: "center",
                    headerBackVisible: false,
                    animationTypeForReplace: "pop",
                    animation: "slide_from_right"
                }} />
            </ Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigator

const styles = StyleSheet.create({});