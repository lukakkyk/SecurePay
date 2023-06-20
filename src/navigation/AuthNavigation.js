// In App.js in a new project

import * as React from "react";
import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LogIn from "../screens/LogIn";
import ForgotPassword from "../screens/ForgotPassword";
import PasswordRecovery from "../components/PasswordRecovery";

const Stack = createNativeStackNavigator();

function AuthNavigation() {
  return (
    <Stack.Navigator screenOptions={{
        headerShown:false
    }}>
      <Stack.Screen name="Login" component={LogIn} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="PasswordRecovery" component={PasswordRecovery} />


    </Stack.Navigator>
  );
}

export default AuthNavigation;
