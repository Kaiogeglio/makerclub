import React from 'react';
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { KeyboardView, ScrollView, Line, Button } from './styles';
import PageHeader from '../../components/PageHeader';
import tokenService from '../../services/tokenService';

function Config(){

    const { navigate } = useNavigation();
    
    async function handleLogOut() {
        await tokenService.removeToken();
        navigate('SignIn');
    }

    async function handleRedirectProfile() {

    }

    async function handleRedirectConfig() {

    }

    return(
        <KeyboardView>
            <StatusBar barStyle="light-content"/>
            <PageHeader />
            <ScrollView>
                <Button
                    onPress={handleRedirectProfile}>
                    <Line>Perfil</Line>
                </Button>
                <Button
                    onPress={handleRedirectConfig}>
                    <Line>Configurações</Line>
                </Button>
                <Button
                    onPress={handleLogOut}>
                    <Line>Sair</Line>
                </Button>
            </ScrollView>
        </KeyboardView>
    )
}

export default Config;