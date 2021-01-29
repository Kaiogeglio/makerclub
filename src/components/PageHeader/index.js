import React from 'react';
import { Image } from 'react-native';
import { Container, TopBar } from './styles';
import logoImage from '../../assets/logo-makerclub.png';


function PageHeader({children}) {

    return(
        <Container>
            <TopBar>
                <Image 
                    style={{
                        width: 130,
                        height: 130
                    }}
                    source={logoImage} 
                    resizeMode="contain"
                />
            </TopBar>
            {children}
        </Container>
    )
}

export default PageHeader;