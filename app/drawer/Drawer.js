import { createDrawerNavigator } from "@react-navigation/drawer";
import React  from "react";
import Main from "./Mian";


const DrawerStack=createDrawerNavigator();

const Drawer=()=>{
    return(
        <DrawerStack.Navigator>
            <DrawerStack.Screen
            name="Main"
            component={Main}
            options={{headerShown:false}}
            />     
        </DrawerStack.Navigator>
        );
}

export default Drawer;