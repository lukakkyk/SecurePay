import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
const Charge = () => {
  return (
    <View style={styles.container}>
      <Text>Charge !</Text>
    </View>
  )
}


const styles = StyleSheet.create({
container:{
    flex:1, 
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#fff'
}
})

export default Charge
