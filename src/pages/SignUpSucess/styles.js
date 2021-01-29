import styled from 'styled-components/native';

export const KeyboardView = styled.KeyboardAvoidingView`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: #000;
    padding-bottom: 30px;
`;

export const Container = styled.View`
    align-items: center;
    justify-content: center;
    padding-bottom: 10px;
`;

export const Title = styled.Text`
    color: #fff;
    margin-bottom: 20px;
    margin-top: 20px;
    font-size: 26px;
    font-family: 'Nunito_700Bold';
    text-align: center;
`;

export const Description = styled.TextInput`
    color: #fff;
    font-size: 16px;
    font-family: 'Nunito_400Regular';
    text-align: center;
`

export const ButtonWrapper = styled.View`
    
`

export const ComeBackButton = styled.TouchableOpacity`
    background-color: #A287F4;
    width: 200px;
    height: 55px;
    align-items: center;
    justify-content: center;
    border-radius: 18px;
    margin-top: 20px;
`

export const ButtonText = styled.Text`
    color: #fff;
    font-size: 20px;
    font-family: 'Nunito_700Bold';
`


