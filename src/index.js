import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import AuthenticationStack from "./pages/Authentication/routes";
import DrawerHome from "./pages/Home/routesDrawer";
import StackHome from "./pages/Home/routes";

const Stack = createStackNavigator();

export default function Index() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Authentication"
        component={AuthenticationStack}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={StackHome}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
