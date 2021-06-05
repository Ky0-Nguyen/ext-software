import { AuthContext } from '@navigation/app-navigator'
import { observer } from 'mobx-react'
import React, { useEffect, useContext } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import SplashScreen from 'react-native-splash-screen'

const SignInScreen = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide()
    }, 1500);
  })
  const { signIn } = useContext(AuthContext)
  const login = () => {
    signIn({ username: 'thienthanmeo', password: 'tuan tuan' })
  }

  return (
    <View style={{ height: '100%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'red' }}>
      <TouchableOpacity onPress={login}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  )
}

export default observer(SignInScreen)