import Categories from '../screens/Categories';
import DescubrirNavigator from './DescubrirNavigator';
import { FontAwesome } from '@expo/vector-icons';
import React from 'react'
import { View } from 'react-native'
import colors from '../constants/colors'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const BottomTab = createBottomTabNavigator()

const TabNavigator = () => {

    return (
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
                <BottomTab.Screen name='DescubrirNavigator' component={DescubrirNavigator} options={{
                    title: "Descubrir",
                    headerShown: false,
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
                <BottomTab.Screen name='Watch List' component={Categories} options={{
                    title: "Watch List",
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
                <BottomTab.Screen name='Ya Visto' component={Categories} options={{
                    title: "Ya Visto",
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
                <BottomTab.Screen name='Favoritos' component={Categories} options={{
                    title: "Favoritos",
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
    )
}

export default TabNavigator
