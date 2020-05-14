import React from 'react';
import { StyleSheet,Dimensions, Text,TextInput,Platform,StatusBar, Image, View,SafeAreaView, ScrollView} from 'react-native';
import {EvilIcons} from "@expo/vector-icons"
import Categorie from "../components/Explore/Categorie"

const {height,width} = Dimensions.get('window')
componentWillMount=()=>{
    this.startHeaderHeight=80
    if(Platform.OS == "android") {
        this.startHeaderHeight=100+ statusbar.currentHeight
    }
}
function Explore() {
  return (
    <SafeAreaView style={{flex:1}}>
     <View style ={{flex:1}}>
         <View style ={{height:this.startHeaderHeight, backgroundColor:"white",borderBottomWidth:1, borderBottomColor:"#dddddd"}}>
           <View style={{flexDirection:"row", padding:10,backgroundColor:"white",marginHorizontal:20,shadowOffset:{width:0,height:0},
           shadowColor:"black",
           shadowOpacity:0.2,
           elevation:1,
           marginTop: Platform.OS == "android"? 30:null
        }}>
           <EvilIcons name="search" size={24} color="black" />
           <TextInput
           underlineColorAndroid="transparent"
           placeholder="try Ghana"
           placeholderTextColor="grey"
           style={{flex:1,fontWeight:"700",
           backgroundColor:"white"
        }}
           />
           </View>
         </View>
         <ScrollView 
         scrollEventThrottle= {16}
         >
             <View style= {{flex:1, backgroundColor:"white",paddingTop:20}}>
                 <Text style= {{fontSize:24,fontWeight:"700",paddingHorizontal:20}}>
                     what can we help you find, Mimie?
                 </Text>
                 <View style= {{height:130, marginTop:20}}>
                     <ScrollView
                     horizontal={true}
                     showsVerticalScrollIndicator={false}
                     >
                         <Categorie imageUri= {require("../assets/airbnb1.jpg")}
                         name= "Home"
                         /> 
                         <Categorie imageUri= {require("../assets/airbnb2.jpg")}
                         name= "Experiences"
                         /> 
                         <Categorie imageUri= {require("../assets/airbnb3.jpg")}
                         name= "Restaurant"
                         /> 
                     </ScrollView> 
                 </View>
                 <View style={{marginTop:40,paddingHorizontal:20}}>
                       <Text style={{fontSize:24, fontWeight:"700"}}>Introducing Airbnb plus</Text>
                       <Text style= {{fontWeight:"100", marginTop:10}}> A new selection of homes verified for quality & comfort</Text>
                       <View style={{width:width-40, height:200,marginTop:20}}> 
                         <Image
                         style={{flex:1,height:null,width:null,borderRadius:5,borderWidth:1,borderColor:"#dddddd"}}
                          source={require("../assets/home.jpg")}/>
                       </View>
                     </View>
             </View>

         </ScrollView>
     </View>
    </SafeAreaView>
  );
}

export default Explore

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });