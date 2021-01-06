import React,{Component}from 'react';
import {View,Text,TextInput,Modal,KeyboardAvoidingView,StyleSheet,TouchableOpacity,Alert,ScrollView} from 'react-native';
import{DrawerItems} from 'react-navigation-drawer'
import db from '../config';
import firebase from 'firebase';

export default class SideBarMenu extends Component{

    render(){
        return(
            <View>
                
                <View>
                    <DrawerItems{...this.props} />
                </View>

                <View>
                    <TouchableOpacity onPress = {()=>{this.props.navigation.navigate('LoginScreen'), firebase.auth().signOut()}}>
                        <Text>Log Out</Text>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
}