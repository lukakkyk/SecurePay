import React, { useState } from "react";
import { ScrollView, Text, StyleSheet, SafeAreaView, View } from "react-native";
import SettingRow from "../components/SettingRow";
import SettingSwitch from "../components/SettingSwitch";
import { MaterialIcons } from "@expo/vector-icons";
import Pressable from "../components/Pressable";
const Settings = () => {
  const [signature, setSignature] = useState(true);
  const [faceID, setFaceID] = useState(true);
  const [passcode, setPasscode] = useState(true);
  const [darkmode, setDarkmode] = useState(false);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <Text style={styles.title}>Settings</Text>
      <ScrollView>
        <Text style={styles.subTitle}>Devices</Text>
        <SettingRow title="Card Reader" />
        <SettingRow title="Printer Setup" />
        <Text style={styles.subTitle}>General</Text>
        <SettingRow title="Gratuity" />
        <SettingSwitch
          title="Signature"
          value={signature}
          onValueChange={setSignature}
        />
        <Text style={styles.subTitle}>Other</Text>
        <SettingSwitch
          title="Face ID"
          value={faceID}
          onValueChange={setFaceID}
        />
        <SettingSwitch
          title="Passcode"
          value={passcode}
          onValueChange={setPasscode}
        />
        <SettingSwitch
          title="Dark Mode"
          value={darkmode}
          onValueChange={setDarkmode}
        />
        <Pressable>
          <View style={styles.logOutContainer}>
            <MaterialIcons name="logout" size={22} color="#FB4E4E" />
            <Text style={styles.logOutTitle}>Log Out</Text>
          </View>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    marginHorizontal: 20,
    marginTop: 10,
    color: "rgba(28, 28, 28, 0.98)",
    fontSize: 16,
    fontFamily: "bold",
    lineHeight: 24,
    letterSpacing: 0.15,
  },
  subTitle: {
    marginHorizontal: 24,
    fontFamily: "medium",
    fontSize: 12,
    lineHeight: 16,
    color: "rgba(29, 29, 29, 0.4)",
    marginTop: 26,
  },
  logOutContainer: {
    flexDirection: "row",
    paddingHorizontal: 24,
    marginTop: 30,
  },
  logOutTitle: {
    fontSize: 14,
    lineHeight: 24,
    fontFamily: "medium",
    marginHorizontal: 20,
    color: "#FB4E4E",
  },
});

export default Settings;
