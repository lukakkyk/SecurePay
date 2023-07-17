import React, { useState, useRef, useEffect } from "react";
import { View, TextInput, StyleSheet, Animated, Image } from "react-native";
import Pressable from "./Pressable";
import Icon from "./Icon";
const FloatingInputWithImageIcon = ({
  label,
  imageSource,
  icon,
  containerStyle,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const floatingAnimation = useRef(new Animated.Value(0)).current;
  const labelRef = useRef(null);
  const textInputRef = useRef(null);

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
  const handleTextInputPress = () => {
    textInputRef.current.focus();
  };

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
      outputRange: [16, 12],
    }),
  };

  const inputBorderStyle = {
    borderColor: isFocused ? "rgba(40, 190, 109, 1)" : "rgba(29, 29, 29, 0.1)",
    borderWidth: 1,
  };

  return (
    <Pressable onPress={handleTextInputPress}>
      <View style={[styles.formGroup, { containerStyle }]}>
        <Animated.View style={[styles.inputContainer, inputBorderStyle]}>
          {imageSource && <Image source={imageSource} style={styles.image} />}
          <TextInput
            style={styles.input}
            value={inputValue}
            onChangeText={setInputValue}
            onFocus={handleFocus}
            onBlur={handleBlur}
            ref={textInputRef}
            onPressIn={textInputRef}
            {...props}
          />
          {icon && (
            <Icon
              name={icon}
              iconColor="rgba(29, 29, 29, 0.84)"
              style={styles.icon}
              size={28}
            />
          )}
        </Animated.View>
        <Animated.Text
          ref={labelRef}
          style={[styles.label, floatingLabelStyle]}
        >
          {label}
        </Animated.Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  formGroup: {
    marginHorizontal: 24,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
    paddingHorizontal: 24,
    paddingVertical: 15,
  },
  image: {
    marginRight: 10,
    width: 24,
    height: 14.83,
  },
  input: {
    flex: 1,
    fontSize: 14,
  },
  label: {
    position: "absolute",
    left: 60,
    top: 20,
    color: "#888",
    opacity: 0.8,
    fontFamily: "regular",
  },
});

export default FloatingInputWithImageIcon;
