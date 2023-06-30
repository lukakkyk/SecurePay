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

const Charge = () => {
  const [inputValue, setInputValue] = useState("0.00");

  function PressableRow({ style, children, ...rest }) {
    return (
      <RNPressable
        style={({ pressed }) => [{ backgroundColor: pressed && "red" }, style]}
        {...rest}
      >
        {children}
      </RNPressable>
    );
  }

  const handleButtonPress = (value) => {
    if (value === "<") {
      // Handle backspace/delete logic
      setInputValue((prevValue) => {
        if (prevValue.length === 5) {
          return prevValue.slice(0, -1);
        } else if (prevValue.length === 4) {
          return "0.00";
        } else if (prevValue.length === 3) {
          return "0.0";
        } else if (prevValue.length === 2) {
          return "0.";
        } else {
          return "0.00";
        }
      });
    } else if (value === ".") {
      // Handle decimal point logic
      setInputValue((prevValue) => {
        if (prevValue.includes(".")) {
          return prevValue;
        } else {
          return prevValue + ".00";
        }
      });
    } else {
      // Handle number button press logic
      setInputValue((prevValue) => {
        if (prevValue === "0.00") {
          return String(value) + ".00";
        } else {
          return prevValue.slice(0, -3) + String(value) + ".00";
        }
      });
    }
  };

  const renderButton = (value) => {
    return (
      <PressableRow
        key={value}
        style={styles.button}
        onPress={() => handleButtonPress(value)}
      >
        <Text style={styles.buttonText}>{value}</Text>
      </PressableRow>
    );
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
          style={{
            color: "rgba(28, 28, 28, 0.98)",
            fontFamily: "medium",
            fontSize: 56,
          }}
        >
          $ {inputValue}
        </RN>
      </View>
      <View style={{ marginTop: 65, backgroundColor: "#fff" }}>
        <Pressable>
          <View style={styles.outlineButton}>
            <Icon name="edit" iconColor="#E2B338" size={16} />
            <Text style={styles.noteText}>Add Note</Text>
          </View>
        </Pressable>
        <View style={{ marginHorizontal: 24 }}>
          <Pressable>
            <View style={styles.primaryButton}>
              <Text style={styles.chargeText}>Charge ${inputValue}</Text>
            </View>
          </Pressable>
        </View>
      </View>
      <View
        style={{
          backgroundColor: "#fff",
          flex: 1,
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

          {renderButton("<")}
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
});

export default Charge;
