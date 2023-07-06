import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import Header from "../components/Header";
import Button from "../components/Button";
import FloatingInputWithImageIcon from "../components/FloatingInputWithImageIcon";
import FloatingLabelTextInput from "../components/FloatingLabelTextInput";
const ManuallyCard = ({ navigation }) => {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
        <Header
          iconLeft={true}
          title="Manually"
          onLeftPress={() => navigation.goBack()}
          iconRight={true}
          rightIconName="qr"
          rightIconColor="#fff"
        />
        <View style={{ marginTop: 27 }}>
          <FloatingInputWithImageIcon
            containerStyle={{ marginTop: 100 }}
            label="Card Number"
            icon="payment"
            imageSource={require("../../assets/Mastercard.png")}
          />
        </View>
        <View style={{ marginHorizontal: 24, marginVertical: 16 }}>
          <FloatingLabelTextInput label="Card holder" />
        </View>
        <View style={styles.bottom}>
          <Button onPress={() => navigation.navigate("Receipt")} title="Next" />
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  bottom: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 10,
    paddingHorizontal: 24,
    paddingTop: 12,
    paddingBottom: 24,
    backgroundColor: "#fff",
    borderTopColor: "rgba(29, 29, 29, 0.1)",
    borderTopWidth: 1,
  },
});

export default ManuallyCard;
