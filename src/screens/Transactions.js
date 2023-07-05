import React from "react";
import { View, Text, StyleSheet, ScrollView, SafeAreaView, TouchableWithoutFeedback, Keyboard } from "react-native";
import Header from "../components/Header";
import { AntDesign } from "@expo/vector-icons";
import Search from "../components/Search";
import Transaction from "../components/Transaction";
import TransactionSuccess from "../components/TransactionSuccess";
import TransactionDeclined from "../components/TransactionDeclined";
import TransactionRefunded from "../components/TransactionRefunded";
import Icon from "../components/Icon";
const Transactions = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Transactions</Text>
          <Icon style={{ marginTop: 10 }} name="Callendar" size={20} />
        </View>
        <Search inputStyle={{ marginTop: 26 }} />
        <ScrollView
          contentContainerStyle={{ paddingBottom: 90 }}
          showsVerticalScrollIndicator={false}
        >
          <Transaction />
          <TransactionSuccess />
          <TransactionDeclined />
          <TransactionRefunded />
          <Transaction />
          <Transaction />
          <TransactionSuccess />
          <TransactionDeclined />
          <TransactionRefunded />
          <Transaction />
        </ScrollView>
      </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    // marginHorizontal: 20,
    marginTop: 10,
    color: "rgba(28, 28, 28, 0.98)",
    fontSize: 16,
    fontFamily: "bold",
    lineHeight: 24,
    letterSpacing: 0.15,
  },
});

export default Transactions;
