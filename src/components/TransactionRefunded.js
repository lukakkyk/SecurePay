import React from "react";
import { View, StyleSheet } from "react-native";
import Pressable from "./Pressable";
import { Text } from "react-native-paper";
const TransactionRefunded = () => {
  return (
    <Pressable>
      <View style={styles.transaction}>
        <View style={styles.line}>
          <Text style={styles.numberText}># 18793</Text>
          <Text style={styles.moneyText}>$78.54</Text>
        </View>
        <View style={[styles.line, { backgroundColor: "#fff" }]}>
          <Text style={styles.timeText}>Sep 26 2022 06:47 AM</Text>
          <View style={styles.type}>
            <Text style={styles.typeText}>Refunded</Text>
          </View>
        </View>
        <View
          style={{
            marginTop: 17,
            height: 1,
            backgroundColor: "rgba(29, 29, 29, 0.1)",
          }}
        />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  transaction: {
    flexDirection: "column",
    marginHorizontal: 24,
    marginTop: 17,
  },
  line: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  timeText: {
    fontSize: 12,
    lineHeight: 16,
    color: "rgba(29, 29, 29, 0.4)",
    paddingTop: 5,
    fontFamily: "regular",
  },
  moneyText: {
    fontSize: 14,
    fontFamily: "medium",
    lineHeight: 24,
  },
  numberText: {
    fontFamily: "regular",
    lineHeight: 22,
    fontSize: 14,
  },
  type: {
    paddingHorizontal: 8,
    backgroundColor: 'rgba(255, 196, 35, 0.32)',
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    marginTop: 4,
  },
  typeText: {
    fontFamily: "regular",
    fontSize: 12,
    lineHeight: 16,
    color:'#C1951E',
    letterSpacing:0.4
  },
});

export default TransactionRefunded;
