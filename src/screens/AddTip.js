import BottomSheet from "@gorhom/bottom-sheet";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useRef, useMemo } from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import Box from "../components/Box";
// import Pressable from "../components/Pressable";

const TipComponent = ({ title, amount, amountStyle, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        pressed && styles.buttonPressed, // Apply the pressed styles conditionally
      ]}
    >
      <Text
        style={{
          lineHeight: 22,
          letterSpacing: 0.25,
          fontFamily: "regular",
        }}
      >
        {title}
      </Text>
      <Text
        style={[
          {
            lineHeight: 24,
            fontFamily: "medium",
            letterSpacing: 0.1,
          },
          amountStyle,
        ]}
      >
        {amount}
      </Text>
    </Pressable>
  );
};

function BottomSheetComponent({ children, size = 550, style, navigation }) {
  // const { t } = useTranslation();
  // const navigation = useNavigation();
  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => [size]);

  const navigationAnother = () => {
    setTimeout(() => {
      navigation.goBack()
      navigation.navigate("ChargeProgress");
    }, 2500);
  };

  useEffect(() => {
    bottomSheetRef?.current?.open?.();
  });

  return (
    <View style={styles.container}>
      <Pressable
        style={{ flex: 1, backgroundColor: "transparent" }}
        onPress={() => {
          navigation.goBack();
        }}
      />
      <BottomSheet
        onChange={(index) => {
          index === -1 && navigation.goBack();
        }}
        enableHandlePanningGesture
        handleIndicatorStyle={styles.bottomSheet}
        bottomInset={-10}
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        backgroundStyle={{ backgroundColor: "transparent" }}
        enablePanDownToClose={true}
        android_keyboardInputMode="adjustResize"
        // style={{backgroundColor:'red'}}
      >
        <Box noMargins noPaddings containerStyle={[styles.box, style]}>
          <View
            style={{
              justifyContent: "space-between",
              flexDirection: "row",
              alignItems: "center",
              paddingVertical: 24,
              paddingHorizontal: 20,
              borderColor: "rgba(29, 29, 29, 0.1)",
              borderBottomWidth: 1,
              marginBottom: 24,
            }}
          >
            <Text
              style={{
                fontFamily: "medium",
                fontSize: 20,
                lineHeight: 32,
                color: "rgba(28, 28, 28, 0.98)",
              }}
            >
              Add Tip
            </Text>
            <Pressable onPress={() => navigation.navigate("Home")}>
              <Text
                style={{ fontFamily: "medium", fontSize: 14, lineHeight: 20 }}
              >
                Cancel
              </Text>
            </Pressable>
          </View>

          <TipComponent
            onPress={navigationAnother}
            title="No Tip"
            amount="$0.00"
          />
          <TipComponent title="10%" amount="$1.20" />
          <TipComponent title="15%" amount="$2.25" />
          <TipComponent title="20%" amount="$5.30" />
          <TipComponent
            title="Custom"
            amount="Amount"
            amountStyle={{ color: "rgba(29, 29, 29, 0.4)" }}
          />

          <View>{children}</View>
          {/* <View><Text>hello</Text></View> */}
        </Box>
      </BottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(25, 25, 25, 0.7)",
  },
  bottomSheet: {
    backgroundColor: "#FFFF",
    width: 64,
    borderRadius: 8,
    height: 4,
  },
  cancelButton: {
    width: "100%",
    marginBottom: 15,
    backgroundColor: "#ffff",
  },
  closeIconWrapper: {
    width: 27,
    position: "absolute",
    right: 22,
    top: 22,
    zIndex: 100,
  },
  box: {
    marginTop: 0,
    backgroundColor: "#FFFF",
    flex: 1,
    paddingTop: 0,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  buttonPressed: {
    backgroundColor: "rgba(29, 29, 29, 0.05)", // Custom pressed background color
    borderWidth: 1,
    borderColor: "#fff",
  },
  button: {
    borderRadius: 8,
    backgroundColor: "#fff",
    marginHorizontal: 24,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 12,
    paddingVertical: 20,
    borderWidth: 1,
    borderColor: "rgba(29, 29, 29, 0.05)",
    marginBottom: 8,
  },
});

export default BottomSheetComponent;
