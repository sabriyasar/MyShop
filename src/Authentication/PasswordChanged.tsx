import React from "react";
import { AuthNavigationProps } from "../components/Navigation";
import { Box, Button, Container, Text, RoundedIconButton, RoundedIcon } from "../components";

const SIZE = 80;
const PasswordChanged = ({ navigation, }: AuthNavigationProps<"PasswordChanged">) => {
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
     <Box alignSelf="center" padding="xl" marginTop="l">
                <RoundedIcon 
                name="check" 
                size={SIZE} 
                backgroundColor="primaryLight" 
                color="primary" 
                />
                </Box>
                <Text variant="title1" textAlign="center" marginVertical="xl">
                Şifren başarılı şekilde değiştirildi.
                </Text>
                <Text variant="body" textAlign="center" marginBottom="l">
                Sayfayı kapatın ve Giriş sayfasına dönün.
              </Text>
              <Box alignItems="center" marginTop="m">
                    <Button
                      variant="primary" 
                      onPress={() => navigation.navigate("Login")} 
                      label="Giriş Yap" 
                    />
                            </Box>
        </Container>
    );
};

export default PasswordChanged;