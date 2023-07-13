import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { AntDesign, Octicons } from "@expo/vector-icons";
import Icon from "./Icon";
import Pressable from "./Pressable";
const Header = ({
  iconRight,
  onRightPress,
  title,
  iconLeft,
  onLeftPress,
  rightIconName,
  rightIconColor,
}) => {
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Pressable onPress={onLeftPress}>
          {iconLeft && (
            <View style={styles.leftIcon}>
              <Icon name="left" size={23} iconColor="rgba(28, 28, 28, 0.98)" />
            </View>
          )}
        </Pressable>
        <View style={styles.centeredContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <Pressable onPress={onRightPress}>
          {iconRight && (
            <View style={styles.rightIcon}>
              <Icon name={rightIconName} size={16} iconColor={rightIconColor} />
            </View>
          )}
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 24,
    marginTop: 10,
  },
  leftIcon: {
    marginLeft: "auto",
  },
  rightIcon: {
    marginRight: "auto",
  },
  centeredContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "yellow",
  },
  title: {
    fontSize: 14,
    fontFamily: "bold",
    textAlign: "center",
    color: "rgba(28, 28, 28, 0.98)",
  },
});

export default Header;
