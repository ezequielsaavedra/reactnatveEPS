import Categories from '../screens/Categories';
import Descubrir from '../screens/Descubrir';
import { FontAwesome } from '@expo/vector-icons';
import React from 'react'
import { View } from 'react-native'
import colors from '../constants/colors'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const TabNavigator = () => {
    const BottomTab = createBottomTabNavigator()

    return (
            < BottomTab.Navigator initialRouteName='Descubrir' screenOptions={{
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
                <BottomTab.Screen name='Ya Visto' component={Categories} options={{
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
                <BottomTab.Screen name='Favoritos' component={Categories} options={{
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
    )
}

export default TabNavigator
