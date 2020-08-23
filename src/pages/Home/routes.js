import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Feather as Icon } from "@expo/vector-icons";

import Profile from "./Profile";
import AddNaver from "./AddNaver";
import DrawerHome from "./routesDrawer";
import EditProfile from "./EditProfile";

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

      <Stack.Screen
        name="AddNaver"
        component={AddNaver}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
