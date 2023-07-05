import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Button as RNButton,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import { FloatingLabelInput } from "react-native-floating-label-input";
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
            <FloatingLabelTextInput label="Merchant ID"  />
          </View>
          <View style={styles.input}>
            <FloatingLabelTextInput label="Password" icon={true} secureTextEntry={true} autoCapitalize="none" />
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
              style={{ fontSize: 14, color: "#28BE6D", fontFamily: "medium" }}
            >
              Forgot Password ?
            </Text>
          </View>
        </View>
        <RNButton title="Simulate Error" onPress={simulateError} />
        {errorDropDownAlert && (
          <ErrorDropdown
            errorDropDownAlert={errorDropDownAlert}
            error={error}
          />
        )}
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
