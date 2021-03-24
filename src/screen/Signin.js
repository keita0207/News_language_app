import React from 'react'
import {View,Text,SafeAreaView,Dimensions,Button,KeyboardAvoidingView, Platform} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import {LinearGradient} from 'expo-linear-gradient';
import { TouchableOpacity } from 'react-native-gesture-handler';


const Login = ({navigation}) =>{

  const input = React.createRef()
  const [data,setData] = React.useState({
    email:'',
    password: '',
    check_textInputChange: false,
    isValidUser: true,
    isValidPassword: false
  })

  const textInputChange = (value) =>{
    if(value.length !== 0){
      setData({
        ...data,
        email:value,
        check_textInputChange: true
      })
    }
    else{
      setData({
        ...data,
        email:value,
        check_textInputChange: false
      })
    }
  }


    return (
        <SafeAreaView>
           <KeyboardAvoidingView style={{height:'100%',width:'100%'}}
                                 behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
           

            <View style={{flex:1.4,backgroundColor:'lightskyblue'}}>
              <View style={{flex:0.4,justifyContent:'center',alignItems:'center'}}>
              </View>

              <Animatable.View style={{flex:1,backgroundColor:'white',borderTopLeftRadius:30,borderTopRightRadius:30,
                             paddingVertical:100,justifyContent:'center',alignItems:'center'}}
                             animation="bounceInLeft"
                             duration={1500}>
               <View>
                  <View style={{backgroundColor:'#ced3d6',padding:30,borderRadius:20,width:'100%',marginBottom:10}}>

                <View>
                  <Input ref={input}
                    leftIcon={
                    <Icon name='user'size={24} color='black' />
                  }
                    inputContainerStyle={{
                    borderBottomColor:'black',
                    marginBottom:13,
                    width:'100%'
                  }}
                    label='EMAIL'
                    labelStyle={{
                    color:'black',
                  }}
                  />
                </View>
                <View>
                  <Input secureTextEntry={true}
                         leftIcon={{ type: 'font-awesome', name: 'lock' }}
                         inputContainerStyle={{
                         borderBottomColor:'black',
                         width:'100%'
                  }}
                         label='PASSWORD'
                         labelStyle={{
                         color:'black'
                        }}
                  />
                  <Animatable.View animation="fadeInLeft" duration={500} style={{marginTop:-20}}>
                    <Text style={{color:'red'}}>Password must be 4 characters long</Text>
                  </Animatable.View>
                  <Text style={{fontWeight:'bold',marginTop:10}}>Forgot Password?</Text>
                </View>
               </View>
               <View style={{alignItems:'center'}}>
                 <TouchableOpacity onPress={() => navigation.navigate('Navi')}>
                   <LinearGradient
                    colors={['#34c3eb','#060952']}
                    style={{backgroundColor:'blue',width:300,
                    height:50,borderRadius:20,justifyContent:'center',alignItems:'center',marginBottom:10}}>
                    <Text style={{color:'white',fontSize:18}}>Sign In</Text>
                   </LinearGradient>
                 </TouchableOpacity>

              </View>
             </View>
            </Animatable.View>
           </View>
          </KeyboardAvoidingView>
        </SafeAreaView>
    )
};

export default Login




