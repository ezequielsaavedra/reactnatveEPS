import Descubrir from '../screens/Descubrir'
import FavoritosNavigator from './FavoritosNavigator';
import FinalizadoNavigator from './FinalizadoNavigator';
import { FontAwesome } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { View } from 'react-native'
import WatchListNavigator from './WatchListNavigator';
import colors from '../constants/colors'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const MainNavigator = () => {
    const BottomTab = createBottomTabNavigator()

    return (
        <NavigationContainer screenOptions={{
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
            tabBarActiveBackgroundColor: "#1b1c1c",
            tabBarLabelStyle: {
                fontFamily: "SourceSerifPro"
            }
        }} >
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
                tabBarActiveBackgroundColor: "#1b1c1c",
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
                                style={{ color: colors.yellowText }}
                            />
                        </View>
                    ),
                }} />
                <BottomTab.Screen name='WatchList' component={WatchListNavigator} options={{
                    title: "Watch List",
                    headerShown: false,
                    tabBarIcon: () => (
                        <View>
                            <FontAwesome
                                name="tv"
                                size={24}
                                style={{ color: colors.yellowText }}
                            />
                        </View>
                    ),
                }} />
                <BottomTab.Screen name='YaVisto' component={FinalizadoNavigator} options={{
                    title: "YaVisto",
                    headerShown: false,
                    tabBarIcon: () => (
                        <View>
                            <FontAwesome
                                name="flag-checkered"
                                size={24}
                                style={{ color: colors.yellowText }}
                            />
                        </View>
                    ),
                }} />
                <BottomTab.Screen name='FavoritosNavigator' component={FavoritosNavigator} options={{
                    title: "Favoritos",
                    headerShown: false,
                    tabBarIcon: () => (
                        <View>
                            <FontAwesome
                                name="heart-o"
                                size={24}
                                style={{ color: colors.yellowText }}
                            />
                        </View>
                    ),
                }} />
            </ BottomTab.Navigator>
        </NavigationContainer>
    )
}

export default MainNavigator
