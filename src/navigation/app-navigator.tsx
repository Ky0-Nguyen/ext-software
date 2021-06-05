import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { ROUTE_KEY } from '@constants/route-key'
import HomeScreen from '@screens/home'
import { MainTab } from './private-routes/tabbar/MainTab'

const Stack = createStackNavigator()

export const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={ROUTE_KEY.MAIN_TAB} headerMode="none">
      <Stack.Screen name={ROUTE_KEY.MAIN_TAB} component={MainTab} />
    </Stack.Navigator>
  )
}