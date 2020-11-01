import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { HomeRoutes } from "../components/Navigation";

import DrawerContent, { DRAWER_WIDTH } from "./Drawer/Drawer";

import MyFlow from "./MyFlow/MyFlow";
export { assets } from "./Drawer/Drawer";


const Drawer = createDrawerNavigator<HomeRoutes>();
export const HomeNavigator = () => (
  <Drawer.Navigator drawerContent={DrawerContent} drawerStyle={{
    width: DRAWER_WIDTH,
  }}
  >
        <Drawer.Screen name="MyFlow" component={MyFlow} />
      </Drawer.Navigator>
);