import AuthNavigator from "./AuthNavigator";
import MainNavigator from './MainNavigator';
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { useSelector } from "react-redux";

const index = () => {
    const userId = false;

    return (
        <NavigationContainer>
            {userId ? <MainNavigator /> : <AuthNavigator />}
        </NavigationContainer>
    );
};

export default index;