import React from "react";
import { Linking } from "react-native";
import { Box, Button, Container, Text } from "../components";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Footer from "./components/Footer";
import TextInput from "../components/Form/TextInput";
import { AuthenticationRoutes, StackNavigationProps } from "../components/Navigation";

const ForgotPasswordSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
  });

const ForgotPassword = ({ navigation, }: StackNavigationProps<AuthenticationRoutes, "ForgotPassword">) => {
    const {
        handleChange, handleBlur, handleSubmit, errors, touched } = useFormik({                  
        validationSchema: ForgotPasswordSchema,
        initialValues: { email: '' },
        onSubmit: () => {
          console.log("Şifre sıfırlama isteği başarılı"), navigation.navigate("PasswordChanged");
        },
    }
    );
    const footer = ( 
        <Footer
        title="Çalışmıyor mu?" 
        action="Başka bir yol dene" 
        onPress={() => Linking.openURL("mailto:help@vunon.com")} 
        />
        );

    return (<Container pattern={2} {...{footer}} >
                <Box padding="xl">

            <Text variant="title1" textAlign="center" marginBottom="l">
                Şifreni unuttun mu?
                </Text>
                <Text variant="body" textAlign="center" marginBottom="l">
                Hesabınızla ilişkili e-posta adresini girin
              </Text>
           <Box>
               <Box marginBottom="m">
                    <TextInput
                    icon="mail" 
                    placeholder ="E-Posta adresiniz" 
                    onChangeText={handleChange('email')} 
                    onBlur={handleBlur('email')}                   
                    error={errors.email}
                    touched={touched.email}
                    autoCapitalize="none"
                    autoCompleteType="email"
                    returnKeyType="go"
                    returnKeyLabel="go"
                    onSubmitEditing={() => handleSubmit()}
                    />
                      </Box>                    
                    <Box alignItems="center" marginTop="m">
                    <Button 
                      variant="primary" 
                      onPress={handleSubmit} 
                      label="Şifreni sıfırla" 
                    />
                            </Box>
                        </Box>
                        </Box>
    </Container>
    );
};

export default ForgotPassword;