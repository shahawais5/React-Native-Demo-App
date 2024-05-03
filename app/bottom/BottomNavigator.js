import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Screen1 from "./Screen1";
import Screen2 from "./Screen2";
import Screen3 from "./Screen3";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Bottom=createBottomTabNavigator();

const BottomNavigator=()=>{
    return(
       <Bottom.Navigator
       initialRouteName={"Screen1"}
       activeColor="#f0edf6"
       inactiveColor="#3e2465"
       barStyle={{ backgroundColor: '#694fad' }}
       >
        <Bottom.Screen 
        name="Home"
        component={Screen1}
        options={{headerShown:false,
         tabBarLabel: 'Home',
         tabBarIcon: ({ color }) => (
           <MaterialCommunityIcons name="home" color={color} size={26} />
         ),
        }}
        />
           <Bottom.Screen 
        name="Products"
        component={Screen2}
        options={{headerShown:false,
         tabBarLabel: 'Updates',
         tabBarIcon: ({ color }) => (
           <MaterialCommunityIcons name="bell" color={color} size={26} />
         ),
      }}
        />
           <Bottom.Screen 
        name="Dashboard"
        component={Screen3}
        options={{headerShown:false,
         tabBarLabel: 'Profile',
         tabBarIcon: ({ color }) => (
           <MaterialCommunityIcons name="account" color={color} size={26} />
         ),
      }}
        />
       </Bottom.Navigator>
    );
}

export default BottomNavigator;