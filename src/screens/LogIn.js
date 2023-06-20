import { useState } from "react";
import { StyleSheet, Text, TouchableHighlight, View, KeyboardAvoidingView } from "react-native";
import { FloatingLabelInput } from "react-native-floating-label-input";
import Checkbox from 'expo-checkbox';
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
      isFocused={isFocused}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      customLabelStyles={{
        colorFocused: 'rgba(29, 29, 29, 0.64)',
        colorBlurred:'rgba(29, 29, 29, 0.64)',
        fontSizeFocused: 12,
      }}
    />
  );
}

function LoginButton({ children, navigation }) {
  return (
    <TouchableHighlight
      style={{
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#28BE6D",
        borderRadius: 8,
        padding: 18,
      }}
    >
      <Text style={{ color: "#FFFFFF" }}>{children}</Text>
    </TouchableHighlight>
  );
}

export default function LogIn({ navigation }) {
  const [merchantId, setMerchantId] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setChecked] = useState(false);
  return (
    <KeyboardAvoidingView style={{flex:1}}
    behavior={Platform.OS === "ios" ? "padding" : "height"}>
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
          <View style={{flexDirection:'row', justifyContent:'center'}}>
          <Checkbox color={isChecked ? '#28BE6D' : undefined}  style={styles.checkbox} value={isChecked} onValueChange={setChecked} />
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
      <View style={styles.footer}>
        <LoginButton>SignIn</LoginButton>
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
  footer: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    padding: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  forgotContainer: {
    // backgroundColor: "yellow",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  checkbox:{
    borderRadius:5,
    marginRight:11
  }
});
