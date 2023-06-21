import React from "react";
import { View, Text, StyleSheet, Switch } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const SettingSwitch = ({ title, value, onValueChange}) => {
  return (
    <View style={styles.setting}>
      <Text style={styles.settingName}>{title}</Text>
      <Switch
        style={{ transform: [{ scaleX: 0.7 }, { scaleY: 0.7 }] }}
        onValueChange={onValueChange}
        value={value}
      />
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

export default SettingSwitch;
