import Charge from "../screens/Charge";
import Transactions from "../screens/Transactions";
import Settings from "../screens/Settings";
import { Text, View } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons, Fontisto, AntDesign } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerTitle: "",
        headerShadowVisible: false,
        tabBarActiveTintColor: "#28BE6D",
        tabBarInactiveTintColor: "rgba(29, 29, 29, 0.64)",
        headerShown: false,
        indicatorStyle: {
          borderWidth: 2,
          borderColor: "green",
        },
        tabBarItemStyle: {
          borderTopColor: "rgba(29, 29, 29, 0.05)",
          borderTopWidth: 1,
        },
      }}
    >
      <Tab.Screen
        name="Charge"
        component={Charge}
        options={{
          tabBarLabel: ({ focused, color }) => (
            <Text
              style={{
                color: focused
                  ? "rgba(28, 28, 28, 0.98)"
                  : "rgba(29, 29, 29, 0.64)",
                fontFamily: focused ? "bold" : "regular",
                fontSize: 10,
                lineHeight: 14,
              }}
            >
              Charge
            </Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <Fontisto name="dollar" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Transactions"
        component={Transactions}
        options={{
          tabBarLabel: ({ focused, color }) => (
            <Text
              style={{
                color: focused
                  ? "rgba(28, 28, 28, 0.98)"
                  : "rgba(29, 29, 29, 0.64)",
                fontFamily: focused ? "bold" : "regular",
                fontSize: 10,
                lineHeight: 14,
              }}
            >
              Transactions
            </Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="retweet" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: ({ focused, color }) => (
            <Text
              style={{
                color: focused
                  ? "rgba(28, 28, 28, 0.98)"
                  : "rgba(29, 29, 29, 0.64)",
                fontFamily: focused ? "bold" : "regular",
                fontSize: 10,
                lineHeight: 14,
              }}
            >
              Settings
            </Text>
          ),
          tabBarIcon: ({ color, size }) => (
            // <View style={{backgroundColor:'red', paddingTop:10}}>
            <Ionicons name="settings-outline" size={size} color={color} />
            // </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
