import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import Header from "../components/Header";
const ManuallyCard = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <Header
        iconLeft={true}
        title="Manually"
        onLeftPress={() => navigation.goBack()}
        iconRight={true}
        rightIconName="qr"
        rightIconColor="#fff"
      />
    </SafeAreaView>
  );
};

export default ManuallyCard;
