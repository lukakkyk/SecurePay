import React, { useState } from "react";
import {
  View,
  Text as RN,
  StyleSheet,
  SafeAreaView,
  Pressable as RNPressable,
} from "react-native";
import { Text } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import Pressable from "../components/Pressable";
import Icon from "../components/Icon";

const Charge = ({ navigation }) => {
  // const [inputValue, setInputValue] = useState("0.00");
  const [paymentAmount, setPaymentAmount] = useState("0.00");

  const handleButtonPress = (value) => {
    if (value === "delete") {
      // Handle backspace/delete logic
      setPaymentAmount(paymentAmount.slice(0, -1));
    }
    if (value === "C") {
      setPaymentAmount("0.00");
    } else {
      const newPaymentAmount = paymentAmount + value;
      setPaymentAmount(newPaymentAmount);
    }
  };

  const renderButton = (value) => {
    if (value === "delete") {
      return (
        <RNPressable
          key={value}
          style={({ pressed }) => [
            styles.button,
            pressed && styles.buttonPressed, // Apply the pressed styles conditionally
          ]}
          onPress={() => handleButtonPress(value)}
        >
          <Icon name="Delete" size={20} />
        </RNPressable>
      );
    }
    if (value === "C") {
      return (
        <RNPressable
          key={value}
          style={({ pressed }) => [
            styles.button,
            pressed && styles.buttonPressed, // Apply the pressed styles conditionally
          ]}
          onPress={() => handleButtonPress(value)}
        >
          <Text style={styles.buttonText}>{value}</Text>
        </RNPressable>
      );
    } else {
      return (
        <RNPressable
          key={value}
          style={({ pressed }) => [
            styles.button,
            pressed && styles.buttonPressed, // Apply the pressed styles conditionally
          ]}
          onPress={() => handleButtonPress(value)}
        >
          <Text style={styles.buttonText}>{value}</Text>
        </RNPressable>
      );
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <Text style={styles.title}>Current Sale</Text>
      <View
        style={{
          backgroundColor: "#fff",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          marginTop: 47,
          letterSpacing: 0.1,
          lineHeight: 24,
        }}
      >
        <RN
          style={{
            color: "rgba(29, 29, 29, 0.4)",
            fontSize: 14,
            fontFamily: "medium",
          }}
        >
          Enter Amount
        </RN>
        <RN
          adjustsFontSizeToFit={true}
          numberOfLines={1}
          style={{
            color: "rgba(28, 28, 28, 0.98)",
            fontFamily: "medium",
            fontSize: 56,
            paddingHorizontal: 24,
          }}
        >
          $ {paymentAmount}
        </RN>
      </View>
      <View style={{ marginTop: 65, backgroundColor: "#fff" }}>
        <Pressable onPress={() => navigation.navigate("AddTip")}>
          <View style={styles.outlineButton}>
            <Icon name="edit" iconColor="#E2B338" size={16} />
            <Text style={styles.noteText}>Add Note</Text>
          </View>
        </Pressable>
        <View style={{ marginHorizontal: 24 }}>
          <Pressable onPress={() => navigation.navigate("ChargeProgress")}>
            <View style={styles.primaryButton}>
              <Text style={styles.chargeText}>Charge ${paymentAmount}</Text>
            </View>
          </Pressable>
        </View>
      </View>
      <View
        style={{
          // backgroundColor: "red",
          flex: 1,
          marginTop: 40,
          justifyContent: "center",
          alignItems: "center",
          marginHorizontal: 24,
        }}
      >
        <View style={styles.row}>
          {renderButton(1)}
          {renderButton(2)}
          {renderButton(3)}
        </View>
        <View style={styles.row}>
          {renderButton(4)}
          {renderButton(5)}
          {renderButton(6)}
        </View>
        <View style={styles.row}>
          {renderButton(7)}
          {renderButton(8)}
          {renderButton(9)}
        </View>
        <View style={styles.row}>
          {renderButton("C")}
          {renderButton(0)}

          {renderButton("delete")}
        </View>
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
  outlineButton: {
    marginHorizontal: 24,
    backgroundColor: "#fff",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "rgba(29, 29, 29, 0.1)",
    padding: 8,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  noteText: {
    fontFamily: "medium",
    lineHeight: 20,
    fontSize: 14,
    marginLeft: 8,
  },
  primaryButton: {
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#28BE6D",
    borderRadius: 8,
    marginTop: 16,
  },
  chargeText: {
    fontFamily: "bold",
    lineHeight: 20,
    letterSpacing: 0.2,
    color: "#fff",
  },
  row: {
    flexDirection: "row",
    marginBottom: 6,
  },
  button: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderRadius: 5,
    marginHorizontal: 5,
    height: 66,
  },
  buttonText: {
    fontSize: 24,
  },
  buttonPressed: {
    backgroundColor: "rgba(29, 29, 29, 0.05)",
  },
});

export default Charge;
