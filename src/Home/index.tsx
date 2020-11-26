import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { HomeRoutes } from "../components/Navigation";

import DrawerContent, {DRAWER_WIDTH} from "../Home/Drawer/Drawer";
import MyFlow from "./MyFlow";
import EditProfile from "./EditProfile";
import MyFavorites from "./MyFavorites";
import Settings from "./Settings";

export { assets } from "./Drawer";

const Drawer = createDrawerNavigator<HomeRoutes>();
export const HomeNavigator = () => (
    <Drawer.Navigator 
    drawerContent={DrawerContent}
    drawerStyle={{
        width: DRAWER_WIDTH,
    }}
    >
        <Drawer.Screen name="MyFlow" component={MyFlow} />
        <Drawer.Screen name="MyFavorites" component={MyFavorites} />
        <Drawer.Screen name="EditProfile" component={EditProfile} />
        <Drawer.Screen name="Settings" component={Settings} />

        </Drawer.Navigator>  
);