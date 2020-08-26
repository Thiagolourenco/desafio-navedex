import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useSelector } from "react-redux";

import AuthenticationStack from "./pages/Authentication/routes";
import DrawerHome from "./pages/Home/routesDrawer";
import StackHome from "./pages/Home/routes";

const Stack = createStackNavigator();

export default function Index() {
  const token = useSelector((state) => state.auth.token);

  return (
    <Stack.Navigator>
      {token === null ? (
        <Stack.Screen
          name="Authentication"
          component={AuthenticationStack}
          options={{ headerShown: false }}
        />
      ) : (
        <Stack.Screen
          name="Home"
          component={StackHome}
          options={{ headerShown: false }}
        />
      )}
    </Stack.Navigator>
  );
}
