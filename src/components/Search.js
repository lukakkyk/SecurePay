import React, { useRef } from "react";
import { View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import Icon from "./Icon";
const Search = ({ inputStyle, ...props }) => {
  const textInputRef = useRef(null);

  const handleTextInputPress = () => {
    textInputRef.current.focus();
  };

  return (
    <TouchableOpacity onPress={handleTextInputPress}>
      <View style={[styles.inputContainer, inputStyle]}>
        <Icon
          style={styles.inputIcon}
          name="Search"
          size={20}
          iconColor="rgba(29, 29, 29, 0.84)"
          iconPress={handleTextInputPress}
        />
        <TextInput
          onPressIn={textInputRef}
          placeholderTextColor="rgba(29, 29, 29, 0.64)"
          placeholder="Search"
          ref={textInputRef}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: "rgba(29, 29, 29, 0.05)",
    marginHorizontal: 24,
    borderRadius: 100,
    height: 36,
    flexDirection: "row",
    alignItems: "center",
  },
  inputIcon: {
    marginHorizontal: 12,
  },
});

export default Search;
