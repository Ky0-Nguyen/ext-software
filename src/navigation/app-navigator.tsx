import React, { createContext, useEffect, useMemo, useReducer } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { ROUTE_KEY } from '@constants/route-key'
import { MainTab } from './private-routes/tabbar/MainTab'
import { PublicStack } from './public-routes/authen-stack'
import { ActivityIndicator } from 'react-native-paper'
import { View } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import { boolean } from 'mobx-state-tree/dist/internal'


const AuthContext: any = createContext(null)

const Stack = createStackNavigator()

const LoadingView = () => {
  return (
    <View style={{ flex: 1, backgroundColor: 'green', justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator />
    </View>
  )
}

const AppNavigator = ({ isAuthenticate = false }: { isAuthenticate?: boolean }) => {
  const [state, dispatch] = useReducer(
    (prevState: any, action: { type: any; token: any }) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  );

  useEffect(() => {
    const bootstrapAsync = async () => {
      let userToken;

      try {
        userToken = await AsyncStorage.getItem('@token')
      } catch (e) {
        console.error(e)
        userToken = null
      }

      dispatch({ type: 'RESTORE_TOKEN', token: userToken });
    };

    bootstrapAsync();
  }, []);

  const authContext: any = useMemo(
    () => ({
      signIn: async (data: any) => {
        const jsonValue = JSON.stringify({ isAuthenticate: true })
        await AsyncStorage.setItem('@token', jsonValue)
        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
      signOut: async () => {
        await AsyncStorage.removeItem('@token')
        dispatch({ type: 'SIGN_OUT', token: '' })
      },
      signUp: async (data: any) => {
        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
    }),
    []
  );
  if (!isAuthenticate) {
    return (
      <AuthContext.Provider value={authContext}>
        <Stack.Navigator initialRouteName={ROUTE_KEY.MAIN_TAB} headerMode="none">
          <Stack.Screen name={ROUTE_KEY.MAIN_TAB} component={MainTab} />
        </Stack.Navigator>
      </AuthContext.Provider>
    )
  }
  return (
    <AuthContext.Provider value={authContext}>
      <Stack.Navigator initialRouteName={ROUTE_KEY.MAIN_TAB} headerMode="none">
        {
          state.isLoading
            ? <Stack.Screen name={'LOADING_VIEW'} component={LoadingView} />
            : (state.userToken === null || state.userToken.length === 0)
              ? <Stack.Screen name={ROUTE_KEY.PUBLIC_STACK} component={PublicStack} />
              : <Stack.Screen name={ROUTE_KEY.MAIN_TAB} component={MainTab} />
        }
      </Stack.Navigator>
    </AuthContext.Provider>
  )
}

export { AppNavigator, AuthContext }