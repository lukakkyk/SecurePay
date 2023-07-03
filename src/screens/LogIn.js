import { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  KeyboardAvoidingView,
} from "react-native";
import { FloatingLabelInput } from "react-native-floating-label-input";
import Checkbox from "expo-checkbox";
import { useSelector, useDispatch } from "react-redux";
import Button from "../components/Button";
import { signIn } from "../store/authSlice";
function MyInput(params) {
  const [isFocused, setIsFocused] = useState(false);

  const containerStyles = {
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
      animationDuration={100}
      containerStyles={containerStyles}
      selectionColor="#28BE6D"
      isFocused={isFocused}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      customLabelStyles={{
        colorFocused: "rgba(29, 29, 29, 0.64)",
        colorBlurred: "rgba(29, 29, 29, 0.64)",
        fontSizeFocused: 12,
      }}
    />
  );
}

export default function LogIn({ navigation }) {
  const [merchantId, setMerchantId] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setChecked] = useState(false);
  const dispatch = useDispatch();
  const signInValue = useSelector((state) => state.auth.value);
  console.log("signInValue", signInValue);

  // const signIn = () => {
  //   dispatch(signIn());
  // };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 32,
            fontFamily: "bold",
            marginTop: 30,
            lineHeight: 48,
          }}
        >
          Welcome Back !
        </Text>
        <View style={styles.content}>
          <View style={styles.input}>
            <MyInput
              label="Merchant ID"
              value={merchantId}
              onChangeText={setMerchantId}
            />
          </View>
          <View style={styles.input}>
            <MyInput
              isPassword
              label="Password"
              value={password}
              onChangeText={setPassword}
            />
          </View>
          <View style={styles.forgotContainer}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Checkbox
                color={isChecked ? "#28BE6D" : undefined}
                style={styles.checkbox}
                value={isChecked}
                onValueChange={setChecked}
              />
              <Text>Remember me</Text>
            </View>
            <Text
              onPress={() => navigation.navigate("ForgotPassword")}
              style={{ fontSize: 14, color: "#28BE6D", fontFamily: "medium" }}
            >
              Forgot Password ?
            </Text>
          </View>
        </View>

        {/* <View
          style={{
            flex: 0.5,
            alignItems: "center",
            justifyContent: "flex-end",
            backgroundColor: "yellow",
          }}
        >
          <Text
            style={{
              fontFamily: "regular",
              letterSpacing: 0.25,
              lineHeight: 22,
              textAlign: "center",
              marginBottom: 80,
              position: "absolute",
              bottom: 0,
            }}
          >
            SecurePay is a product of The OLB Group, Inc. Copyright 2022
          </Text>
        </View> */}

        <View style={styles.bottom}>
          <Button onPress={() => dispatch(signIn())} title="Sign In" />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 24,
  },
  content: {
    marginTop: 24,
    alignItems: "stretch",
    justifyContent: "center",
    flexDirection: "column",
  },
  input: {
    marginBottom: 16,
  },
  bottom: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    padding: 24,
    backgroundColor: "#fff",
  },
  forgotContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  checkbox: {
    borderRadius: 5,
    marginRight: 11,
    borderColor: "rgba(29, 29, 29, 0.4)",
  },
});
