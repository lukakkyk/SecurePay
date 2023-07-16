import React from "react";
import { View, StyleSheet, TouchableHighlight } from "react-native";
import Header from "./Header";
import { AntDesign } from "@expo/vector-icons";
import Pressable from "./Pressable";
import { Text } from "react-native-paper";

function LoginButton({ children, navigation }) {
  return (
    <TouchableHighlight
      style={{
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        borderRadius: 8,
        padding: 15,
        borderColor: "rgba(29, 29, 29, 0.1)",
        borderWidth: 1,
        color: "rgba(28, 28, 28, 0.98)",
      }}
    >
      <Text
        style={{
          color: "rgba(28, 28, 28, 0.98)",
          fontFamily: "medium",
          fontSize: 14,
          lineHeight: 20,
        }}
      >
        {children}
      </Text>
    </TouchableHighlight>
  );
}

const PasswordRecovery = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header
        onRightPress={() => navigation.goBack()}
        iconRight={true}
        title="Forgot Password"
      />
      <View style={styles.content}>
        <View style={styles.radius}>
          <AntDesign name="check" size={30} color="#28BE6D" />
        </View>
        <Text style={styles.title}>
          Password recovery link has been sent on mail
        </Text>
        <Text style={styles.mail}>zura@slick.studio</Text>
        <View style={{ flexDirection: "row", marginTop: 47, alignItems:'center' }}>
          <Text style={styles.receive}>Didn’t receive ?</Text>
          <Pressable>
            <Text style={styles.resend}> Resend</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.bottom}>
        <LoginButton>Open mail</LoginButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    flexDirection: "column",
  },
  radius: {
    width: 92,
    height: 92,
    backgroundColor: "rgba(40, 190, 109, 0.14)",
    borderRadius: 92 / 2,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 64,
  },
  title: {
    fontFamily: "bold",
    fontSize: 24,
    lineHeight: 36,
    textAlign: "center",
    paddingHorizontal: 58,
    marginTop: 32,
    color: "rgba(28, 28, 28, 0.98)",
  },
  mail: {
    color: "rgba(40, 190, 109, 1)",
    fontFamily: "bold",
    fontSize: 24,
    lineHeight: 36,
  },
  receive: {
    fontFamily: "regular",
    fontSize: 14,
    lineHeight: 22,
  },
  resend: {
    color: "rgba(40, 190, 109, 1)",
    fontFamily: "medium",
    lineHeight: 20,
  },
  bottom: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 100,
    padding: 24,
  },
});

export default PasswordRecovery;
