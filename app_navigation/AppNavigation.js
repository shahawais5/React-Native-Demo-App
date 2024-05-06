import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React  from "react";
import SpalshScreen from "../app/normal/splash";
import ParentScreen from "../app/normal/Parent";
import LoginScreen from "../app/login";
import DialogueScreen from "../app/bottom/ShowDialogue";
import TabViewExample from "../app/normal/TabView";


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
                    {headerShown:true}
                }
                />
                 <Stack.Screen
                name='LoginScreen'
                component={LoginScreen}
                options={
                    {headerShown:false}
                }
                />
                 <Stack.Screen
                name='DialogueScreen'
                component={DialogueScreen}
                options={
                    {headerShown:true}
                }
                />
                <Stack.Screen 
                name='ApiCalls'
                component={TabViewExample}
                options={{
                    headerShown:true,
                }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator;