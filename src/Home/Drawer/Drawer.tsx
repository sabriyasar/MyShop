import React from "react";
import { Dimensions, Image, StyleSheet } from "react-native";
import { Box, RoundedIconButton, Text } from "../../components";

import DrawerItem, { DrawerItemProps } from "./DrawerItem";

const { width } = Dimensions.get("window");
export const DRAWER_WIDTH = width * 0.8;
const aspectRatio = 750 / 1125;
const height = DRAWER_WIDTH * aspectRatio;
const items: DrawerItemProps[] = [
    {
        icon: "zap",
        label: "Akışım",
        screen: "MyFlow",
        color: "primary",
    },
    {
        icon: "user",
        label: "Favorilerim",
        screen: "FavoritesOutfits",
        color: "orange",
    },
    {
        icon: "user",
        label: "Profili Düzenle",
        screen: "EditProfile",
        color: "yellow",
    },
    {
        icon: "clock",
        label: "Hareketler",
        screen: "TransactionHistory",
        color: "pink",
    },
    {
        icon: "settings",
        label: "Bildirim Ayarları",
        screen: "NotificationSettings",
        color: "violet",
    },
    {
        icon: "log-out",
        label: "Çıkış Yap",
        screen: "Logout",
        color: "secondary",
    },
];

const Drawer = () => {
    return (
        <Box flex={1}>
            <Box flex={0.2} backgroundColor="white">
                <Box 
                position="absolute" 
                top={0} 
                left={0} 
                right={0} 
                bottom={0} 
                borderBottomRightRadius="xl" 
                backgroundColor="secondary"
                flexDirection="row"
                justifyContent="space-between"
                paddingHorizontal="m"
                style={{ paddingTop: 50 }}
                >
                    <RoundedIconButton 
                        size={24}
                        name="x"
                        color="white"
                        backgroundColor="secondary"
                        onPress={() => true}
                    />
                    <Text color="white">PROFİL</Text>

                    <RoundedIconButton 
                        size={24}
                        name="shopping-bag"
                        color="white"
                        backgroundColor="secondary"
                        onPress={() => true}
                    />
                </Box>
            </Box>
            <Box flex={0.8}>
                <Box flex={1} backgroundColor="secondary" />
                <Box flex={1} backgroundColor="primary" />
                <Box 
                position="absolute" 
                top={0} 
                left={0} 
                right={0} 
                bottom={0} 
                backgroundColor="white"
                borderTopLeftRadius="xl"
                borderBottomRightRadius="xl"
                justifyContent="center" 
                padding="xl"
                >
                    <Box
                    position="absolute" 
                    left={DRAWER_WIDTH / 2 - 50} 
                    top={-50}  
                    backgroundColor="primary" 
                    width={90} 
                    height={90} 
                    style={{ borderRadius: 50 }}
                    />
                   <Box marginVertical="m"> 
                    <Text variant="title1" textAlign="center">Sabri Yaşar</Text>
                    <Text variant="body" textAlign="center">sabri@vunon.com</Text>
                    </Box>
                   {items.map((item) => (
                    <DrawerItem key={item.screen} {...item} />
                    ))}       
                </Box>
            </Box>
            <Box 
            backgroundColor="white" 
            width={DRAWER_WIDTH}
            overflow="hidden"
            height={height * 0.61}
            >
                <Image
                source={require("../../components/assets/patterns/4.jpg")}
                style={{
                    ...StyleSheet.absoluteFillObject,
                    width: undefined,
                    height: undefined,
                }}
                />
            </Box>
            </Box>
    );
};

export default Drawer;