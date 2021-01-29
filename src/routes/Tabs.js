import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import MakerList from '../pages/MakerList';
import Favorites from '../pages/Favorites';
import Config from '../pages/Config';

const { Navigator, Screen } = createBottomTabNavigator();

function Tabs(){
    return(
        <Navigator
            tabBarOptions={{
                style:{
                    elevation: 0,
                    shadowOpacity: 0,
                    height: 64,
                    borderColor: '#A287F4'
                },
                tabStyle: {
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center'
                },
                iconStyle: {
                    flex: 0,
                    width: 20,
                    height: 20
                },
                labelStyle: {
                    fontFamily: 'Nunito_700Bold',
                    fontSize: 13,
                    marginLeft: 10
                },
                iinactiveBackgroundColor: '#fafafc',
                activeBackgroundColor: '#ebebf5',
                inactiveTintColor: '#c1bccc',
                activeTintColor: '#32264d'
            }}
        >
            <Screen 
                name="MakerList" 
                component={MakerList}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color, size, focused }) =>{
                        return(
                            <Ionicons name="ios-home" size={size} color={focused ? '#A287F4' : color}/>
                        )
                    }
                }}
            />
            <Screen 
                name="Favorites" 
                component={Favorites} 
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color, size, focused }) =>{
                        return(
                            <Ionicons name="ios-heart" size={size} color={focused ? '#A287F4' : color}/>
                        )
                    }
                }}
            />
            <Screen 
                name="Config" 
                component={Config} 
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color, size, focused }) =>{
                        return(
                            <Ionicons name="ios-apps" size={size} color={focused ? '#A287F4' : color}/>
                        )
                    }
                }}
            />
        </Navigator>
    )
    
}
export default Tabs;