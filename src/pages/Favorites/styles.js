import styled from 'styled-components/native';

export const KeyboardView = styled.KeyboardAvoidingView`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: #000;
`;

export const MakerLine = styled.FlatList`
    
`;

export const Loading = styled.ActivityIndicator.attrs({
    size: 'small',
    color: '#999'
})`
  margin: 30px 0;
`;

export const SearchForm = styled.View`
    margin-bottom: 24;
`;
export const Label = styled.View`
    color: '#d4c2ff';
    font-family: 'Nunito_400Regular';
`;

export const Input = styled.View`
    height: 54px;
    background-color: #fff;
    border-radius: 8px;
    justify-content: center;
    margin-top: 4px;
    margin-bottom: 16px;
`;

export const InputGroup = styled.View`
    flex-direction: 'row';
    justify-content: 'space-between';
`;

export const InputBlock = styled.View`
    width: '48%';
`;

export const SubmitButtonText = styled.View`
    color: #fff;
    font-family: 'Nunito_700Bold';
    font-size: 14;
`;

export const SubmitButton = styled.View`
    background-color: #04d361;
    flex-direction: 'row';
    height: 56px;
    border-radius: 8px;
    justify-content: 'center';
    align-items: 'center';
`;

export const Title = styled.Text`
    color: #fff;
    font-family: 'Nunito_700Bold';
    font-size: 20px;
    margin-bottom: 10px;
    margin-right: 20px;
`;

export const FooterBar = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;