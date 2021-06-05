import 'mobx-react-lite/batchingForReactNative'
import React, { useEffect } from 'react'
import { StatusBar } from 'react-native'
import { AppNavigator } from './navigation/app-navigator'
import { NavigationContainer } from '@react-navigation/native'
import { initialWindowMetrics, SafeAreaProvider } from 'react-native-safe-area-context'
import { isIOS } from '@utils/platform'
import { navigationServices } from './navigation/services'

declare const GLOBAL: any
GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest

const App = () => {
  useEffect(() => {
    !isIOS && StatusBar.setBackgroundColor('transparent')
    StatusBar.setBarStyle('light-content')
    const init = async () => {
      navigationServices.isMountedRef.current = true
    }
    init()
    return () => {
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