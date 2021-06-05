import { observer } from 'mobx-react'
import React from 'react'
import { Text, View } from 'react-native'

const HomeScreen = () => {
  return (
    <View>
      <Text>Home Screen</Text>
    </View>
  )
}

export default observer(HomeScreen)