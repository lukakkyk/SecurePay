import React from "react";
import { View, SafeAreaView, StyleSheet } from "react-native";
import Header from "../components/Header";
import { Text } from "react-native-paper";
import Button from "../components/Button";
const Section = ({ label, leftLabel }) => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.label}>{label}</Text>
      <View
        style={{
          height: 1,
          backgroundColor: "rgba(29, 29, 29, 0.1)",
          flex: 1,
          marginHorizontal: 16,
        }}
      />
      <Text style={styles.leftLabel}>{leftLabel}</Text>
    </View>
  );
};

const Receipt = ({navigation}) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <Header
        iconLeft={true}
        title="Receipt"
        onLeftPress={() => navigation.goBack()}
        iconRight={true}
        rightIconName="qr"
        rightIconColor="#fff"
      />
      <View style={styles.titleContainer}>
        <Text style={styles.total}>Total Amount</Text>
        <Text style={styles.amount}>$5.50</Text>
      </View>
      <View style={styles.descriptionDetails}>
        <Section label="Transaction Id" leftLabel="#1878" />
        <Section label="Method" leftLabel="**** 3493" />
        <Section label="Gratuty" leftLabel="$0.00" />
        <Section label="Charge" leftLabel="$78.54" />
      </View>
      <View style={styles.aboveFooter}></View>
      <View style={styles.bottom}>
        <Button onPress={() => navigation.navigate('Signature')} title="Charge" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "purple",
    marginTop: 24,
  },
  amount: {
    fontFamily: "medium",
    lineHeight: 84,
    fontSize: 56,
    color: "rgba(28, 28, 28, 0.98)",
  },
  total: {
    fontFamily: "medium",
    lineHeight: 24,
    fontSize: 14,
    color: "rgba(29, 29, 29, 0.4)",
    letterSpacing: -0.3,
    marginTop: 24,
  },
  descriptionDetails: {
    paddingHorizontal: 24,
    // backgroundColor: "yellow",
    marginTop: 24,
    paddingBottom: 24,
    borderBottomColor: "rgba(29, 29, 29, 0.05)",
    borderBottomWidth: 4,
  },
  sectionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
  },
  label: {
    fontFamily: "regular",
    fontSize: 14,
    lineHeight: 22,
    letterSpacing: 0.25,
    color: "rgba(29, 29, 29, 0.64)",
  },
  leftLabel: {
    color: "rgba(28, 28, 28, 0.98)",
    fontFamily: "regular",
    lineHeight: 22,
    letterSpacing: 0.25,
  },
//   aboveFooter: {
//     backgroundColor: "yellow",
//     borderBottomColor:'green',
//     borderBottomWidth:5,
//     flex:1
//   },
  bottom: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 10,
    padding: 24,
    backgroundColor: "#fff",
  },
});

export default Receipt;
