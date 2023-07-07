import React from "react";
import { View, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Switch } from 'react-native-paper';
import { Text } from 'react-native-paper';
const SettingSwitch = ({ title, value, onValueChange}) => {
  return (
    <View style={styles.setting}>
      <Text style={styles.settingName}>{title}</Text>
      <Switch
        style={{ transform: [{ scaleX: 0.7 }, { scaleY: 0.7 }] }}
        onValueChange={onValueChange}
        value={value}
        color="rgba(40, 190, 109, 1)"
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
