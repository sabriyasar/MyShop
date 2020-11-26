import { DrawerActions } from "@react-navigation/native";
import React from "react";
import { Box, Header } from "../../components";
import { HomeNavigationProps } from "../../components/Navigation";


const EditProfile = ({ navigation }: HomeNavigationProps<"EditProfile">) => {
    return (
        <Box flex={1}>
            <Box flex={0.2} backgroundColor="background">
                <Box 
                position="absolute" 
                top={0} 
                left={0} 
                right={0} 
                bottom={0} 
                borderBottomRightRadius="xl" 
                backgroundColor="secondary"
                >
                    <Header 
                    title="Menu" 
                    left={{ icon: "x", onPress: () => navigation.dispatch(DrawerActions.closeDrawer()),
                }}
                    right={{ icon: "shopping-bag", onPress: () => true }}
                    dark
                    />
                </Box>
                </Box>
        </Box>
    );
};

export default EditProfile;