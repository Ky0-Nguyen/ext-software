import 'mobx-react-lite/batchingForReactNative'
import React, { useEffect, useState } from 'react'
import { StatusBar } from 'react-native'
import { AppNavigator } from './navigation/app-navigator'
import { NavigationContainer } from '@react-navigation/native'
import { initialWindowMetrics, SafeAreaProvider } from 'react-native-safe-area-context'
import { isIOS } from '@utils/platform'
import { navigationServices } from './navigation/services'
import { setCustomText, setCustomTextInput } from '@utils/custom-native-components'
import { Configuration } from '@configuration/configuration'
import { notificationHelper } from '@services/notification-helpers'

declare const GLOBAL: any
GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest

const TEXT_DEFAULT_COLOR = '#111111'
const PLACEHOLDER_DEFAULT_COLOR = '##c3c3c3'

const localInit = async () => {
  await Configuration.initialize()
  const propText = {
    maxFontSizeMultiplier: 0,
    allowFontScaling: false,
    style: {
      fontSize: 15,
      letterSpacing: -0.3,
      color: TEXT_DEFAULT_COLOR
    },
  }
  setCustomText(propText)

  const propTextInput = {
    placeholderTextColor: PLACEHOLDER_DEFAULT_COLOR,
    maxFontSizeMultiplier: 0,
    allowFontScaling: false,
    style: {
      fontSize: 15,
      letterSpacing: -0.3,
      color: TEXT_DEFAULT_COLOR
    },
  }

  setCustomTextInput(propTextInput)
}

const App = () => {
  useEffect(() => {
    !isIOS && StatusBar.setBackgroundColor('transparent')
    StatusBar.setBarStyle('light-content')
    const init = async () => {
      await localInit()
      notificationHelper.registerRemoteNotifications()
      notificationHelper.registerNotificationReceivedForeground()
      notificationHelper.registerNotificationOpened()
      notificationHelper.getInitialNotification()
      navigationServices.isMountedRef.current = true
    }
    init()
    return () => {
      notificationHelper.getInitialNotification()
      notificationHelper.registerRemoteNotifications()
      notificationHelper.registerNotificationReceivedForeground()
      notificationHelper.registerNotificationOpened()
      navigationServices.isMountedRef.current = false
    }
  }, [])
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <NavigationContainer
        onStateChange={navigationServices.onNavigationStateChange}
        ref={navigationServices.navigationRef}
      >
        <AppNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  )
}
export default App