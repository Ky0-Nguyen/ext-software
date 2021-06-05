import { createRef } from 'react'

import { NavigationActions } from '@react-navigation/compat'
import { CommonActions } from '@react-navigation/native'
import { action, observable } from 'mobx'
import { enableLogging } from 'mobx-logger'
import { getActiveRouteName } from '@utils/navigation'

export const navigationRef: any = createRef()
export const isMountedRef: any = createRef()

export const navigate = (name: any, params: any) => {
  if (isMountedRef.current && navigationRef.current) {
    navigationRef.current.navigate(name, params)
  }
}

const config = {
  action: false,
  compute: false,
  reaction: false,
  transaction: false,
  predicate: () => !!__DEV__,
}
enableLogging(config)
class NavigationStore {
  @observable.ref public navigator: any = null

  @observable.ref public firstTimeLoaded = true

  @observable.ref public currentRouteName = ''

  @action
  public reset = (routeName: any) => {
    const currentScreen = getActiveRouteName(navigationRef.current.getRootState())
    if (routeName !== currentScreen) {
      const resetAction = CommonActions.reset({
        index: 0,
        routes: [{ name: routeName }],
      })
      navigationRef.current.dispatch(resetAction)
    }
  }

  public back() {
    const navigateAction = NavigationActions.back()
    navigationRef.current.dispatch(navigateAction)
  }

  public goBack() {
    const navigateAction = NavigationActions.back()
    navigationRef.current.dispatch(navigateAction)
    navigationRef.current.dispatch(navigateAction)
  }

  public go3Back() {
    const navigateAction = NavigationActions.back()
    navigationRef.current.dispatch(navigateAction)
    navigationRef.current.dispatch(navigateAction)
    navigationRef.current.dispatch(navigateAction)
  }

  public pushToScreen = (routeName: string, params?: any) => {
    if (isMountedRef.current && navigationRef.current) {
      routeName && navigationRef.current.navigate(routeName, params)
    } else {
      // You can decide what to do if the app hasn't mounted
      // You can ignore this, or add these actions to a queue you can call later
    }
  }

  @action
  public onNavigationStateChange(currentState: any) {
    const currentScreen = getActiveRouteName(currentState)
    this.currentRouteName = currentScreen
    // logScreen(currentScreen)
  }
}
export { NavigationStore }