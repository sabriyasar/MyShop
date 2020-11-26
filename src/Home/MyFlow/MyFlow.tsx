import React from "react";
import { Box, Header } from "../../components";
import { HomeNavigationProps } from "../../components/Navigation";

import Background from "./Background";
import Card from "./Card";

const MyFlow = ({ navigation }: HomeNavigationProps<"MyFlow">) => {
    return (
        <Box flex={1} backgroundColor="white">
       <Header 
          title="Akışım"
          left={{ icon: "menu", onPress: () => navigation.openDrawer() }}
          right={{ icon: "shopping-bag", onPress: () => true }}
          dark
       /> 
       <Box flex={1}>
        <Background />
        <Card position={1}/>
        <Card position={0.5}/>
        <Card position={0}/>
       </Box>
       </Box>
    );
};

export default MyFlow;