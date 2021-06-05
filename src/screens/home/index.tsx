import { AuthContext } from '@navigation/app-navigator'
import { observer } from 'mobx-react'
import React, { useContext, useEffect } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import SplashScreen from 'react-native-splash-screen'

const HomeScreen = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide()
    }, 1500);
  })
  const { signOut } = useContext(AuthContext)
  const logout = () => {
    signOut()
  }

  return (
    <View style={{ height: '100%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'red' }}>
      <TouchableOpacity onPress={logout}>
        <Text>logout</Text>
      </TouchableOpacity>
    </View>
  )
}

export default observer(HomeScreen)