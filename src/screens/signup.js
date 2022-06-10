import { View, Text, SafeAreaView, Image, StyleSheet,TextInput,Pressable } from 'react-native'
import React from 'react'
import Button from '../component/button';

export default function Signup() {
  return (
   <SafeAreaView style={{flex:1}}>
     <View>
          
     </View>
      <View style={{paddingVertical:25, paddingHorizontal:16}}>
        <TextInput
            style={styles.input}
            placeholder="Email"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
          />
      </View>
       <View style={{ justifyContent:'flex-end', alignSelf:'center'}}>
          <Button title="Sign Up" customStyles={{alignSelf:'center',marginTop:60}}/>
       </View>
       <View style={styles.account}>
              <Pressable>
                <Text> Already Have an account <Text style={{color:'green',fontWeight:"bold",}}>Sign in</Text></Text>
              </Pressable>
       </View>
   </SafeAreaView>
   
  )
}

const styles = StyleSheet.create({
      signImage:{
        width:'100%',
        height:400,
        alignSelf:'center'         
    },

    title:{
        textAlign:'center',
        fontSize:18,
        fontWeight:'bold',
        paddingTop:20,
    },
    input:{
      height:48,
      borderBottomWidth:1,
      borderBottomColor:"#ccc",
      marginTop:25,
    },
    account:{
      flex:1,
      justifyContent:'flex-end',
      alignItems:'center',
      paddingBottom:40,
    }
});

