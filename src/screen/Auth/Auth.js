import React, { Component } from 'react'
import {View,Text,Button,TouchableOpacity,StyleSheet,Alert} from 'react-native'
import * as Animatable from 'react-native-animatable';
import {LinearGradient} from 'expo-linear-gradient';
import FontAwsome from 'react-native-vector-icons/FontAwesome'
import { Input } from 'react-native-elements';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateEmail, updatePassword, login } from '../../redux/actions/user'

//import { LoginManager, AccessToken } from 'react-native-fbsdk';

class Auth extends Component{

  render(){
    return (
        <View style={styles.container}>
            <View style={styles.header}>
              {/* Insert a Logo or a background Image here */}
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
                        value={this.props.user.email}
                        onChangeText={input => this.props.updateEmail(input)}
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
                      value={this.props.user.password}
                      onChangeText={input => this.props.updatePassword(input)}
                      />
                  </View>
                 </View>
                    <TouchableOpacity style={styles.signInButton}
                                      onPress={this.props.login}
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
              <View>
              <TouchableOpacity>
              <LinearGradient
                  colors={['#0d6fbf','#060952']}
                  style={styles.FacebookButton}>
                   <View style={{flexDirection:'row'}}>
                     <Text style={styles.signInText}>Sign in with Facebook</Text>
                     <FontAwsome name="facebook-official" size={20} style={styles.iconFacebook}/>
                   </View>
              </LinearGradient>
              </TouchableOpacity>
                <TouchableOpacity>
                    <Button
                    onPress={() =>this.props.navigation.navigate('ProfilePic')}
                    style={{fontSize:18}} title="Click here to create your account" />
                </TouchableOpacity>
              </View>
            </Animatable.View>
        </View>
    )
  }
};

const mapDispatchToProps = (dispatch) =>{
  return bindActionCreators({
    updateEmail,
    updatePassword,
    login
   },dispatch)
}

// Access datas from Reducers
const mapStateToProps = (state) =>{
  return{
    user: state.user
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Auth)


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
    width:'75%',
    height:50,
    borderRadius:20,
    justifyContent:'center',
    alignItems:'center',
    marginBottom:10,
    marginHorizontal:20
  },
  forgotpassword:{
    fontWeight:'bold',
    marginTop:10
  },
  FacebookButton:{
    backgroundColor:'#ddd',
    width:'100%',
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
