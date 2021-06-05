import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { ROUTE_KEY } from '@constants/route-key'
import SignIN from '@screens/authen/sign-in'

const Stack = createStackNavigator()

export const PublicStack = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name={ROUTE_KEY.SIGN_IN} component={SignIN} />
    </Stack.Navigator>
  )
}