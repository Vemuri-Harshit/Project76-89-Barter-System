import React,{Component} from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native';
import LoginScreen from './screens/LoginScreen';
import {createSwitchNavigator,createAppContainer} from 'react-navigation'
import {DrawerNavigator} from './components/DrawerNavigator'

export default class App extends Component{
  render(){
    return(
      <AppContainer />
    )
  }
}

const SwitchNavigator = createSwitchNavigator({
  LoginScreen : {screen:LoginScreen} , 
  DrawerNavigator : {screen:DrawerNavigator}
})

const AppContainer = createAppContainer (SwitchNavigator)