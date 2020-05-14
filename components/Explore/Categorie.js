import React from 'react';
import { Text, View ,Image, StyleSheet} from 'react-native';

function Categorie({name, imageUri}) {
  return (

     <View style= {{height:130,width:130, marginLeft:20,borderWidth:0.5, borderColor:"#dddddd",}}>
    <View style= {{flex:2}}> 
    <Image source={imageUri} 
    style={{flex:1, width:null,height:null, resizeMode:"cover"}} />
    </View>
    <View style= {{flex:1,paddingLeft:10,paddingTop:10}}>
  <Text>{name}</Text>

    </View>

</View>


  );
}
const styles =StyleSheet.create({
  container:{
    flexDirection:"row"
  }
})

export default Categorie;

