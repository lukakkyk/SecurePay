import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
const SpashScreen = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../../assets/images/Logo.png')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:'#28BE6D'
  },
  image:{width:180, height:180}
});

export default SpashScreen;
