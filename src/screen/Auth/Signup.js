import React, { useState,useLayoutEffect, Component,useEffect } from 'react'
import {View,Text,Button,TouchableOpacity,StyleSheet, Image,ScrollView,TextInput} from 'react-native'
import * as Animatable from 'react-native-animatable';
import {LinearGradient} from 'expo-linear-gradient';
import FontAwsome from 'react-native-vector-icons/FontAwesome'
import { Input } from 'react-native-elements';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';
import Icon from 'react-native-vector-icons/MaterialIcons'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateName, updateAge,updateIntroduction,updateEmail,
         updatePassword, signup }
        from '../../redux/actions/user'

// picker select npm => later install to select Age from 18 up to 99.
// Age => checkBox
// Change to Const to enable to use SectionMultiSelect


class Signup extends Component{

  render(){

    const onSignUpPress = () =>{
      // if all Inputs are not empty, then an User can Sign Up.
        if(this.props.user.name !== '' && this.props.user.age !== '' &&
           this.props.user.introduction !== '' && this.props.user.email !== '' &&
           this.props.user.password){

            this.props.signup()
        }
        else{
          alert('You have to fill out all inputs')
        }
    }

    // Items of SectionMultiSelect
          const items = [
            // this is the parent or 'item'
            {
              name:'Language You Speak',
              id:0,
              children:[
                {
                  name : 'English',
                  id:'English'
                },
                {
                  name : 'Japanese',
                  id:'Japanese'
                },
                {
                  name : 'Korean',
                  id:'Korean'
                },
                {
                  name : 'Chinese',
                  id:'Chinese'
                },
                {
                  name : 'French',
                  id: 'French'
                },
                {
                  name : 'German',
                  id: 'German'
                },
                {
                  name : 'Spanish',
                  id:'Spanish'
                },
                {
                  name : 'Portugeesu',
                  id:  'Portugeesu'
                },
                {
                  name : 'Russian',
                  id: 'Russian'
                }
              ]
            },
            {
              name:"Language You're Learning",
              id:10,
              children:[
                {
                  name : 'English',
                  id:11
                },
                {
                  name : 'Japanese',
                  id:12
                },
                {
                  name : 'Korean',
                  id:13
                },
                {
                  name : 'Chinese',
                  id:14
                },
                {
                  name : 'French',
                  id:15
                },
                {
                  name : 'German',
                  id:16
                },
                {
                  name : 'Spanish',
                  id:17
                },
                {
                  name : 'Portugeesu',
                  id:18
                },
                {
                  name : 'Russian',
                  id:19
                }
              ]
            },
          ];

    return (
        <ScrollView style={styles.container}>
          <View style={styles.content}>
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
                        value={this.props.user.name}
                        onChangeText={input => this.props.updateName(input)}
                        />
                    </View>
                    <View>
                        <Input
                        type="number"
                        leftIcon={
                          <FontAwsome name='user-plus'size={24} color='black' />
                        }
                        inputContainerStyle={{
                        borderBottomColor:'black',
                        borderBottomWidth:2,
                        marginBottom:5,
                        width:300
                        }}
                        label='Age'
                        labelStyle={{
                        color:'black',
                        }}
                        maxLength="2"
                        value={this.props.user.age}
                        onChangeText={input => this.props.updateAge(input)}
                        />
                    </View>
                    <View>
                    {/*  <SectionedMultiSelect
                            colors={{
                              primary:'#526982',
                              subText:'black',
                              chipColor:'black',
                              success:'#526982'
                            }}
                            items={items}
                            IconRenderer={Icon}
                            uniqueKey="id"
                            subKey="children"
                            selectText="+ Language You Speak"
                            showDropDowns={true}
                            readOnlyHeadings={true}
                            onSelectedItemsChange={onSelectedItemsChange}
                            selectedItems={selectedItems}
                          />*/}
                    </View>
                    <View style={{borderWidth:2,borderColor:'#939ac4',
                        marginTop:20}}>
                      <TextInput
                          placeholder="Introduce Yourself"
                          numberOfLines = {200}
                          style={{fontSize:10,marginTop:0}}
                          multiline={true}
                          style={{height:350,fontSize:20}}
                          value={this.props.user.introduction}
                          onChangeText={input => this.props.updateIntroduction(input)}
                        />
                    </View>
                    <View style={{marginTop:15}}>
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
                          value={this.props.user.email}
                          onChangeText={input => this.props.updateEmail(input)}
                          />
                    </View>
                    <View>
                      <Input secureTextEntry={true}
                      type="password"
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
                  {/* <Animatable.View animation="fadeInLeft" duration={500} style={{marginTop:-20}}>
                      <Text style={{color:'red'}}>Password must be 4 characters long</Text>
                    </Animatable.View>
                  */}
                  </View>
                </View>
                <TouchableOpacity style={{alignItems:'center'}}
                     onPress={onSignUpPress}
                    // onPress={() => this.props.navigation.navigate('Navi')}
                >
                    <LinearGradient
                      colors={['#d1d6eb','#e8e9ed']}
                      style={styles.signupButton}>

                      <Text style={{fontSize:18,color:'darkblue'}}>Sign Up</Text>
                    </LinearGradient>
                </TouchableOpacity>
                <View style={styles.policy}>
                   <Text style={styles.policyText}>You can confirm that your acccept our
                   <Text style={{color:'red'}}>Terms of service and policy</Text></Text>
                </View>
               </View>
                <View style={{marginBottom:30}}>
                  <TouchableOpacity>
                    <Button
                    onPress={() => this.props.navigation.navigate('Auth')}
                    style={{fontSize:18}} title="You have an account? Sign in here." />
                  </TouchableOpacity>
                </View>
            </Animatable.View>
          </View>
        </ScrollView>
      )
    }
};

const mapDispatchToProps = (dispatch) =>{
  return bindActionCreators({
    updateName,
    updateAge,
    updateIntroduction,
    updateEmail,
    updatePassword,
    signup
   },dispatch)
}

const mapStateToProps = (state) =>{
  return{
    user: state.user
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Signup)





const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#ccc'
  },
  content:{
    marginTop:30
  },
  inputContainer:{
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    paddingVertical:0,
    justifyContent:'center',
    alignItems:'center'
  },
  profilePicture:{
    width:100,
    height:100,
    borderRadius:50
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

