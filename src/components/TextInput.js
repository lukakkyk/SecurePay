import { useState } from "react";
import { StyleSheet } from "react-native";
import { FloatingLabelInput } from "react-native-floating-label-input";

const TextInput = (params) => {
  const [isFocused, setIsFocused] = useState(false);
  const { value, setValue } = useState("");
  containerStyles = {
    borderWidth: 2,
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: "#fff",
    borderColor: isFocused ? "#28BE6D" : "rgba(29, 29, 29, 0.1)",
    borderRadius: 8,
  };

  return (
    <FloatingLabelInput
      {...params}
      animationDuration={50}
      containerStyles={containerStyles}
      isFocused={isFocused}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      value={value}
      onChangeText={setValue}
    />
  );
};

export default TextInput;
