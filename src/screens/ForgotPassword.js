import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableHighlight,
  KeyboardAvoidingView,
} from "react-native";
import Header from "../components/Header";
import Title from "../components/Title";
import { FloatingLabelInput } from "react-native-floating-label-input";
import Button from "../components/Button";

function MyInput(params) {
  const [isFocused, setIsFocused] = useState(false);

  const containerStyles = {
    borderWidth: 1,
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: "#fff",
    borderColor: isFocused ? "#28BE6D" : "rgba(29, 29, 29, 0.1)",
    borderRadius: 8,
    marginHorizontal: 24,
    marginTop: 8,

  };
  return (
    <FloatingLabelInput
      {...params}
      animationDuration={100}
      customLabelStyles={{
        colorFocused: 'rgba(29, 29, 29, 0.64)',
        colorBlurred:'rgba(29, 29, 29, 0.64)',
        fontSizeFocused: 12,
      }}
      containerStyles={containerStyles}
      isFocused={isFocused}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}

    />
  );
}

const ForgotPassword = ({ navigation }) => {
    const [securePay, setSecurePay] = useState('');
    const [email, setEmail] = useState('')
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={{ backgroundColor: "#fff", flex: 1 }}>
        <Header
          onRightPress={() => navigation.goBack()}
          iconRight={true}
          title="Forgot Password"
        />
        <Title style={{ marginTop: 41 }} title="Recovery" />

        <Text style={styles.subTitle}>
          We will sent an password recovery email to your email.
        </Text>
        <View style={styles.content}>
          <MyInput value={securePay} onChangeText={setSecurePay} style={styles.input} label="Securepay ID" />
          <MyInput value={email} onChangeText={setEmail} style={styles.input} label="Email" />
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
    marginTop: 24,
    alignItems: "stretch",
    justifyContent: "center",
    flexDirection: "column",
  },
  input: {
    marginTop: 24,
  },
  bottom: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    padding: 24,
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
