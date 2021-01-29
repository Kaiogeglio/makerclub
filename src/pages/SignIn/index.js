import React, { useState } from 'react';
import { StatusBar} from 'react-native';
import { KeyboardView, Container, CreateAccountBtn, InputText, ButtonSubmit, SubmitText, RegisterText, RegisterTextCreateAccount, RegisterBtn, TitleForm } from './styles';
import { useNavigation } from '@react-navigation/native';
import PageHeader from '../../components/PageHeader';
import authService from '../../services/authService';
import tokenService from '../../services/tokenService';

function SignIn(){

    const { navigate } = useNavigation();

    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');

    async function handleSubmit(){
        if(emailField != '' && passwordField != ''){
            await authService.signIn(emailField, passwordField)
            .then((response) => {
                tokenService.setToken(response.data.token);
                navigate('Makers');
            })
            .catch((error) => {
                alert('Error: Usuário ou senha incorretos');
            })
            
            
        } else {
            alert('Erro: Preencha todos os campos')
        }
    }

    async function handleRedirectForgotPassword() {
        navigate('ForgotPassword');
    }

    async function handleRedirectSignUp() {
        navigate('SignUp');
    }

    return (
        <KeyboardView>
            <StatusBar barStyle="light-content"/>
            <PageHeader />
            <Container>
                <TitleForm>Login</TitleForm>
                <InputText 
                    placeholderTextColor="#fff" 
                    placeholder="Email"
                    autoCorrect={false}
                    value={emailField}
                    onChangeText={(e) => {setEmailField(e)}}
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
                <CreateAccountBtn onPress={handleRedirectSignUp}>
                    <RegisterTextCreateAccount>Ainda não tem conta?</RegisterTextCreateAccount>
                </CreateAccountBtn>
            </Container>
        </KeyboardView> 
    );
}

export default SignIn;