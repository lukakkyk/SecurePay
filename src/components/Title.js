import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";
const Title = ({ title, titleStyle, style }) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={[ styles.title, titleStyle]}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 32,
    fontFamily: "bold",
    color: "rgba(28, 28, 28, 0.98)",
  },
});

export default Title;
