import React, { useState } from 'react';
import { StatusBar} from 'react-native';
import { KeyboardView, Container, CreateAccountBtn, InputText, ButtonSubmit, SubmitText, RegisterText, RegisterTextCreateAccount, RegisterBtn, TitleForm } from './styles';
import { useNavigation } from '@react-navigation/native';
import PageHeader from '../../components/PageHeader';
import api from '../../services/api';

function SignUp(){

    const { navigate } = useNavigation();

   const [nameField, setNameField] = useState('');
    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');
    const [phoneField, setPhoneField] = useState('');
    

    async function handleSubmit(){
        if(emailField != '' && passwordField != '' && nameField != '' && phoneField != ''){
            const data = { 
                name: nameField, 
                email: emailField, 
                password: passwordField,
                phone: phoneField
            };
            await api.post("/user", data)
            .then((response) => {
                navigate("SignUpSucess");
            })
            .catch((error) => {
                alert('Email já está cadastrado!')
            })
            
        } else {
            alert('Erro: Preencha todos os campos!')
        }
    }

    async function handleRedirectForgotPassword() {
        navigate('ForgotPassword');
    }

    async function handleRedirectSignIn() {
        navigate('SignIn');
    }

    return (
        <KeyboardView>
            <StatusBar barStyle="light-content"/>
            <PageHeader />
            <Container>
                <TitleForm>Cadastre-se</TitleForm>
                <InputText 
                    placeholderTextColor="#fff" 
                    placeholder="Name"
                    autoCorrect={false}
                    value={nameField}
                    onChangeText={(e) => {setNameField(e)}}
                />
                <InputText 
                    placeholderTextColor="#fff" 
                    placeholder="Email"
                    autoCorrect={false}
                    value={emailField}
                    onChangeText={(e) => {setEmailField(e)}}
                />
                <InputText 
                    placeholderTextColor="#fff" 
                    placeholder="Phone"
                    autoCorrect={false}
                    value={phoneField}
                    onChangeText={(e) => {setPhoneField(e)}}
                />
                <InputText 
                    placeholderTextColor="#fff" 
                    placeholder="Senha"
                    autoCorrect={false}
                    value={passwordField}
                    onChangeText={(e) => {setPasswordField(e)}}
                    secureTextEntry={true}
                />
                
                <ButtonSubmit onPress={handleSubmit}>
                    <SubmitText>Entrar</SubmitText>
                </ButtonSubmit>
                <RegisterBtn onPress={handleRedirectForgotPassword}>
                    <RegisterText>Esqueceu sua senha?</RegisterText>
                </RegisterBtn>
                <CreateAccountBtn onPress={handleRedirectSignIn}>
                    <RegisterTextCreateAccount>Já tem conta? Faça Login!</RegisterTextCreateAccount>
                </CreateAccountBtn>
            </Container>
        </KeyboardView> 
    );
}

export default SignUp;