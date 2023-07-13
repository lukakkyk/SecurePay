import Charge from "../screens/Charge";
import Transactions from "../screens/Transactions";
import AddTip from "../screens/AddTip";
import Settings from "../screens/Settings";
import { Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TransactionDetails from "../screens/TransactionDetails";
import Icon from "../components/Icon";
import ChargeProgress from "../screens/ChargeProgress";
import ManuallyCard from "../screens/ManuallyCard";
import Receipt from "../screens/Receipt";
import Signature from "../screens/Signature";
import ApprovedCharge from "../screens/ApprovedCharge";
import CustomTip from "../screens/CustomTip";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          paddingBottom: 30,
          borderTopColor: "#1D1D1D0D",
          borderTopWidth: 1,
        },
        headerTitle: "",
        headerShadowVisible: false,
        tabBarActiveTintColor: "#28BE6D",
        tabBarInactiveTintColor: "rgba(29, 29, 29, 0.64)",
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
            <Icon name="Charge" size={30} iconColor={color} />
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
            <Icon name="transactions" size={30} iconColor={color} />
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
            <Icon name="Settings" size={30} iconColor={color} />
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
      {/* <Stack.Screen
        name="ChargeProgress"
        component={ChargeProgress}
        options={{ headerShown: false }}
      />  */}
      
      <Stack.Group
        screenOptions={{
          presentation: "transparentModal",
          animation: "fade",
        }}
      >
        <Stack.Screen
          name="AddTip"
          component={AddTip}
          screenOptions={{
            animationEnabled: false,
          }}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CustomTip"
          component={CustomTip}
          screenOptions={{
            animationEnabled: false,
          }}
          options={{ headerShown: false }}
        />
        <Stack.Screen
        name="ChargeProgress"
        component={ChargeProgress}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ManuallyCard"
        component={ManuallyCard}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Receipt"
        component={Receipt}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Signature"
        component={Signature}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ApprovedCharge"
        component={ApprovedCharge}
        options={{ headerShown: false }}
      />
      </Stack.Group>
    </Stack.Navigator>
  );
};

const MainNavigator = () => {
  return <StackNavigator />;
};

export default MainNavigator;
