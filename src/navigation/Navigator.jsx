import Descubrir from '../screens/Descubrir'
import Favoritos from '../screens/Favoritos'
import { FontAwesome } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { View } from 'react-native'
import colors from '../constants/colors'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Navigator = () => {

    const BottomTab = createBottomTabNavigator()


    return (
        <NavigationContainer >
            < BottomTab.Navigator initialRouteName='Descubrir' screenOptions={{
                headerStyle: {
                    backgroundColor: colors.black,
                    borderBottomWidth: 0.5
                }, headerTintColor: colors.yellowText,
                headerTitleStyle: {
                    fontFamily: "SourceSerifPro"
                }, headerTitleAlign: "center",
                tabBarStyle: {
                    backgroundColor: colors.black
                }, tabBarInactiveTintColor: colors.yellowText,
                tabBarActiveTintColor: colors.yellowText,
                tabBarActiveBackgroundColor: colors.backgroundApp,
                tabBarLabelStyle: {
                    fontFamily: "SourceSerifPro"
                }
            }}>
                <BottomTab.Screen name='Descubrir' component={Descubrir} options={{
                    title: "Descubrir",
                    tabBarIcon: () => (
                        <View>
                            <FontAwesome
                                name="search"
                                size={24}
                                style={{color: colors.yellowText}}
                            />
                        </View>
                    ),
                }} />
                <BottomTab.Screen name='Favoritos' component={Favoritos} options={{
                    title: "Favoritos",
                    headerBackVisible: false,
                    tabBarIcon: () => (
                        <View>
                            <FontAwesome
                                name="heart-o"
                                size={24}
                                style={{color: colors.yellowText}}
                            />
                        </View>
                    ),
                }} />
            </ BottomTab.Navigator>
        </NavigationContainer>
    )
}

export default Navigator
