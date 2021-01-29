import React from 'react';
import { Image, ImageBackground, StatusBar } from 'react-native';
import { 
    KeyboardView, 
    Container,
    Title,
    Description,
    ButtonWrapper,
    ComeBackButton,
    ButtonText
 } from './styles';
import { useNavigation } from '@react-navigation/native';
import PageHeader from '../../components/PageHeader';
import doneIcon from '../../assets/images/icons/Feito.png';
import backgroundImage from '../../assets/images/success-background.png';

function SignUpSucess() {

    const { navigate } = useNavigation();

    async function handleNavigateToLogin() {
        navigate("SignIn");
    }

    return (
        <KeyboardView>
            <StatusBar barStyle="light-content" />
            <PageHeader />

            <ImageBackground
                resizeMode="contain"
                source={backgroundImage}
                style={{flex: 7,
                    alignItems: 'center',
                    justifyContent: 'center',}}
            >
                <Image source={doneIcon} />
                <Container>
                    <Title>Cadastro concluído!</Title>
                    <Description>
                        Agora você já pode fazer login!
                    </Description>
                    <ButtonWrapper>
                        <ComeBackButton onPress={() => { handleNavigateToLogin(); }}>
                            <ButtonText>Fazer login</ButtonText>
                        </ComeBackButton>
                    </ButtonWrapper>
                </Container>
            </ImageBackground>
           
        </KeyboardView>
    );
}

export default SignUpSucess;