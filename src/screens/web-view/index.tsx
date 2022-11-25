import { navigationServices } from '@navigation/services'
import { get } from 'lodash'
import { observer } from 'mobx-react'
import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import SplashScreen from 'react-native-splash-screen'
import WebView from 'react-native-webview'

const WebViewScreen = (props:any): JSX.Element => {
  const url = get(props,'route.params.url')
  return (
    <WebView source={{ uri:url|| 'https://reactnative.dev/' }} />
  )
}

export default observer(WebViewScreen)