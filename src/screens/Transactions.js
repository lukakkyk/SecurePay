import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import Header from "../components/Header";
import { AntDesign } from "@expo/vector-icons";
import Search from "../components/Search";
import Transaction from "../components/Transaction";
const Transactions = () => {
  return (
    <View style={styles.container}>
      <Header iconRight={true} iconLeft={true} title="Transactions" />
      <Search inputStyle={{ marginTop: 26 }} />
      <Transaction />
      <Transaction />
      <Transaction />
      <Transaction />
      <Transaction />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default Transactions;
