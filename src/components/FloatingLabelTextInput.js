import React, { useState, useRef, useEffect } from "react";
import { View, TextInput, Text, StyleSheet, Animated } from "react-native";

const FloatingLabelTextInput = ({ label, style, ...props }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const floatingAnimation = useRef(new Animated.Value(0)).current;
  const labelRef = useRef(null);

  useEffect(() => {
    if (isFocused || inputValue) {
      Animated.timing(floatingAnimation, {
        toValue: 1,
        duration: 200,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(floatingAnimation, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false,
      }).start();
    }
  }, [isFocused, inputValue]);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const floatingLabelStyle = {
    transform: [
      {
        translateY: floatingAnimation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -15],
        }),
      },
    ],
    fontSize: floatingAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [14, 12],
    }),
  };

  return (
    <View style={style}>
      <TextInput
        style={[styles.input, isFocused ? styles.inputFocus : null]}
        value={inputValue}
        onChangeText={setInputValue}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholderTextColor='rgba(40, 190, 109, 1)'
        {...props}
      />
      <Animated.Text ref={labelRef} style={[styles.label, floatingLabelStyle]}>
        {label}
      </Animated.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "rgba(29, 29, 29, 0.1)",
    fontSize: 14,
    borderRadius: 8,
    paddingVertical: 18,
    paddingHorizontal: 16,
    width:'100%'
    // marginTop:10
  },
  inputFocus: {
    borderColor: "rgba(40, 190, 109, 1)",
    borderWidth: 2,
  },
  label: {
    position: "absolute",
    left: 16,
    top: 20,
    fontSize: 14,
    color: "#888",
    opacity: 0.8,
  },
});

export default FloatingLabelTextInput;
