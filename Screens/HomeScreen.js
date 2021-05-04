import React, { Component } from "react";
import {
    TouchableOpacity,View,Text, FlatList
  } from "react-native";
  import db from "../config"
  export default class Home extends React.Component{
      constructor(){
          super()
          this.state={
              ContactList:[],
              Search:""
          }
      }
      GetContact=async()=>{
          console.log("getContact")
          const ref= await db.collection("users").get()
          ref.docs.map((doc)=>{
              this.setState({
                  ContactList:[...this.state.ContactList,doc.data()]
              })
          })
          console.log("this.ContactList"+this.state.ContactList)
      }
      /*componentDidMount=async()=>{
          
        const ref= await db.collection("users").get()
        if (ref.docs.length) {
            console.log("docempty")
        }
        else{

        
        ref.docs.map((doc)=>{
            this.setState({
                ContactList:[...this.state.ContactList,doc.data()]
            })
        })
        console.log("this.ContactList"+this.state.ContactList)
      }}*/
render(){
    return(
        <FlatList
        data={this.state.ContactList}
        renderItem={(item)=>(
        <View style={{borderBottomWidth:2}}>
            <Text>{" Full Name "+item.first_name + " " + item.last_name}</Text>
            <Text>
                {" City " +item.City}
            </Text>
        </View>
        )}
        keyExtractor={(item,index)=>{index.toString()}}
        />
    )
}

  }