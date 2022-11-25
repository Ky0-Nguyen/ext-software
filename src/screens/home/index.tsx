import { ROUTE_KEY } from '@constants/route-key'
import { navigationServices } from '@navigation/services'
import { observer } from 'mobx-react'
import React, { useEffect } from 'react'
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import SplashScreen from 'react-native-splash-screen'

const arrModules = [{
  title: 'ATM Online',
  image: 'https://cdn.nhanlucnganhluat.vn/uploads/images/C6026750/logo/2018-11/21616177_1676455039040803_2148154645650493312_n.jpg',
  url: 'https://atmonline.vn/'
}, {
  title: 'RN Dev',
  image: 'https://reactnative.dev/img/tiny_logo.png',
  url: 'https://reactnative.dev/'
}, {
  title: 'FireBase',
  image: 'https://firebase.google.com/static/images/brand-guidelines/logo-logomark.png',
  url: 'https://rnfirebase.io/'
}, {
  title: 'Github',
  image: 'https://pngimg.com/uploads/github/github_PNG40.png',
  url: 'https://github.com/'
}, {
  title: '24h news',
  image: 'https://icdn.24h.com.vn/images/2014/24h_logo_trang_chu_2015.png',
  url: 'https://www.24h.com.vn/'
},{ 
  title: 'Dev helper',
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Stack_Overflow_icon.svg/1024px-Stack_Overflow_icon.svg.png?20190716190036',
  url: 'https://stackoverflow.com/'
}]

const HomeScreen = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide()
    }, 1500);
  })
  // const { signOut } = useContext(AuthContext)
  // const logout = () => {
  //   signOut()
  // }
  const renderItem = ({ item }: any): JSX.Element => {
    const onPress = () => {
      navigationServices.pushToScreen(ROUTE_KEY.WEB_VIEW, { url: item.url })
    }
    return (
      <TouchableOpacity onPress={onPress} style={{ justifyContent: 'center', alignItems: 'center', }}>
        <View style={styles.containerItem}>
          <Image source={{ uri: item.image }} style={styles.image} resizeMode={'contain'} />
        </View>
        <Text>{item.title}</Text>
      </TouchableOpacity>

    )
  }

  return (
    <View style={{ height: '100%', justifyContent: 'center', alignItems: 'center' }}>
      <View style={styles.containerTop}>

      </View>
      <FlatList
        data={arrModules}
        renderItem={renderItem}
        numColumns={3}
      />
    </View>
  )
}

export default observer(HomeScreen)

const styles = StyleSheet.create({
  containerTop: {
    flex: 1,
  },
  containerItem: {
    width: 100,
    height: 100,
    elevation: 2,
    marginTop: 32,
    borderRadius: 8,
    marginBottom: 8,
    marginHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff'
  },
  image: {
    flex: 1,
    width: 100,
    height: 100,
    borderRadius: 8,
  }
})