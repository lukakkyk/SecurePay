import React from "react";
import { View, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Icon from "./Icon";
import { Text } from 'react-native-paper';
const SettingRow = ({ title, pressable }) => {
  return (
    <View style={styles.setting}>
      <Text style={styles.settingName}>{title}</Text>
      <Icon size={20} name="right" />
    </View>
  );
};

const styles = StyleSheet.create({
  setting: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 24,
    paddingBottom: 16,
    paddingTop: 16,
    borderBottomColor: "rgba(29, 29, 29, 0.1)",
    borderBottomWidth: 1,
  },
  settingName: {
    fontFamily: "medium",
    fontSize: 14,
    lineHeight: 24,
  },
});

export default SettingRow;
