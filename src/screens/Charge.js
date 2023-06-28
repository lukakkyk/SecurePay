import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";

import Icon from "../components/Icon";

const Charge = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={styles.container}>
        <Text style={styles.title}>Current Sale</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    marginHorizontal: 20,
    marginTop: 10,
    color: "rgba(28, 28, 28, 0.98)",
    fontSize: 16,
    fontFamily: "bold",
    lineHeight: 24,
    letterSpacing: 0.15,
  },
});

export default Charge;
