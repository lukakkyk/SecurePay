import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Search = ({inputStyle}) => {
  return (
    <View style={[styles.inputContainer, inputStyle]}>
      <AntDesign
        style={styles.inputIcon}
        name="search1"
        size={18}
        color="rgba(29, 29, 29, 0.84)"
      />
      <TextInput
        placeholderTextColor="rgba(29, 29, 29, 0.64)"
        placeholder="Search"
      />
    </View>
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
    marginHorizontal: 17,
  },
});

export default Search;
