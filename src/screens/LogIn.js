import { useState } from "react";
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Checkbox from "expo-checkbox";
import { useSelector, useDispatch } from "react-redux";
import Button from "../components/Button";
import { signIn } from "../store/authSlice";
import FloatingLabelTextInput from "../components/FloatingLabelTextInput";
import Pressable from "../components/Pressable";
import { Text } from "react-native-paper";

export default function LogIn({ navigation }) {

  const [isChecked, setChecked] = useState(false);
  const [checkboxFocused, setCheckboxFocused] = useState(false);
  const dispatch = useDispatch();

  const signInValue = useSelector((state) => state.auth.value);
  
  
  const handleCheckboxToggle = () => {
    setChecked(!isChecked);
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
                <FloatingLabelTextInput
                  selectionColor="#28BE6D"
                  label="Merchant ID"
                  // value={merchantId}
                  // onChangeText={setMerchantId}
                />
              </View>
              <View style={styles.input}>
                <FloatingLabelTextInput
                  label="Password"
                  icon={true}
                  secureTextEntry={true}
                  autoCapitalize="none"
                  selectionColor="#28BE6D"
                  // value={password}
                  // onChangeText={setPassword}
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
                  <Pressable onPress={handleCheckboxToggle}>
                    <Text>Remember me</Text>
                  </Pressable>
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
          </View>
          <View style={styles.bottom}>
            <View style={styles.bottomText}>
              <Text style={styles.bottomTextParagraph}>
                SecurePay is a product of The OLB Group, Inc. Copyright 2022
              </Text>
            </View>
            <View
              style={{
                borderTopColor: "rgba(29, 29, 29, 0.1)",
                borderTopWidth: 1,
                marginBottom: 24,
              }}
            />
            <View style={{ marginHorizontal: 24 }}>
              <Button onPress={() => dispatch(signIn())} title="Sign In" />
            </View>
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
    left: 0,
    right: 0,
    bottom: 24,
    paddingBottom: 12,
    // paddingHorizontal:24,
    backgroundColor: "#fff",
    flexDirection: "column",
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
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 25,
    textAlign: "center",
    height: 32,
    width: 266,
    alignSelf: "center",
  },

  bottomTextParagraph: {
    lineHeight: 22,
    letterSpacing: 0.4,
    textAlign: "center",
    // paddingHorizontal: 100,
    fontSize: 12,
    fontFamily: "regular",
    color: "rgba(15, 15, 15, 0.98)",
    lineHeight: 16,
  },
});
