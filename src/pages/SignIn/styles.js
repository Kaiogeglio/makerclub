import styled from 'styled-components/native';

export const KeyboardView = styled.KeyboardAvoidingView`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: #000;
    padding-bottom: 30px;
`;

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    width: 90%;
    padding-bottom: 10px;
`;

export const SubmitButton = styled.View`
    background-color: #04d361;
    flex-direction: 'row';
    height: 56px;
    border-radius: 8px;
    justify-content: 'center';
    align-items: 'center';
`;

export const InputText = styled.TextInput`

    background-color: #000;
    border: 2px solid #12E6C8;
    width: 90%;
    margin-bottom: 25px;
    font-size: 17px;
    border-radius: 18px;
    padding: 15px;
    font-family: 'Nunito_400Regular';
    color: #fff;

`

export const ButtonSubmit = styled.TouchableOpacity`
    background-color: #A287F4;
    width: 90%;
    height: 55px;
    align-items: center;
    justify-content: center;
    border-radius: 18px;
`

export const SubmitText = styled.Text`
    color: #fff;
    font-size: 18px;
`

export const RegisterText = styled.Text`
    color: #12E6C8;
    font-size: 18px;
    font-family: 'Nunito_400Regular';
`

export const RegisterTextCreateAccount = styled.Text`
    color: #fff;
    font-size: 18px;
    font-family: 'Nunito_400Regular';
`

export const RegisterBtn = styled.TouchableOpacity`
    color: #fff;
    margin-top: 20px;
`

export const CreateAccountBtn = styled.TouchableOpacity`
    color: #fff;
    margin-top: 20px;
    font-size: 18px;
    font-family: 'Nunito_400Regular';
`

export const TitleForm = styled.Text`
    color: #fff;
    margin-bottom: 20px;
    font-size: 26px;
    font-family: 'Nunito_700Bold';
`


