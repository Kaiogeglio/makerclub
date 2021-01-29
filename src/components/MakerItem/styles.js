import styled from 'styled-components/native'

export const Container = styled.View`
    background-color: #fafafc;
    border-width: 1px;
    border-color: #fafafc;
    border-radius: 8px;
    margin-bottom: 16px;
    overflow: hidden;
    padding: 20px;
    width: 350px;
`;

export const Info = styled.View``;

export const HashtagGroup = styled.View`
    flex-direction: row;
`;

export const Hashtag = styled.Text`
    margin-left: 5px;
    color: #7853EA;
    font-size: 16px;
    font-family: 'Nunito_400Regular';
`;

export const Title = styled.Text`
    color: #7853EA;
    font-size: 20px;
    font-family: 'Nunito_700Bold';
    margin-top: 20px;
`;

export const Name = styled.Text`
    color: #6a6180;
`;
export const Email = styled.Text`
    color: #6a6180;
`;

export const Description = styled.Text`
    color: #6a6180;
    line-height: 27px;
    font-size: 14px;
    font-family: 'Nunito_400Regular';
    margin-top: 20px;
`;
export const Footer = styled.View``;

export const FavoriteButton = styled.TouchableOpacity`
    height: 60px;
    width: 60px;
    border-radius: 30px;
    justify-content: center;
    align-items: center;
    margin-right: 8px;
    align-items: center;
`;

export const WhatsappButton = styled.TouchableOpacity`
    height: 60px;
    width: 60px;
    background-color: #12E6C8;
    border-radius: 30px;
    justify-content: center;
    align-items: center;
    margin-left: 8px;
    align-items: center;
`;

export const ButtonsContainer = styled.View`
    flex-direction: row;
    margin-top: 16px;
    justify-content: center;
`;

export const ContainerBio = styled.View`
    
`;