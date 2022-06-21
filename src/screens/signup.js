import { View, Text, SafeAreaView, Image, StyleSheet,TextInput,Pressable } from 'react-native'
import React, { useState } from 'react'
import Button from '../component/button';
import Input from '../component/input';
 import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


const auth = getAuth();
const genderOption =['Male','Female'];

export default function Signup({navigation}) {
      const [gender,setGender] = useState(null);
    	const [email,setEmail] = useState('');
      console.log(email);
      const [password,setPass] = useState('');
      const [age,setAge]  = useState('');
      const [name,setName] = useState('');
      const signUp = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              // Signed in 
              const user = userCredential.user;
              // ...
              console.log(user);
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              // ..
              console.log(errorMessage);
            }); 
      }
     
  return (
   <SafeAreaView style={{flex:1, padding:20,}}>
     <View>
          
     </View>
      <View style={{paddingVertical:25, paddingHorizontal:16}}>
        <Input placeholder="Email" onChangeText={(text)=>setEmail(text)}/>
        <Input placeholder="Password" secureTextEntry onChangeText={(text)=>setPass(text)}/>
        <Input placeholder="Full Name" onChangeText={(text)=>setName(text)}/>
        <Input placeholder="Age" onChangeText={(text)=>setAge(text)}/>
      </View>
      <View style={{marginBottom:10}}>
          <Text> Select Gender</Text>
      </View>
        {genderOption.map((option)=>{
          const selected  = option === gender;
          return(
            <Pressable onPress={()=>setGender(option)} key={option} style={styles.radioContainer}>
              <View style={[styles.outerCircle, selected && styles.selectedOuterCircle]}>
                  <View style={[styles.innerCircle,selected && styles.selectedInnerCircle]}></View>
              </View>
              <Text style={styles.radioText} >{option}</Text>
            </Pressable>
          )
        })}
       <View style={{ justifyContent:'flex-end', alignSelf:'center'}}>
          <Button onPress={signUp} title="Sign Up" customStyles={{alignSelf:'center',marginTop:60}}/>
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
    },
    radioContainer: {
      flexDirection:"row",
      alignItems:"center",
      marginBottom:10,
    },
    outerCircle:{
      width:30,
      height:30,
      borderWidth:1,
      borderRadius:15,
      color:"#cfcfcf",
      justifyContent:'center',
      alignItems:'center',
    },
    innerCircle:{
      width:15,
      height:15,
      borderWidth:1,
      borderRadius:15,
      color:"#cfcfcf", 
    },

    radioText:{
      marginLeft:10,
    },
    selectedOuterCircle:{
       borderColor:'orange',
    },
    selectedInnerCircle:{
      backgroundColor:'orange',
      borderColor:'orange',
    }

});

