import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableWithoutFeedback,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Pressable from "./Pressable";
const Header = ({ iconRight, onRightPress, title }) => {
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Pressable onPress={onRightPress}>
          {iconRight && (
            <View style={styles.leftIcon}>
              <AntDesign name="left" size={18} color="rgba(28, 28, 28, 0.98)" />
            </View>
          )}
        </Pressable>
        <View style={styles.centeredContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
    backgroundColor: "#fff",
    paddingHorizontal:24
  },
  leftIcon: {
    marginRight:'auto'
    // bottom:-11,
    // backgroundColor:'purple'
  },
  centeredContainer: {
    flex: 1,
    alignItems: "center",
    textAlign:'center'
  },
  title: {
    fontSize: 14,
    fontFamily: "bold",
    textAlign: "center",
    color: "rgba(28, 28, 28, 0.98)",
  },
});

export default Header;
