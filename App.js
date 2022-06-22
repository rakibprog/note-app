
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { NavigationContainer,DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/home';
import Signin from './src/screens/signin';
import Signup from './src/screens/signup';
import Create from './src/screens/create';
import Edit from './src/screens/edit';
import { initializeApp } from "firebase/app";
import { getAuth,signOut,onAuthStateChanged} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import FlashMessage from "react-native-flash-message";
import { useEffect, useState } from 'react';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCb0musrqWAi6u3yuQpbkBIvpcq-ifvtXo",
  authDomain: "note-app-f9e30.firebaseapp.com",
  projectId: "note-app-f9e30",
  storageBucket: "note-app-f9e30.appspot.com",
  messagingSenderId: "658466109116",
  appId: "1:658466109116:web:a4d8906362d657946582b9"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
const applyTheme = {
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    background:'#fff',
  }
}
const Stack = createNativeStackNavigator();

export default function App() {
  [loading,setLoading] = useState(true);
  [user,setUser] = useState(null); // not authenticated 
 
  useEffect(()=>{
      const authSubscription =  onAuthStateChanged(auth,(user)=>{
          if(user){
            setUser(user);
            setLoading(false);
          }else{
            setUser(null);
            setLoading(false);
          }
          return authSubscription;
      });
  },[]);
 
  if(loading){
      return(
         <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
             <ActivityIndicator size="small" color="blue" />
         </View>
      )
  }
  return (
      <NavigationContainer theme={applyTheme}>
            <Stack.Navigator>
              {user ? (<>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Edit" component={Edit}/>
                <Stack.Screen name="Create" component={Create}/>
                  </>) :            
                (<>
                  <Stack.Screen name="Signin" component={Signin} options={{headerShown:false}}/>
                  <Stack.Screen name="Signup" component={Signup} />
              </>)}   
            </Stack.Navigator>
            <FlashMessage position="center"/> 
      </NavigationContainer>
      
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
