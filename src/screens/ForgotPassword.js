import React from "react";
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
} from "react-native";
import Header from "../components/Header";
import Title from "../components/Title";
import Button from "../components/Button";
import { Text } from "react-native-paper";
import FloatingLabelTextInput from "../components/FloatingLabelTextInput";

const ForgotPassword = ({ navigation }) => {


  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={{ backgroundColor: "#fff", flex: 1 }}>
      <Header
          iconLeft={true}
          title="Manually"
          onLeftPress={() => navigation.goBack()}
          iconRight={true}
          rightIconName="qr"
          rightIconColor="#fff"
        />
        <Title style={{ marginTop: 41 }} title="Recovery" />

        <Text style={styles.subTitle}>
          We will sent an password recovery email to your email.
        </Text>
        <View style={styles.content}>
          <FloatingLabelTextInput
            selectionColor="#28BE6D"
            label="Securepay ID"
            style={{marginBottom:16}}
          />
         <FloatingLabelTextInput
            selectionColor="#28BE6D"
            label="Email"
            keyboardType="email-address" 
          />
        </View>

        <View style={styles.bottom}>
          <Button
            onPress={() => navigation.navigate("PasswordRecovery")}
            title="Send"
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  subTitle: {
    marginTop: 16,
    marginHorizontal: 24,
    fontFamily: "regular",
    color: "rgba(29, 29, 29, 0.64)",
    fontSize: 16,
    lineHeight: 26,
  },
  content: {
    marginTop: 16,
    alignItems: "stretch",
    justifyContent: "center",
    flexDirection: "column",
    paddingHorizontal:24
  },
  input: {
    marginTop: 24,
  },
  bottom: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 12,
    padding: 24,
    borderTopColor:'rgba(29, 29, 29, 0.1)',
    borderTopWidth:1
  },
  container: {
    flex: 1,
  },
  line: {
    height: 1,
    backgroundColor: "green",
  },
});

export default ForgotPassword;
