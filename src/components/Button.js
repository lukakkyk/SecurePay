import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Pressable from "./Pressable";
const Button = ({ title, onPress }) => {
  return (
    <Pressable onPress={onPress}>
      {/* <View style={styles.line}/> */}
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#28BE6D",
    borderRadius: 8,
    padding: 18,
  },
  title: {
    color: "#fff",
    fontFamily: "bold",
    fontSize: 16,
  },
  line: {
    height: 1,
    backgroundColor: "rgba(29, 29, 29, 0.1)",
    marginBottom: 24,
  },
});

export default Button;
