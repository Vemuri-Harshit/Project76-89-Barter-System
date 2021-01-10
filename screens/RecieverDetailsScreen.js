import React ,{Component} from 'react';
import {View,Text,StyleSheet,TouchableOpacity,ScrollView} from 'react-native';
import{Card,Header,Icon} from 'react-native-elements';
import firebase from 'firebase';
import MyHeader from '../components/MyHeader'

import db from '../config.js';

export default class RecieverDetailsScreen extends Component{
  constructor(props){
    super(props);
    this.state={
      userId          : firebase.auth().currentUser.email,
      userName        : "",
      recieverId      : this.props.navigation.getParam('details')["user_id"],
      requestId       : this.props.navigation.getParam('details')["request_id"],
      itemName        : this.props.navigation.getParam('details')["item_name"],
      reason     : this.props.navigation.getParam('details')["reason"],
      recieverName    : '',
      recieverContact : '',
      recieverAddress : '',
      recieverRequestDocId : '',
      disabled: false
    }
    console.log(this.state.itemName, this.state.reason)
  }



  getRecieverDetails(){
    db.collection('users').where('email_id','==',this.state.recieverId).get()
    .then(snapshot=>{
      snapshot.forEach(doc=>{
        this.setState({
          recieverName    : doc.data().first_name + " " + doc.data().last_name,
          recieverContact : doc.data().contact,
          recieverAddress : doc.data().address,
        })
      })
    });

    db.collection('requested_items').where('request_id','==',this.state.requestId).get()
    .then(snapshot=>{
      snapshot.forEach(doc => {
        this.setState({recieverRequestDocId:doc.id})
     })
  })}


  getUserDetails=(userId)=>{
    db.collection("users").where('email_id','==', userId).get()
    .then((snapshot)=>{
      snapshot.forEach((doc) => {
        this.setState({
          userName  :doc.data().first_name + " " + doc.data().last_name
        })
      })
    })
  }

  updateItemStatus=()=>{
    db.collection('donated_items').add({
      "item_name"           : this.state.itemName,
      "request_id"          : this.state.requestId,
      "requested_by"        : this.state.recieverName,
      "donor_id"            : this.state.userId,
      "request_status"      :  "Donor Interested"
    })
  }

  addNotification=()=>{
    var message = this.state.userName + " has shown interest in donating your item"
    db.collection("all_notifications").add({
      "targeted_user_id" : this.state.recieverId,
      "donor_id"         : this.state.userId,
      "request_id"       : this.state.requestId,
      "item_name"        : this.state.itemName,
      "date"             : firebase.firestore.FieldValue.serverTimestamp(),
      "notification_status" : "unread",
      "message"          : message
    })
  }

  componentDidMount(){
    this.getRecieverDetails()
    this.getUserDetails(this.state.userId)
  }


    render(){
      return(
        <ScrollView style={styles.container}>
          <View style={{flex:0.1}}>
            <MyHeader title ="Donate Items"  navigation ={this.props.navigation}/>
          </View>
          <View style={{flex:0.3}}>
            <Card title={"Item Information"} titleStyle= {{fontSize : 20}}>
              
              <Card >
                <Text style={{fontWeight:'bold'}}>Name : {this.state.itemName}</Text>
              </Card>

              <Card>
                <Text style={{fontWeight:'bold'}}>Reason : {this.state.reason}</Text>
              </Card>

            </Card>
          </View>

          <View >
            <Card title={"Reciever Information"} titleStyle= {{fontSize : 20}}>

              <Card>
                <Text style={{fontWeight:'bold'}}>Name: {this.state.recieverName}</Text>
              </Card>

              <Card>
                <Text style={{fontWeight:'bold'}}>Contact: {this.state.recieverContact}</Text>
              </Card>

              <Card>
                <Text style={{fontWeight:'bold'}}>Address: {this.state.recieverAddress}</Text>
              </Card>

            </Card>
          </View>

          <View style={styles.buttonContainer}>
          {
              this.state.recieverId !== this.state.userId
              ?(
                <TouchableOpacity
                    style={styles.button}
                    disabled = {this.state.disabled}
                    onPress={()=>{
                      this.updateItemStatus()
                      this.addNotification()
                      this.props.navigation.navigate('MyDonations')
                      this.setState({disabled: true})
                    }}>
                  <Text>I want to Donate</Text>
                </TouchableOpacity>
              )
              : null
            }
          </View>
        </ScrollView>
      )
    }

}


const styles = StyleSheet.create({
  container: {
  //  flex:1,
  },
  buttonContainer : {
    flex:0.3,
    justifyContent:'center',
    alignItems:'center'
  },
  button:{
    width:200,
    height:50,
    justifyContent:'center',
    alignItems : 'center',
    borderRadius: 10,
    backgroundColor: 'orange',
    shadowColor: "#000",
    shadowOffset: {
       width: 0,
       height: 8
     },
    elevation : 16
  }
})