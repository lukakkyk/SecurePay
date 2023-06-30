import Charge from "../screens/Charge";
import Transactions from "../screens/Transactions";
import Settings from "../screens/Settings";
import { Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TransactionDetails from "../screens/TransactionDetails";
import Icon from "../components/Icon";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const CustomTabItem = ({ iconName, tabName, iconColor }) => {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        width: 130,
        height: 64,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Icon name={iconName} iconColor={iconColor} size={20} />
      <Text
        style={{
          fontFamily: "bold",
          fontSize: 10,
          lineHeight: 14,
          paddingTop: 7,
        }}
      >
        {tabName}
      </Text>
    </View>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          paddingBottom: 30,
          borderTopColor: "#1D1D1D0D",
          borderTopWidth: 1,
        },
        tabBarItemStyle: {
          // backgroundColor: "purple",
          // height:1000,
          // marginBottom:20
          // borderTopColor: "green",
          // borderTopWidth: 1,
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
    </Stack.Navigator>
  );
};

const MainNavigator = () => {
  return <StackNavigator />;
};

export default MainNavigator;
