import React, { useState,useLayoutEffect } from 'react'
import {View,Text,Button,TouchableOpacity,StyleSheet, KeyboardAvoidingView} from 'react-native'
import * as Animatable from 'react-native-animatable';
import {LinearGradient} from 'expo-linear-gradient';
import FontAwsome from 'react-native-vector-icons/FontAwesome'
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons'
import { Input } from 'react-native-elements';
import {SafeAreaView} from 'react-native'
import {auth} from '../firebase/db'

const Signup = ({navigation}) =>{

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [name,setName] = useState('')
  const register = () =>{
       auth
       .createUserWithEmailAndPassword(email,password)
       .then((authUser) =>{
         authUser.user.updateProfile({
           displayName: name
         })
       })
       .catch((error) => alert(error.message))
  }

  useLayoutEffect(() =>{
    navigation.setOptions({
      headerBackTitle: 'Back'
    })
  },[navigation])

    return (
        <View style={styles.container}>
          <View style={{flex:0.1}}>
          </View>
            <Animatable.View style={styles.inputContainer}
                             animation="bounceInLeft"
                             duration={1500}>

              <View>
                <View style={styles.signupWidth}>
                  <View>
                    <Input type="text"
                    leftIcon={
                      <FontAwsome name='user-plus'size={24} color='black' />
                    }
                    inputContainerStyle={{
                    borderBottomColor:'black',
                    borderBottomWidth:2,
                    marginBottom:5,
                    width:300
                    }}
                    label='Name'
                    labelStyle={{
                    color:'black',
                    }}
                    value={name}
                    onChangeText={(text) => setName(text)}
                    />
                  </View>
                  <View>
                    <Input type="email"
                    leftIcon={
                    <FontAwsome name='user'size={24} color='black' />
                    }
                    inputContainerStyle={{
                    borderBottomColor:'black',
                    borderBottomWidth:2,
                    marginBottom:5,
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
                    <Input secureTextEntry={true}
                    type="text"
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
                    />
                 {/* <Animatable.View animation="fadeInLeft" duration={500} style={{marginTop:-20}}>
                    <Text style={{color:'red'}}>Password must be 4 characters long</Text>
                  </Animatable.View>
                */}
                  </View>
                </View>
                <TouchableOpacity style={{alignItems:'center'}}
                    onPress={() => navigation.navigate('Navi')}
                    onPress={register}
                >
                  <LinearGradient
                    colors={['#d1d6eb','#e8e9ed']}
                    style={styles.signupButton}>

                    <Text style={{fontSize:18,color:'darkblue'}}>Sign Up</Text>
                  </LinearGradient>
                </TouchableOpacity>
                <View style={styles.policy}>
                   <Text style={styles.policyText}>You can confirm that your acccept
                   our
                   <Text style={{color:'red'}}>Terms of service and policy</Text></Text>
                </View>
               </View>
                <LinearGradient
                  colors={['#0d6fbf','#060952']}
                  style={styles.FacebookButton}>
                   <View style={{flexDirection:'row'}}>
                     <Text style={styles.signUpText}>Sign Up with Facebook</Text>
                     <FontAwsome name="facebook-official" size={20} style={styles.iconFacebook} />
                   </View>
                </LinearGradient>
                <LinearGradient
                  colors={['#e09999','#db7070']}
                  style={styles.GoogleButton}>
                  <View style={{flexDirection:'row'}}>
                    <Text style={styles.signUpText}>Sign Up with Google</Text>
                    <SimpleLineIcon name="social-google" size={20} style={styles.iconGoogle} />
                  </View>
                </LinearGradient>
                <View>
                  <TouchableOpacity>
                    <Button
                    onPress={() => navigation.navigate('Signin')}
                    style={{fontSize:18}} title="You have an account? Sign in here." />
                  </TouchableOpacity>
                </View>
            </Animatable.View>
        </View>
    )
};

export default Signup


const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'lightskyblue'
  },
  inputContainer:{
    flex:1,
    backgroundColor:'white',
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    paddingVertical:0,
    justifyContent:'center',
    alignItems:'center'
  },
  signupWidth:{
    padding:30,
    borderRadius:20,
    width:'100%',
    marginBottom:0
  },
  signupButton:{
    backgroundColor:'blue',
    width:'90%',
    height:40,
    borderRadius:20,
    justifyContent:'center',
    alignItems:'center',
    marginBottom:0
  },
  policy:{
    alignItems:'center',
    width:370
  },
  policyText:{
    fontWeight:'bold',
    marginTop:10,
    textAlign:'center'
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
  signUpText:{
    fontSize:18,
    color:'white'
  }
})