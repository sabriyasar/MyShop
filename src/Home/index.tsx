import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import MyFlow from "./MyFlow";

const Drawer = createDrawerNavigator();
export const HomeNavigator = () => (
  <Drawer.Navigator>
        <Drawer.Screen name="MyFlow" component={MyFlow} />
      </Drawer.Navigator>
);