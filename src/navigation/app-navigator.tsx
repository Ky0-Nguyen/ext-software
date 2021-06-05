import React, { createContext, useEffect, useMemo, useReducer } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { ROUTE_KEY } from '@constants/route-key'
import { MainTab } from './private-routes/tabbar/MainTab'
import { localStorage } from '@configuration/local-storage'
import { PublicStack } from './public-routes/authen-stack'
import { get } from 'lodash'

const AuthContext = createContext(null)

const Stack = createStackNavigator()

const AppNavigator = () => {
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
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken = localStorage.token.access_token
      dispatch({ type: 'RESTORE_TOKEN', token: userToken });
    };

    bootstrapAsync();
  }, []);

  const authContext: any = useMemo(
    () => ({
      signIn: async (data: any) => {
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `SecureStore`
        // In the example, we'll use a dummy token

        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
      signOut: () => dispatch({ type: 'SIGN_OUT', token: '' }),
      signUp: async (data: any) => {
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `SecureStore`
        // In the example, we'll use a dummy token

        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
    }),
    []
  );
  return (
    <AuthContext.Provider value={authContext}>
      <Stack.Navigator initialRouteName={ROUTE_KEY.MAIN_TAB} headerMode="none">
        {
          (state.userToken === null || state.userToken.length === 0)
            ? <Stack.Screen name={ROUTE_KEY.PUBLIC_STACK} component={PublicStack} />
            : <Stack.Screen name={ROUTE_KEY.MAIN_TAB} component={MainTab} />
        }
      </Stack.Navigator>
    </AuthContext.Provider>
  )
}

export { AppNavigator, AuthContext }