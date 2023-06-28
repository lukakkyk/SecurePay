import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import Header from "../components/Header";
import { AntDesign } from "@expo/vector-icons";
import Search from "../components/Search";
import Transaction from "../components/Transaction";
import TransactionSuccess from "../components/TransactionSuccess";
import TransactionDeclined from "../components/TransactionDeclined";
import TransactionRefunded from "../components/TransactionRefunded";
const Transactions = () => {
  return (
    <View style={styles.container}>
      <Header iconRight={true} iconLeft={true} title="Transactions" />
      <Search inputStyle={{ marginTop: 26 }} />
      <Transaction />
      <TransactionSuccess />
      <TransactionDeclined />
      <TransactionRefunded />
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
