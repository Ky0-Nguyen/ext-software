import React from "react"
import { ROUTE_KEY } from "@constants/route-key"
import { createStackNavigator } from "@react-navigation/stack"
import SettingScreen from '@screens/settings'
import ProfileScreen from "@screens/settings/ProfileScreen"
import ProfileDetailScreen from "@screens/settings/ProfileDetailScreen"

const Stack = createStackNavigator()
export const SettingStack = () => {
    return (
        <Stack.Navigator
            headerMode="none"
            initialRouteName={ROUTE_KEY.PROFILE}>
            <Stack.Screen name={ROUTE_KEY.PROFILE} component={ProfileScreen} />
            <Stack.Screen name={ROUTE_KEY.PROFILE_DETAIL} component={ProfileDetailScreen} />
        </Stack.Navigator>
    )
}