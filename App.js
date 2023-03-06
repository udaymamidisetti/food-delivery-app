import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import { Home, Restaurant, OrderDelivery } from "./screens";
import Tabs from "./navigation/tabs";

const stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={"Home"}
      >
        <stack.Screen name="Home" component={Tabs} />
        <stack.Screen name="Restaurant" component={Restaurant} />
        <stack.Screen name="OrderDelivery" component={OrderDelivery} />
      </stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    padding: 100,
  },
});
