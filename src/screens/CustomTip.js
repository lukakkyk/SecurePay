import React, { useState, useMemo, useRef, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Keyboard,
  Dimensions,
} from "react-native";
import BottomSheet, { BottomSheetTextInput } from "@gorhom/bottom-sheet";
import { AntDesign } from "@expo/vector-icons";
import { Button } from "react-native-paper";
import Icon from "../components/Icon";

const AddTip = ({ size = 350, navigation }) => {
  // ref
  const bottomSheetRef = useRef(null);

  const [isFocused, setIsFocused] = useState(false);
  const [bottomSheetHeight, setBottomSheetHeight] = useState(size);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  useEffect(() => {
    bottomSheetRef?.current?.open?.();
  });

  const snapPoints = useMemo(() => [size]);

  // renders
  return (
    <View style={styles.container}>
      <Pressable
        style={{ flex: 1 }}
        onPress={() => {
            bottomSheetRef?.current?.close?.()
        }}
      >
        <BottomSheet
          ref={bottomSheetRef}
          bottomInset={-10}
          snapPoints={snapPoints}
          enablePanDownToClose={true}
          handleIndicatorStyle={styles.bottomSheet}
          android_keyboardInputMode="adjustResize"
          onChange={(index) => {
            index === -1 && navigation.goBack();
          }}
        >
          <View style={styles.headerContainer}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Icon name="edit" iconColor="#E2B238" size={20} />
              <Text style={styles.title}>Add Note</Text>
            </View>
            <AntDesign name="plus" size={20} color="rgba(29, 29, 29, 0.84)" />
          </View>
          <View style={{ backgroundColor: "#fff" }}>
            <BottomSheetTextInput
              keyboardType="number-pad"
              placeholder="Enter Text"
              selectionColor="#28BE6D"
              onFocus={handleFocus}
              onBlur={handleBlur}
              multiline={true}
              style={[
                styles.input,
                {
                  borderColor: isFocused ? "#28BE6D" : "rgba(29, 29, 29, 0.1)",
                },
              ]}
            />
          </View>
          <View
            style={{
              backgroundColor: "#fff",
              height: 300,
              paddingHorizontal: 24,
              paddingTop: 10,
              borderTopWidth: 1,
              borderTopColor: "rgba(29, 29, 29, 0.1)",
            }}
          >
            <Button
              mode="contained"
              onPress={() => navigation.goBack()}
              buttonColor="#28BE6D"
              style={{ borderRadius: 8, paddingVertical: 5 }}
            >
              Add
            </Button>
          </View>
        </BottomSheet>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(25, 25, 25, 0.7)",
  },
  input: {
    marginVertical: 24,
    borderRadius: 10,
    fontSize: 14,
    lineHeight: 20,
    backgroundColor: "#fff",
    marginHorizontal: 24,
    borderWidth: 1,
    borderRadius: 8,
    alignItems: "center",
    height: 110,
    paddingLeft: 24,
    borderColor: "rgba(29, 29, 29, 0.1)",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    backgroundColor: "#fff",
    paddingBottom: 24,
    alignItems: "center",
    borderBottomColor: "rgba(29, 29, 29, 0.1)",
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 20,
    fontFamily: "bold",
    lineHeight: 32,
    color: "rgba(28, 28, 28, 0.98)",
    marginLeft: 16,
  },
  bottom: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 10,
    paddingHorizontal: 24,
    paddingTop: 12,
    paddingBottom: 24,
    backgroundColor: "#fff",
    borderTopWidth: 1,
  },
  bottomSheet: {
    backgroundColor: "#fff",
    width: 64,
    borderRadius: 8,
    height: 4,
  },
});

export default AddTip;
