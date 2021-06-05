export const getCurrentRouteName = (navigationState: {
  routes: {
    [x: string]: any
  }
  index: string | number
}): any => {
  if (!navigationState) {
    return null
  }
  const route = navigationState.routes[navigationState.index]
  if (route.routes) {
    return getCurrentRouteName(route)
  }

  return route.routeName
}

export const getActiveRouteName = (state: {
  routes: {
    [x: string]: any
  },
  index: string | number
}): any => {
  const route = state.routes[state.index]
  if (route.state) {
    return getActiveRouteName(route.state)
  }
  return route.name
}