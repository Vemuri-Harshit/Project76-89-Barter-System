import React,{Component}from 'react';
import {View,Text,TextInput,Modal,KeyboardAvoidingView,StyleSheet,TouchableOpacity,Alert,ScrollView} from 'react-native';
import{createDrawerNavigator,DrawerItems} from 'react-navigation-drawer'
import db from '../config';
import firebase from 'firebase';

import {TabNavigator} from './TabNavigator'
import SideBarMenu from './SideBarMenu'
import SettingScreen from '../screens/SettingScreen'
import MyDonationsScreen from '../screens/MyDonationsScreen'
import NotificationScreen from '../screens/NotificationScreen'

export const DrawerNavigator = createDrawerNavigator({
    Home:{
        screen:TabNavigator
    },
    MyDonations:{
        screen:MyDonationsScreen
    },
    Notification :{
        screen:NotificationScreen
    },
    Settings:{
        screen: SettingScreen
    }

},

{contentComponent:SideBarMenu },

{initialRouteName: 'Home'}
)