import React, { useState, useEffect } from 'react'
import {View,Text,Button,TouchableOpacity,StyleSheet} from 'react-native'
import * as Animatable from 'react-native-animatable';
import {LinearGradient} from 'expo-linear-gradient';
import FontAwsome from 'react-native-vector-icons/FontAwesome'
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons'
import { Input } from 'react-native-elements';
import {auth} from '../firebase/db'
import { Facebook } from "expo";

const Auth = ({navigation}) =>{

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  useEffect(() =>{
   const unsubscribe = auth.onAuthStateChanged((authUser) =>{
      if(authUser){
        navigation.replace('Navi')
      }
    });

    return unsubscribe
  },[])

  const signIn = () =>{
    auth.signInWithEmailAndPassword(email,password).catch((error) => alert(error))
  }



    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={{fontSize:30}}>LOGO</Text>
            </View>
            <Animatable.View style={styles.inputContainer}
                             animation="fadeInUpBig">
                <View>
                  <View style={styles.signinWidth}>
                    <View>
                      <Input
                      leftIcon={
                      <FontAwsome name='user'size={24} color='black' />
                      }
                        inputContainerStyle={{
                        borderBottomColor:'black',
                        borderBottomWidth:2,
                        marginBottom:13,
                        width:300
                      }}
                        label='EMAIL'
                        labelStyle={{
                        color:'black',
                      }}
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                      />
                    </View>
                    <View>
                      <Input
                      secureTextEntry={true}
                      leftIcon={{ type: 'font-awesome', name: 'lock' }}
                      inputContainerStyle={{
                      borderBottomColor:'black',
                      borderBottomWidth:2,
                      width:300
                      }}
                      label='PASSWORD'
                      labelStyle={{
                      color:'black'
                      }}
                      value={password}
                      onChangeText={(text) => setPassword(text)}
                      onSubmitEditing={signIn}
                      />
                 {/*<Animatable.View animation="fadeInLeft" duration={500} style={{marginTop:-20}}>
                    <Text style={{color:'red'}}>Password must be 4 characters long</Text>
                  </Animatable.View>
                 */}
                  </View>
                 </View>
                    <TouchableOpacity style={styles.signInButton}
                                      onPress={signIn}
                                      >
                       <LinearGradient
                          colors={['#d1d6eb','#e8e9ed']}
                          style={styles.signInLinear}>
                         <Text style={{fontSize:18,color:'darkblue'}}>Sign In</Text>
                       </LinearGradient>
                    </TouchableOpacity>
                      <View style={styles.signInButton}>
                       <Text style={styles.forgotpassword}>Forgot Password?</Text>
                      </View>
                 </View>
              <LinearGradient
                  colors={['#0d6fbf','#060952']}
                  style={styles.FacebookButton}>
                   <View style={{flexDirection:'row'}}>
                     <Text style={styles.signInText}>Sign in with Facebook</Text>
                     <FontAwsome name="facebook-official" size={20} style={styles.iconFacebook}/>
                   </View>
              </LinearGradient>

              <LinearGradient
                  colors={['#e09999','#db7070']}
                  style={styles.GoogleButton}>
                  <View style={{flexDirection:'row'}}>
                    <Text style={styles.signInText}>Sign in with Google</Text>
                    <SimpleLineIcon name="social-google" size={20} style={styles.iconGoogle} />
                  </View>
              </LinearGradient>

              <View>
                <TouchableOpacity>
                    <Button
                    onPress={() => navigation.navigate('Signup')}
                    style={{fontSize:18}} title="Click here to create your account" />
                </TouchableOpacity>
              </View>
            </Animatable.View>
        </View>
    )
};
export default Auth


const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'lightskyblue'
  },
  header:{
    flex:0.5,
    justifyContent:'center',
    alignItems:'center'
  },
  inputContainer:{
    flex:1,
    backgroundColor:'white',
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    paddingVertical:100,
    justifyContent:'center',
    alignItems:'center'
  },
  signinWidth:{
    padding:30,
    borderRadius:20,
    width:'100%',
    marginBottom:10
  },
  signInButton:{
    alignItems:'center'
  },
  signInLinear:{
    backgroundColor:'blue',
    width:'90%',
    height:50,
    borderRadius:20,
    justifyContent:'center',
    alignItems:'center',
    marginBottom:10
  },
  forgotpassword:{
    fontWeight:'bold',
    marginTop:10
  },
  FacebookButton:{
    backgroundColor:'#ddd',
    width:'80%',
    height:50,
    borderRadius:20,
    justifyContent:'center',
    alignItems:'center',
    marginTop:20,
    marginBottom:10
  },
  GoogleButton:{
    backgroundColor:'#ddd',
    width:'80%',
    height:50,
    borderRadius:20,
    justifyContent:'center',
    alignItems:'center',
    marginTop:5,
  },
  iconFacebook:{
    paddingLeft:20,
    color:'white'
  },
  iconGoogle:{
    paddingLeft:20,
    color:'red'
  },
  signInText:{
    fontSize:18,
    color:'white'
  }
})

