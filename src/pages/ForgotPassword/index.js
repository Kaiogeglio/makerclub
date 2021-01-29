import React, { useState } from 'react';
import { StatusBar} from 'react-native';
import { KeyboardView, Container, CreateAccountBtn, InputText, ButtonSubmit, SubmitText, RegisterText, RegisterTextCreateAccount, RegisterBtn, TitleForm} from './styles';
import { useNavigation } from '@react-navigation/native';
import PageHeader from '../../components/PageHeader';
import authService from '../../services/authService';
import tokenService from '../../services/tokenService';

function ForgotPassword(){

    const { navigate } = useNavigation();

    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');

    async function handleSubmit(){
        if(emailField != '' && passwordField != ''){
            let json = await authService.signIn(emailField, passwordField);
            await tokenService.setToken(json.data.token);
            navigate('Makers');
        } else {
            alert('erro')
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
                <TitleForm>Recupere sua senha!</TitleForm>
                <InputText 
                    placeholderTextColor="#fff" 
                    placeholder="Email"
                    autoCorrect={false}
                    value={emailField}
                    onChangeText={(e) => {setEmailField(e)}}
                />
                <ButtonSubmit onPress={handleSubmit}>
                    <SubmitText>Entrar</SubmitText>
                </ButtonSubmit>
                <CreateAccountBtn onPress={handleRedirectSignUp}>
                    <RegisterTextCreateAccount>Ainda não tem conta?</RegisterTextCreateAccount>
                </CreateAccountBtn>
            </Container>
        </KeyboardView> 
    );
}

export default ForgotPassword;