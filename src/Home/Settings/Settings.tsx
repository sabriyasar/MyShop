import React from "react";
import { Box, Header } from "../../components";
import { HomeNavigationProps } from "../../components/Navigation";

const Settings = ({ navigation }: HomeNavigationProps<"Settings">) => {
   return (
   <Box flex={1} backgroundColor="background">
    <Header
    title="Bildirim"
    left={{ icon: "menu", onPress: () => navigation.openDrawer() }}
    right={{ icon: "shopping-bag", onPress: () => true }}
    dark
    /> 
    </Box>
    );
};

export default Settings;