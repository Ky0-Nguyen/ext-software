import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { ROUTE_KEY } from '@constants/route-key'
import HomeScreen from '@screens/home'
import SettingScreen from '@screens/settings'
import WebViewScreen from '@screens/web-view'
import { SettingStack } from '../SettingStack'

const Tab = createMaterialBottomTabNavigator()

export const MainTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={ROUTE_KEY.HOME} component={HomeScreen} />
      <Tab.Screen name={ROUTE_KEY.SETTINGS} component={SettingScreen} />
    </Tab.Navigator>
  )
}