import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Button as RNButton,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Checkbox from "expo-checkbox";
import { useSelector, useDispatch } from "react-redux";
import Button from "../components/Button";
import { signIn } from "../store/authSlice";
import ErrorDropdown from "../components/ErrorDropdown";
import FloatingLabelTextInput from "../components/FloatingLabelTextInput";

export default function LogIn({ navigation }) {
  const [merchantId, setMerchantId] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setChecked] = useState(false);
  const [checkboxFocused, setCheckboxFocused] = useState(false);
  const dispatch = useDispatch();

  const signInValue = useSelector((state) => state.auth.value);
  console.log("signInValue", signInValue);

  const [error, setError] = useState("");
  const [errorDropDownAlert, setErrorDropDownAlert] = useState(false);

  const simulateError = () => {
    setErrorDropDownAlert(true);
    setError("Invalid Username or password.");
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <View style={styles.content}>
            <Text
              style={{
                fontSize: 32,
                fontFamily: "bold",
                marginTop: 60,
                lineHeight: 48,
                marginBottom: 24,
                marginHorizontal: 24,
              }}
            >
              Welcome Back !
            </Text>
            <View style={{ paddingHorizontal: 24 }}>
              <View style={styles.input}>
                <FloatingLabelTextInput label="Merchant ID" />
              </View>
              <View style={styles.input}>
                <FloatingLabelTextInput
                  label="Password"
                  icon={true}
                  secureTextEntry={true}
                  autoCapitalize="none"
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
                    onFocus={() => setCheckboxFocused(true)}
                    onBlur={() => setCheckboxFocused(false)}
                  />
                  <Text>Remember me</Text>
                </View>
                <Text
                  onPress={() => navigation.navigate("ForgotPassword")}
                  style={{
                    fontSize: 14,
                    color: "#28BE6D",
                    fontFamily: "medium",
                  }}
                >
                  Forgot Password ?
                </Text>
              </View>
            </View>
            {/* <RNButton title="Simulate Error" onPress={simulateError} /> */}
            {/* {errorDropDownAlert && (
          <ErrorDropdown
            errorDropDownAlert={errorDropDownAlert}
            error={error}
          />
        )} */}
          </View>
          <View style={{ justifyContent: "flex-end" }}>
            <View style={styles.bottomText}>
              <Text style={styles.bottomTextParagraph}>
                SecurePay is a product of The OLB Group, Inc. Copyright 2022
              </Text>
            </View>
          </View>
          <View style={styles.bottom}>
            <Button onPress={() => dispatch(signIn())} title="Sign In" />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  input: {
    marginBottom: 16,
  },
  bottom: {
    position: "absolute",
    borderTopColor:'rgba(29, 29, 29, 0.05)',
    borderTopWidth:1,
    left: 0,
    right: 0,
    bottom: 0,
    padding: 24,
    backgroundColor: "#fff",
    // marginTop: 20, // Add this line or adjust the value as needed
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
  bottomText: {
    backgroundColor: "#fff",
    justifyContent: "flex-end",
    alignItems: "center",
    height: 425,
    paddingBottom:25,
    
  },
  bottomTextParagraph: {
    lineHeight: 22,
    letterSpacing: 0.22,
    textAlign: "center",
    paddingHorizontal:24,
    fontSize: 14,
    fontFamily:'regular',
    color: "rgba(15, 15, 15, 0.98)",
    
  },
});
