import React,{Component} from 'react'
import {Text,View} from 'react-native'
import {Icon} from 'react-native-elements'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {StackNavigator} from './StackNavigator'
import DonateScreen from '../screens/DonateScreen'
import RequestScreen from '../screens/RequestScreen'

export const TabNavigator =  createBottomTabNavigator({
Donate :{
    screen : StackNavigator,
        navigationOptions:{
           tabBarIcon : <Icon name="at" type="font-awesome" size={25} /> , 
           tabBarLabel : 'Donate'
       }
},

Request :{
    screen : RequestScreen,
    navigationOptions:{
        tabBarIcon : <Icon name="shopping-basket" type="font-awesome" size={25} /> , 
        tabBarLabel : 'Request'
    }
}

})
