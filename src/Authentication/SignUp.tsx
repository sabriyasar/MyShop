import React, { useRef } from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { TextInput as RNTextInput } from "react-native";

import { Box, Button, Container, Text } from "../components";

import TextInput from "../components/Form/TextInput";
import Footer from "./components/Footer";
import { AuthenticationRoutes, StackNavigationProps } from "../components/Navigation";


const SignUpSchema = Yup.object().shape({
    password: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
      passwordConfirmation: Yup.string()
      .equals([Yup.ref("password")], "Şifreler eşleşmedi")
      .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
  });

const SignUp = ({ navigation }: StackNavigationProps<AuthenticationRoutes, "SignUp">) => {

    const {
        handleChange, handleBlur, handleSubmit, errors, touched } = useFormik({                  
        validationSchema: SignUpSchema,
        initialValues: { 
          email: '', 
          password: "", 
          passwordConfirmation: "", 
          remember: true,
        },
        onSubmit: (values) => console.log(values),
    }
    );

    const password = useRef<RNTextInput>(null);
    const passwordConfirmation = useRef<RNTextInput>(null);
    const footer = ( 
        <Footer
        title="Zaten bir hesabın var mı?" 
        action="Giriş Yap" 
        onPress={() => navigation.navigate("Login")} 
        />
        );

    return (
        <Container pattern={1} {...{footer}}>
          <Box padding="xl">
            <Text variant="title1" textAlign="center" marginBottom="l">
                Hesap Oluştur
                </Text>
                <Text variant="body" textAlign="center" marginBottom="l">
                    Ad Soyad, E-Posta ve Şifreni girerek hesabını oluşturabilirsin.
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
                    </Box>

                    <Box marginBottom="m">
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
                    returnKeyType="next"
                    returnKeyLabel="next"
                    onSubmitEditing={() => passwordConfirmation.current?.focus()}
                    secureTextEntry
                    />
                      </Box>
                     <Box marginBottom="m">           
                    <TextInput 
                    ref={passwordConfirmation}
                    icon="lock" 
                    placeholder ="Tekrar Şifre giriniz" 
                    onChangeText={handleChange('passwordConfirmation')} 
                    onBlur={handleBlur('passwordConfirmation')} 
                    error={errors.passwordConfirmation}
                    touched={touched.passwordConfirmation}
                    autoCompleteType="password"
                    autoCapitalize="none"                   
                    returnKeyType="go"
                    returnKeyLabel="go"
                    onSubmitEditing={() => handleSubmit()}
                    secureTextEntry
                    />  
                    </Box>
                    <Box alignItems="center" marginTop="m">
                    <Button 
                      variant="primary" 
                      onPress={handleSubmit} 
                      label="Hesabını oluştur" 
                    />
                            </Box>
                        </Box>
                        </Box>
           </Container>
        );
};

export default SignUp;