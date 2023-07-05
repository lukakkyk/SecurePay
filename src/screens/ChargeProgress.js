import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
const ChargeProgress = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Cancel</Text>
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
    fontSize: 16,
    fontFamily: "bold",
    lineHeight: 24,
    letterSpacing: 0.15,
  },
});

export default ChargeProgress;
