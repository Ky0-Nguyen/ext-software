import { ROUTE_KEY } from '@constants/route-key'
import { navigationServices } from '@navigation/services'
import { observer } from 'mobx-react'
import React, { useEffect } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import SplashScreen from 'react-native-splash-screen'

const SettingScreen = () => {
  const onPress = () => {
    navigationServices.pushToScreen(ROUTE_KEY.SETTING_STACK)
  }
  return (
    <View style={{ flex:1, backgroundColor: 'yellow', justifyContent: 'center',alignItems: 'center', }}>
      <TouchableOpacity onPress={onPress}>
        <Text>Go To Next Screen</Text>
      </TouchableOpacity>
    </View>
  )
}

export default observer(SettingScreen)