import React, { useRef, useEffect } from "react";
import { Animated, StyleSheet, Text, View } from "react-native";
import Icon from "./Icon";
const ErrorDropdown = ({ error , errorDropDownAlert}) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    showErrorMessage();
  }, [errorDropDownAlert]);

  const showErrorMessage = () => {
    Animated.sequence([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.delay(1500),
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <Animated.View style={[styles.errorDropdown, { opacity: fadeAnim }]}>
      <Icon
        style={{ marginLeft: "auto" }}
        name="declined"
        size={20}
        iconColor="#FB4E4E"
      />
      <View style={{ flex: 1 }}>
        <Text style={styles.errorMessage}>{error}</Text>
      </View>
      <Icon
        style={{ marginRight: "auto" }}
        name="x"
        iconColor="rgba(29, 29, 29, 0.64)"
        size={25}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  errorDropdown: {
    position: "absolute",
    top: 40,
    left: 0,
    right: 0,
    backgroundColor: "#fdecec",
    padding: 10,
    alignItems: "center",
    marginHorizontal: 24,
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 10,
    borderRadius: 10,
    flexDirection: "row",
    paddingHorizontal: 16,
  },
  errorMessage: {
    color: "rgba(28, 28, 28, 0.98)",
    marginLeft: 16,
    lineHeight: 20,
    fontSize: 13,
    fontFamily: "regular",
    letterSpacing: 0.25,
  },
});

export default ErrorDropdown;
