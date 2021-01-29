import React from 'react';
import { Image, Linking } from 'react-native';
import { 
    Container, 
    Info, 
    HashtagGroup, 
    Hashtag, 
    Name, 
    Email, 
    Description, 
    Footer, 
    ButtonsContainer, 
    FavoriteButton, 
    WhatsappButton,
    Title,
    ContainerBio
} from './styles';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

function MakerItem({ service, hashtags, user, iconFavorite, colorIcon, onUnfavorite, changeFavoriteTo }) {

    async function handleLinkToWhatsapp(phone) {
        await Linking.openURL(`whatsapp://send?phone=55${phone}`);
    }

    return (
        <Container>
            <Info>
                <HashtagGroup>
                    {hashtags.map((item, index) => (
                        <Hashtag key={index}>{`#${item}`}</Hashtag>
                    ))}
                </HashtagGroup>
                <Title>{service.title}</Title>
                <ContainerBio>
                    <Name>{user.name}</Name>
                    <Email>{user.email}</Email>
                </ContainerBio>
                
            </Info>
            <Description>{service.description}</Description>
            <Footer>
                <ButtonsContainer>
                    <FavoriteButton 
                        style={{ backgroundColor: colorIcon }}
                        onPress={() => onUnfavorite(changeFavoriteTo, service._id)}>
                        <Image source={iconFavorite} />
                    </FavoriteButton>
                    { user.phone ? 
                        <WhatsappButton onPress={handleLinkToWhatsapp(user.phone)}>
                            <Image source={whatsappIcon} />
                        </WhatsappButton>
                        :
                        <>
                        </>
                    }
                    
                </ButtonsContainer>
            </Footer>
        </Container>
    )
}

export default MakerItem;