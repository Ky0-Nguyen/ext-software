import { NavigationStore, navigationRef, isMountedRef } from '@stores/navigation-stores'

class NavigationServices {

  navigationStore = new NavigationStore()

  navigationRef = navigationRef

  isMountedRef = isMountedRef

  pushToScreen = (routeName: string, params?: any) => {
    this.navigationStore.pushToScreen(routeName, params)
  }

  back = () => {
    this.navigationStore.back()
  }

  onNavigationStateChange = (currentState: any) => {
    this.navigationStore.onNavigationStateChange(currentState)
  }
}
const navigationServices = new NavigationServices()
export { navigationServices }