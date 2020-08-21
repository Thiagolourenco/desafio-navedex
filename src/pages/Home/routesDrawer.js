import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Dashboard from "./Dashboard";

import { CustomDrawer } from "./components";

const DrawerHome = createDrawerNavigator();

export default function RoutesDrawer() {
  return (
    <DrawerHome.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <DrawerHome.Screen name="DrawerHome" component={Dashboard} />
    </DrawerHome.Navigator>
  );
}
