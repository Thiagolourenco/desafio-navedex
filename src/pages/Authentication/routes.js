import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "./Login";

const AuthenticationStack = createStackNavigator();

export default function RoutesAuthentication() {
  return (
    <AuthenticationStack.Navigator>
      <AuthenticationStack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
    </AuthenticationStack.Navigator>
  );
}
