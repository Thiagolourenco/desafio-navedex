import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Feather as Icon } from "@expo/vector-icons";

import Profile from "./Profile";
import DrawerHome from "./routesDrawer";

const Stack = createStackNavigator();

export default function RoutesStack() {
  return (
    <Stack.Navigator initialRouteName="DrawerHome">
      <Stack.Screen
        name="DrawerHome"
        component={DrawerHome}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
