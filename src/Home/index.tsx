import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import MyFlow from "./MyFlow";
import { HomeRoutes } from "../components/StackNavigation";

const Drawer = createDrawerNavigator<HomeRoutes>();
export const HomeNavigator = () => (
    <Drawer.Navigator>
        <Drawer.Screen name="MyFlow" component={MyFlow} />
        </Drawer.Navigator>  
);