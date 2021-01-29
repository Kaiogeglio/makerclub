import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//pages
import Landing from '../pages/Landing';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import ForgotPassword from '../pages/ForgotPassword';
import SignUpSucess from '../pages/SignUpSucess';

//Tab
import Tabs from './Tabs';

const { Navigator, Screen } = createStackNavigator();

function AppStack(){
    return(
        <NavigationContainer>
            <Navigator 
                initalRouteName="Landing"
                screenOptions={{ headerShown: false }}
            >   
                
                <Screen name="Landing" component={Landing}/>
                <Screen name="Makers" component={Tabs}/>
                <Screen name="SignIn" component={SignIn}/>
                <Screen name="SignUp" component={SignUp}/>
                <Screen name="ForgotPassword" component={ForgotPassword}/>
                <Screen name="SignUpSucess" component={SignUpSucess}/>
                
            </Navigator>
        </NavigationContainer>
    )   
}

export default AppStack;