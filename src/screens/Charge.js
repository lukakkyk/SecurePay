import React, { useState } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Pressable as RNPressable,
} from "react-native";
import { Text } from "react-native-paper";
import Pressable from "../components/Pressable";
import Icon from "../components/Icon";

const Charge = ({ navigation }) => {
  const [cents, setCents] = useState(0);

  const handleButtonPress = (value) => {
  
    if (value === "delete") {
      if (cents < 10) {
        
        setCents(0);
      } else {
        const newCents = parseInt(String(cents).slice(0, -1));
    
        setCents(newCents);
      }
    } else if (value === "C") {
      
      setCents(0);
    } else {
      const newCents = cents * 10 + value;
      
      setCents(newCents);
    }
  };
  

  const formatInput = (cents) => {
    const dollars = (cents / 100).toFixed(2);
    return `$${dollars}`;
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
          marginTop: 80,
          letterSpacing: 0.1,
          lineHeight: 24,
        }}
      >
        <Text
          style={{
            color: "rgba(29, 29, 29, 0.4)",
            fontSize: 14,
            fontFamily: "medium",
          }}
        >
          Enter Amount
        </Text>
        <Text
          adjustsFontSizeToFit={true}
          numberOfLines={1}
          style={{
            color: "rgba(28, 28, 28, 0.98)",
            fontFamily: "medium",
            fontSize: 56,
            paddingHorizontal: 24,
          }}
        >
          {/* $ {paymentAmount} */}
          {formatInput(cents)}
        </Text>
      </View>
      <View
        style={{ backgroundColor: "#fff", flex: 1, justifyContent: "flex-end" }}
      >
        <View style={{ backgroundColor: "#fff" }}>
          <Pressable onPress={() => navigation.navigate("CustomTip")}>
            <View style={styles.outlineButton}>
              <Icon name="edit" iconColor="#E2B338" size={16} />
              <Text style={styles.noteText}>Add Note</Text>
            </View>
          </Pressable>
          <View style={{ marginHorizontal: 24 }}>
            <Pressable onPress={() => navigation.navigate("AddTip")}>
              <View style={styles.primaryButton}>
                <Text
                  adjustsFontSizeToFit={true}
                  numberOfLines={1}
                  style={styles.chargeText}
                >
                  Charge {formatInput(cents)}
                </Text>
              </View>
            </Pressable>
          </View>
        </View>
        <View
          style={{
            backgroundColor: "#fff",
            marginTop: 30,
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
