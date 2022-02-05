/**
 * @author Amusoftech <er.amudeep@gmail.com>
 * @description List of routes for Tabs Navigator and Stack navigator, Along addational  Option for Tabs
 */
import Home from '../screens/Home';
import Login from '../screens/Login';
import Profile from '../screens/Profile';

import RecoverPass from '../screens/Login/RecoverPass';
import * as Animatable from 'react-native-animatable';
import React from 'react';
import OnBoarding from '../screens/OnBoarding';
import {appColors} from '../utils/appColors';
import { scale } from 'react-native-size-matters';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import { View } from 'react-native';
 

export const RoutesList = [
  
  {
    name: 'Home',
    component: Home,
    options: {  
      tabBarLabel: 'Home',
      tabBarIcon: (props) => <CustomIcon props={props}  />, 
    },
  },
  {
    name: 'Profile',
    component: Profile,
    options: {  
      tabBarLabel: 'Profile',
      tabBarIcon: (props) => <CustomIcon props={props} iconName="person"  />, 
    },
  },

  
];


export const GuestRoutes= [
  {
    name: 'OnBoarding',
    component: OnBoarding,
    options: {
      tabBarBadge: 3,
      tabBarLabel: 'OnBoarding',
      tabBarButton:()=>null 
    },
  },

  {
    name: 'Login',
    component: Login,
    options: {
      tabBarBadge: 3,
      tabBarLabel: 'Login',
      tabBarButton:()=>null 
    },
  },

  {
    name: 'RecoverPass',
    component: RecoverPass,
    options: {
      tabBarBadge: 3,
      tabBarLabel: 'RecoverPass',
      tabBarButton:()=>null 
    },
  },

  

]


const CustomIcon = ({ props, iconName, animationProps }) => {
  const { focused } = props 
  return (
    <Animatable.View
      {...animationProps}
      style={{
        padding: scale(10),
        height: scale(70),
        width: scale(70),
        justifyContent:
          /* Platform.OS === 'android' ? 'flex-start' :  */ 'center',
        alignItems: 'center',
        // borderRadius: scale(50),
        //backgroundColor:appColors.white
      }}>
      <View
        style={[{
          borderRadius: scale(20),
        }, focused ? {} : { opacity: scale(0.4) }]}>
        <MaterialIcons
          name={iconName ? iconName : 'home'}
          size={scale(28)} /* color={appColors.white} */
          {...props}
          
        />
      </View>
    </Animatable.View>
  );
};
