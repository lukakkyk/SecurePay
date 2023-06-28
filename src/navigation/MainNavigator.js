import Charge from "../screens/Charge";
import Transactions from "../screens/Transactions";
import Settings from "../screens/Settings";
import { Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons, Fontisto, AntDesign } from "@expo/vector-icons";
import TransactionDetails from "../screens/TransactionDetails";
import Icon from "../components/Icon";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          paddingVertical: 14,
          borderTopColor: "#1D1D1D0D",
          borderTopWidth: 1,
          height: 90,
        },
        headerTitle: "",
        headerShadowVisible: false,
        tabBarActiveTintColor: "#28BE6D",
        tabBarInactiveTintColor: "rgba(29, 29, 29, 0.64)",
        tabBarIconStyle: {
          backgroundColor: "red",
        },
        headerShown: false,
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
          tabBarIcon: ({ color, focused }) => (
            <View
              style={{
                // backgroundColor: "green",
                height: 60,
                width: 64,
                alignItems: "center",
                borderTopWidth: focused ? 2 : 0,
                borderTopColor: focused ? "#28BE6D" : null,
                justifyContent: "center",
              }}
            >
              <Icon name="money" size={20} iconColor={color} />
            </View>
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
          tabBarIcon: ({ color, focused }) => (
            <View
              style={{
                // backgroundColor: "green",
                height: 60,
                width: 64,
                alignItems: "center",
                borderTopWidth: focused ? 2 : 0,
                borderTopColor: focused ? "#28BE6D" : null,
                borderBottomLeftRadius: focused ? 1 : null,
                borderTopRightRadius: focused ? 1 : null,
                justifyContent: "center",
              }}
            >
              <Icon name="transactions" size={20} iconColor={color} />
            </View>
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
          tabBarIcon: ({ color, focused }) => (
            <View
              style={{
                // backgroundColor: "gr#ffeen",
                height: 60,
                width: 64,
                alignItems: "center",
                borderTopWidth: focused ? 2 : 0,
                borderTopColor: focused ? "#28BE6D" : null,
                justifyContent: "center",
              }}
            >
              <Icon name="settings" size={20} iconColor={color} />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TransactionDetails"
        component={TransactionDetails}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const MainNavigator = () => {
  return <StackNavigator />;
};

export default MainNavigator;
