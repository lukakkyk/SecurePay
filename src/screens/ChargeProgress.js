import React from "react";
import { View, Text, StyleSheet, SafeAreaView, Image } from "react-native";
import Pressable from "../components/Pressable";
import Icon from "../components/Icon";
const ChargeProgress = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Pressable onPress={() => navigation.goBack()}>
        <Text style={styles.title}>Cancel</Text>
      </Pressable>
      <Text style={styles.chargeText}>Charge of $6.20 in progress</Text>
      <View style={{ alignItems: "center", marginTop: 108 }}>
        <Image
          source={require("../../assets/charge.png")}
          style={styles.chargeImage}
        />
      </View>
      <Text style={styles.swipeText}>Tap or Swipe your card</Text>
      <View style={styles.cardContainer}>
        <View style={styles.box}>
          <Text></Text>
        </View>
        <View style={[styles.box, {marginLeft:6}]}>
          <Text></Text>
        </View>
        <View style={[styles.box, {marginLeft:6}]}>
          <Text></Text>
        </View>
        <View style={[styles.box, {marginLeft:6}]}>
          <Text></Text>
        </View>
        <View style={[styles.box, {marginLeft:6}]}>
          <Text></Text>
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <Pressable onPress={() => navigation.navigate("ManuallyCard")}>
          <View style={styles.manuallybutton}>
            <Text style={styles.manuallyText}>
              Enter Card Detiails Manually
            </Text>
          </View>
        </Pressable>
        <Pressable onPress={() => console.log('hello')}>
          <View style={[styles.manuallybutton, { flexDirection: "row" }]}>
            <Icon name="qr" iconColor="rgba(28, 28, 28, 0.98)" size={20} />
            <Text style={[styles.manuallyText, { marginLeft: 8 }]}>
              Pay with QR
            </Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    marginHorizontal: 20,
    marginTop: 10,
    color: "rgba(28, 28, 28, 0.98)",
    fontSize: 14,
    fontFamily: "medium",
    lineHeight: 24,
    letterSpacing: 0.1,
  },
  chargeText: {
    fontFamily: "bold",
    lineHeight: 36,
    fontSize: 24,
    textAlign: "center",
    paddingHorizontal: 97,
    color: "rgba(28, 28, 28, 0.98)",
    marginTop: 65,
  },
  chargeImage: {
    width: 183,
    height: 108,
  },
  swipeText: {
    textAlign: "center",
    fontFamily: "regular",
    lineHeight: 16,
    letterSpacing: 0.4,
    color: "rgba(28, 28, 28, 0.98)",
    marginTop: 32,
    marginBottom:38
  },
  buttonsContainer: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: "center",
  },
  manuallybutton: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    borderWidth: 1,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderColor: "rgba(29, 29, 29, 0.1)",
    marginBottom: 8,
  },
  manuallyText: {
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "medium",
    color: "rgba(28, 28, 28, 0.98)",
  },
  cardContainer:{
    flexDirection:'row',
    paddingHorizontal:48,
  },
  box:{
    width:54,
    height:37,
    borderWidth:1,
    borderRadius:6,
    borderColor: "rgba(29, 29, 29, 0.1)",
  }
});

export default ChargeProgress;
