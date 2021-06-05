import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { ROUTE_KEY } from '@constants/route-key'
import HomeScreen from '@screens/home'
import SettingScreen from '@screens/settings'

const Stack = createStackNavigator()

export const PublicStack = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name={ROUTE_KEY.HOME} component={HomeScreen} />
      <Stack.Screen name={ROUTE_KEY.SETTINGS} component={SettingScreen} />
    </Stack.Navigator>
  )
}