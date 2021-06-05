import { observer } from 'mobx-react'
import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import SplashScreen from 'react-native-splash-screen'

const SignInScreen = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide()
    }, 1500);
  })
  return (
    <View>
      <Text>Home Screen</Text>
    </View>
  )
}

export default observer(SignInScreen)