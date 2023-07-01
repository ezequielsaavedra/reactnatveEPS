import AuthNavigator from './AuthNavigation';
import HomeNavigator from './HomeNavigator';
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { useSelector } from "react-redux";

const index = () => {
    const userId = useSelector(state => state.auth.userId)

    return (
        <NavigationContainer>
            {userId ? <HomeNavigator /> : <AuthNavigator />}
        </NavigationContainer>
    );
};

export default index;