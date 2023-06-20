import React from "react";
import { View, Text, StyleSheet } from "react-native";
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
