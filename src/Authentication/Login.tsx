import React, { useRef } from "react";
import { TextInput as RNTextInput } from "react-native";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { BorderlessButton } from "react-native-gesture-handler";
import { StackNavigationProp } from "@react-navigation/stack";
import { CompositeNavigationProp } from "@react-navigation/native";
import { DrawerNavigationProp } from "@react-navigation/drawer";

import { Box, Button, Container, Text } from "../components";
import { AppRoutes, AuthenticationRoutes, AuthNavigationProps, HomeRoutes } from "../components/Navigation";
import TextInput from "../components/Form/TextInput";
import Checkbox from "../components/Form/Checkbox";

import Footer from "./components/Footer";

const LoginSchema = Yup.object().shape({
    password: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
  });
  
const Login = ({ navigation }: AuthNavigationProps<"Login">) => {
    const {
        handleChange, handleBlur, handleSubmit, errors, touched, values, setFieldValue
    } = useFormik({                  
        validationSchema: LoginSchema,
        initialValues: { email: "", password: "", remember: true },
        onSubmit: () => navigation.navigate("Home"),
    });

    const password = useRef<RNTextInput>(null);
    const footer = ( 
        <Footer
        title="Bir hesabın yok mu?" 
        action="Kayıt Ol" 
        onPress={() => navigation.navigate("SignUp")} 
        />
        );

    return (
        <Container pattern={0} {...{footer}}>
            <Box>
            <Box padding="xl">
            <Text variant="title1" textAlign="center" marginBottom="l">
                Tekrar Hoş Geldiniz
                </Text>
                <Text variant="body" textAlign="center" marginBottom="l">
                    Aşağıdaki bilgileri kullanın ve hesabınıza giriş yapın
                    </Text>
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
                    returnKeyType="next"
                    returnKeyLabel="next"
                    onSubmitEditing={() => password.current?.focus()}
                    />
                    </Box>
                    <TextInput 
                    ref={password}
                    icon="lock" 
                    placeholder ="Şifre giriniz" 
                    onChangeText={handleChange('password')} 
                    onBlur={handleBlur('password')} 
                    error={errors.password}
                    touched={touched.password}
                    autoCompleteType="password"
                    autoCapitalize="none"                   
                    returnKeyType="go"
                    returnKeyLabel="go"
                    onSubmitEditing={() => handleSubmit()}
                    secureTextEntry
                    />                     
                    <Box 
                       flexDirection="row" 
                       justifyContent="space-between"
                       alignItems="center" 
                       marginVertical="m" 
                    >
                        <Checkbox 
                        label="Beni Hatırla" 
                        checked={values.remember} 
                        onChange={() => setFieldValue("remember", !values.remember)}
                        />
                        <BorderlessButton
                        onPress={() => navigation.navigate("ForgotPassword")}
                        >
                            <Text variant="button" color="primary">
                                Şifreni unuttun mu?
                                </Text>
                        </BorderlessButton>
                        </Box>
                    </Box>
                    <Box alignItems="center" marginTop="s">
                    <Button 
                      variant="primary" 
                      onPress={handleSubmit} 
                      label="Hesabınıza giriş yapın" 
                    />
                            </Box>
                        </Box>
           </Container>
        );
};

export default Login;