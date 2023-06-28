import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigator from "./MainNavigator";
import AuthNavigation from "./AuthNavigation";
import { useSelector } from "react-redux";

const AppNavigator = (props) => {
  const signInValue = useSelector((state) => state.auth.value);
  console.log("signInValue", signInValue);
  return (
    <>
      <NavigationContainer>
        {signInValue && <MainNavigator />}
        {!signInValue && <AuthNavigation />}
      </NavigationContainer>
    </>
  );
};

export default AppNavigator;
