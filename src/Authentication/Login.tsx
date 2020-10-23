import React, { useRef } from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup';


import { Box, Button, Container, Text } from "../components";
import { Routes, StackNavigationProps } from "../components/Navigation";

import TextInput from "../components/Form/TextInput";
import Checkbox from "../components/Form/Checkbox";
import Footer from "./components/Footer";
import { BorderlessButton } from "react-native-gesture-handler";


const LoginSchema = Yup.object().shape({
    password: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
  });

const Login = ({ navigation }: StackNavigationProps<Routes, "Login">) => {

    const {
        handleChange, handleBlur, handleSubmit, errors, touched, values, setFieldValue
    } = useFormik({                  
        validationSchema: LoginSchema,
        initialValues: { email: '', password: "", remember: true },
        onSubmit: navigation.navigate("Home"),
    });

    const password = useRef<typeof TextInput>(null);
    const footer = ( 
        <Footer
        title="Bir hesabın yok mu?" 
        action="Kayıt Ol" 
        onPress={() => navigation.navigate("SignUp")} 
        />
        );

    return (
        <Container pattern={0} {...{footer}}>
            <Box padding="xl">
            <Text variant="title1" textAlign="center" marginBottom="l">
                Tekrar Hoş Geldiniz
                </Text>
                <Text variant="body" textAlign="center" marginBottom="l">
                    Aşağıdaki bilgileri kullanın ve hesabınıza giriş yapın
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
                    returnKeyType="next"
                    returnKeyLabel="next"
                    onSubmitEditing={() => password.current?.focus()}
                    />
                   
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
                       marginVertical="s" 
                    />
                        <Checkbox 
                        label="Beni Hatırla" 
                        checked={values.remember} 
                        onChange={() => setFieldValue("remember", !values.remember)}/>
                        <BorderlessButton
                        onPress={() => navigation.navigate("ForgotPassword")}
                        >
                            <Text variant="button" color="primary">Şifreni unuttun mu?</Text>
                        </BorderlessButton>
                    </Box>
                    <Box alignItems="center" marginTop="m">
                    <Button 
                      variant="primary" 
                      onPress={handleSubmit} 
                      label="Hesabınıza giriş yapın" 
                    />
                            </Box>
                        </Box>
                 </Box>
           </Container>
        );
};

export default Login;