import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Dashboard from "./Dashboard";

const DrawerHome = createDrawerNavigator();

export default function RoutesDrawer() {
  return (
    <DrawerHome.Navigator>
      <DrawerHome.Screen name="DrawerHome" component={Dashboard} />
    </DrawerHome.Navigator>
  );
}
