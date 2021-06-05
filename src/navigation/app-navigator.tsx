import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { ROUTE_KEY } from '@constants/route-key'
import HomeScreen from '@screens/home'

const Stack = createStackNavigator()

export const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={ROUTE_KEY.HOME} headerMode="none">
      <Stack.Screen name={ROUTE_KEY.HOME} component={HomeScreen} />
    </Stack.Navigator>
  )
}