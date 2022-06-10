import { View, Text, SafeAreaView, Image, StyleSheet,TextInput,Pressable } from 'react-native'
import React from 'react'
import Button from '../component/button';

export default function Signin({navigation}) {
  return (
   <SafeAreaView style={{flex:1}}>
     <View>
          <Image
              style={styles.signImage}
              source={{
                uri: 'https://i.ibb.co/PGZRHP3/login.png'
              }}
            />
          <Text style={styles.title}>Never forgot your notes</Text>
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
          <Button title="Login" customStyles={{alignSelf:'center',marginTop:60}}/>
       </View>
       <View style={styles.account}>
              <Pressable onPress={()=>{navigation.navigate('Signup')}}>
                <Text>Don't have an account <Text style={{color:'green',fontWeight:"bold",}}>Sign Up</Text></Text>
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

