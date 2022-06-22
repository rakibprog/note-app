import { View, Text, SafeAreaView, Image, StyleSheet,TextInput,Pressable } from 'react-native'
import React, { useState } from 'react'
import Button from '../component/button';
import Input from '../component/input';
import { auth } from './../../App';
import {signInWithEmailAndPassword } from "firebase/auth";


export default function Signin({navigation}) {
  const[email,setEmail] = useState('');
  const[password,setPassword] = useState('');
  const[error,setError] = useState(null);
  const[loading,setLoading] = useState(false);

  const logIn = () =>{
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
       setError(error);
       console.log(error);
    });
  }
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
       <Input placeholder="Email" onChangeText={(text)=> setEmail(text)}/>
        <Input placeholder="Password" onChangeText={(text)=>setPassword(text)} secureTextEntry/>
      </View>
       <View style={{ justifyContent:'flex-end', alignSelf:'center'}}>
          <Button onPress={logIn} title="Login" customStyles={{alignSelf:'center',marginTop:60}}/>
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

