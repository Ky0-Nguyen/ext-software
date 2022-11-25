import { ROUTE_KEY } from '@constants/route-key'
import { navigationServices } from '@navigation/services'
import { observer } from 'mobx-react'
import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import SplashScreen from 'react-native-splash-screen'

const ProfileDetailScreen = () => {
    const onPress = () => {
        navigationServices.pushToScreen(ROUTE_KEY.PROFILE)
    }
    return (
        <View style={{ flex:1, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center', }}>
            <TouchableOpacity onPress={onPress}>
                <Text>Go To Next Screen</Text>
            </TouchableOpacity>
        </View>
    )
}

export default observer(ProfileDetailScreen)