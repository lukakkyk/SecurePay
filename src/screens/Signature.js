import React from 'react'
import {SafeAreaView, StyleSheet, View} from 'react-native'
import Header from '../components/Header'
const Signature = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
    <Header
      iconLeft={true}
      title="Insert your signature"
      onLeftPress={() => navigation.goBack()}
      iconRight={true}
      rightIconName="qr"
      rightIconColor="#fff"
    />
    <View style={styles.singatureContainer}></View>
  </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    singatureContainer:{
        flex:1,
        backgroundColor:'brown'
    }
})

export default Signature
