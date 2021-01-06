import React,{Component} from 'react'
import {Text,View,KeyboardAvoidingView,TextInput,TouchableOpacity} from 'react-native'
import db from '../config'
import firebase from 'firebase';
import MyHeader from '../components/MyHeader'

export default class RequestScreen extends Component{
     constructor(){
         super()
         this.state={
            userId : firebase.auth().currentUser.email,
            item: '',
            reason: ''
        }
     }

     createUniqueId=()=>{
         return Math.random().toString(36).substring(7);
     }

     createRequest=()=>{
        var userId = this.state.userId
        var uniqueId = this.createUniqueId()
        db.collection('requested_items').add({
            'user_id':userId,
            'item_name':this.state.item,
            'reason':this.state.reason,
            'request_id':uniqueId
        })

        this.setState({
            item:'',
            reason: ''
        })
        return alert("Request Has been Made")
     }

    render(){
        return(
            <View style = {{flex: 1}}>
               <MyHeader title = "Request Books"/>
               <KeyboardAvoidingView>

                    <View>
                        <TextInput placeholder = "Item" onChangeText = {(text)=>{this.setState({item: text})}} value = {this.state.item}/>
                        <TextInput placeholder = "Why Do You want this Item" multiline numberOfLines = {8} onChangeText = {(text)=>{this.setState({reason: text})}} value = {this.state.reason}/>
                    </View>

                    <View>
                        <TouchableOpacity onPress={()=>{this.createRequest()}}><Text>Request</Text></TouchableOpacity>
                    </View>

               </KeyboardAvoidingView>
            </View>
        )
    }
}
