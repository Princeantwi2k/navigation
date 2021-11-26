import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import { NavigationContainer } from "@react-navigation/native"

import Pay from "../Page/Pay"
import Off from "../Page/Off"
import Homepage from "../Page/Homepage"


const Stack = createStackNavigator()

const Navigation = () =>{
   return <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen name="homepage"  component={Homepage} />
        <Stack.Screen name="pay"  component={Pay} />
        <Stack.Screen name="off"  component={Off} />
    </Stack.Navigator>
</NavigationContainer> 
}


export default Navigation