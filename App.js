import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';

import Inbox from "./screens/Inbox";
import Explore from "./screens/Explore";
import Trips from "./screens/Trips";
import Saved from "./screens/Saved";
import Profile from "./screens/Profile";


import {EvilIcons,MaterialCommunityIcons,Feather} from "@expo/vector-icons"

import {createBottomTabNavigator} from "react-navigation"

export default createBottomTabNavigator({
  Explore:{
    screen:Explore,
    navigationOptions:{
      tabBarLabel:"EXPLORE",
      tabBarIcon:({tintColor})=>(
        <EvilIcons name="search" size={24} color="black" />
      )
    }
  },
  Saved:{
    screen:Saved,
    navigationOptions:{
      tabBarLabel:"SAVED",
      tabBarIcon:({tintColor})=>(
        <EvilIcons name="heart" size={24} color="black" />
      )
    }

  },
  Trips:{
    screen:Trips,
    navigationOptions:{
      tabBarLabel:"TRIPS",
      tabBarIcon:({tintColor})=>(
        <Image source={require("./assets/airbnb.png")}style= {{height:30,width:30 ,tintColor:tintColor}} />
      )
    }
  },
  Inbox:{
    screen:Inbox,
    navigationOptions:{
      tabBarLabel:"INBOX",
      tabBarIcon:({tintColor})=>(
        <Feather name="message-square" size={20} color="black" />
      )
    }

  },
  Profile:{
    screen:Profile,
    navigationOptions:{
      tabBarLabel:"PROFILE",
      tabBarIcon:({tintColor})=>(
        <MaterialCommunityIcons name="account-outline" size={24} color="black" />
      )
    }
  },
},{
  tabBarOptions:{
    activeTintColor:"red",
    inactiveTintColor:"grey",
    style:{
      backgroundColor:"white",
      borderTopWidth:0,
      shadowOffset:{width:5, height:3},
      shadowColor:"black",
      shadowOpacity: 0.5,
      elevation:5
    }

  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
