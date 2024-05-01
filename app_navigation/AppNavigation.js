import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React  from "react";
import SpalshScreen from "../app/normal/splash";
import ParentScreen from "../app/normal/Parent";
import LoginScreen from "../app/login";


const Stack=createStackNavigator();


const AppNavigator=()=>{
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                name='SpalshScreen'
                component={SpalshScreen}
                options={
                    {headerShown:false}
                }
                />
                 <Stack.Screen
                name='ParentScreen'
                component={ParentScreen}
                options={
                    {headerShown:false}
                }
                />
                 <Stack.Screen
                name='LoginScreen'
                component={LoginScreen}
                options={
                    {headerShown:false}
                }
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator;