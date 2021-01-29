import React, { useEffect } from 'react';
import { Container, LoadingIcon } from './styles';
import { Image } from 'react-native';
import Logo from '../../assets/logo-makerclub.png';
import tokenService from '../../services/tokenService';
import { useNavigation } from '@react-navigation/native'

function Landing() {

  const { navigate } = useNavigation();

  useEffect(() =>{
    const checkToken = async () => {
        const token = await tokenService.getToken();
        if(token){
            navigate('Makers');
        } else {
            setTimeout(() => {
                navigate('SignIn');
            }, 5000);
        }
    }
    checkToken();

}, []);
  return (
    <Container>
      <Image source={Logo} width="300" height="300"/>
      <LoadingIcon size="large" color="#fff" />
    </Container>

  )
}

export default Landing;