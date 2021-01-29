import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    background-color: #000;
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: 40px;
`;

export const LoadingIcon = styled.ActivityIndicator`
    margin-top: 100px;  
    text-align: center;
`;