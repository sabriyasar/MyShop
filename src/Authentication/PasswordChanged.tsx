import React from "react";
import { Feather as Icon } from "@expo/vector-icons";
import { Routes, StackNavigationProps } from "../components/Navigation";
import { Box, Button, Container, Text, RoundedIconButton, RoundedIcon } from "../components";

const SIZE = 80;
const PasswordChanged = ({ navigation, }: StackNavigationProps<Routes, "PasswordChanged">) => {
    return (
        <Container 
        pattern={0}
        footer={
        <Box flexDirection="row" justifyContent="center">
        <RoundedIconButton
        backgroundColor="white"
        color="secondary"
        name="x"
        size={60}
        onPress={() => navigation.pop()}
        />
        </Box>
         }
    >       
            <Box flex={1} justifyContent="center" alignItems="center">
                <RoundedIcon 
                name="check" 
                size={SIZE} 
                backgroundColor="primaryLight" 
                color="primary" 
                />
            
                <Text variant="title1" textAlign="center" marginBottom="l">
                Şifren başarılı şekilde değiştirildi.
                </Text>
                <Text variant="body" textAlign="center" marginBottom="l">
                Sayfayı kapatın ve Giriş sayfasına dönün.
              </Text>
              <Box alignItems="center" marginTop="m">
                    <Button
                      variant="primary" 
                      onPress={() => navigation.navigate("Login")} 
                      label="Şifreni sıfırla" 
                    />
                            </Box></Box>
        </Container>
    );
};

export default PasswordChanged;