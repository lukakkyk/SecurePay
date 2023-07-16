import React from "react";
import { View, StyleSheet } from "react-native";
import Pressable from "./Pressable";
import { Text } from "react-native-paper";
const Button = ({ title, onPress, containerStyle, titleStyle }) => {
  return (
    <Pressable onPress={onPress}>
      <View style={[styles.container, containerStyle]}>
        <Text style={[styles.title, titleStyle]}>{title}</Text>
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
