import React from "react";
import { View, StyleSheet, SafeAreaView, Image } from "react-native";
import { Text } from "react-native-paper";
import Icon from "../components/Icon";
import Button from "../components/Button";
import Pressable from "../components/Pressable";
const Section = ({ label, leftLabel, image }) => {
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
      <View
        style={{
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        {image && (
          <Image
            source={require("../../assets/images/mastercard.png")}
            style={{ width: 24, height: 14.83, marginRight: 8 }}
          />
        )}
        <Text style={styles.leftLabel}>{leftLabel}</Text>
      </View>
    </View>
  );
};

const ApprovedCharge = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={styles.iconButton}>
        <Icon name="Check" size={48} iconColor="rgba(40, 190, 109, 1)" />
      </View>
      <Text style={styles.charge}>$5.25</Text>
      <Text style={styles.approved}>Approved </Text>
      <View style={styles.descriptionDetails}>
        <Section label="Authorization Code" leftLabel="TAS99" />
        <Section label="Transaction ID" leftLabel="17892" />
        <Section label="Method" image={true} leftLabel="**** 3493" />
      </View>
      <Pressable>
        <View style={styles.printContainer}>
          <Icon name="print" iconColor="rgba(28, 27, 31, 1)" size={32} />
        </View>
      </Pressable>
      <Text style={styles.printText}>Print Receipt</Text>
      <View style={styles.bottom}>
        <Button onPress={() => navigation.navigate("Home")} title="Got It" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
  iconButton: {
    height: 92,
    width: 92,
    backgroundColor: "rgba(40, 190, 109, 0.14)",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    alignSelf: "center",
    marginTop: 108,
  },
  charge: {
    alignSelf: "center",
    fontFamily: "bold",
    fontSize: 24,
    lineHeight: 36,
    marginTop: 32,
  },
  approved: {
    alignSelf: "center",
    fontFamily: "bold",
    fontSize: 24,
    lineHeight: 36,
    marginBottom: 24,
  },
  descriptionDetails: {
    paddingHorizontal: 24,
    marginTop: 24,
    // paddingBottom: 10,
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
  bottom: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 10,
    paddingHorizontal: 24,
    paddingTop: 12,
    paddingBottom: 24,
    backgroundColor: "#fff",
    borderTopColor: "rgba(29, 29, 29, 0.1)",
    borderTopWidth: 1,
  },
  printContainer: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderRadius: "50%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "rgba(29, 29, 29, 0.1)",
  },
  printText: {
    color: "rgba(29, 29, 29, 0.64)",
    marginTop: 12,
    alignSelf: "center",
    lineHeight: 22,
    letterSpacing: 0.25,
  },
});

export default ApprovedCharge;
