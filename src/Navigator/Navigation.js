import React, { Component } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import Home from '../screen/Home'
import HomeDetail from '../screen/HomeDetail'
import ChatLists from '../screen/ChatLists'
import ChatTwo from '../screen/ChatTwo'
import NewsLists from '../screen/NewsLists';
import EditProfile from '../screen/EditProfile';
import Auth from '../screen/Auth'
import Signup from '../screen/Signup'
import Signin from '../screen/Signin'
import Talk from '../screen/Talk'
import CustumTalk from '../screen/CustumTalk'
import Modal from '../component/modal'

const StackHome = createStackNavigator();
function HomeStack(){
  return(
    <StackHome.Navigator initialRouteName="Home">
      <StackHome.Screen name="Home" component={Home} options={navBarOption}/>
      <StackHome.Screen name="HomeDetail" component={HomeDetail} options={navBarOption} />
      <StackHome.Screen name="EditProfile" component={EditProfile} options={navBarOption} />
    </StackHome.Navigator>
  )
}

const StackNews = createStackNavigator();
function NewsStack(){
  return(
    <StackNews.Navigator initialRouteName="News">
      <StackNews.Screen name="News" component={NewsLists} options={navBarOption}/>
      <StackNews.Screen name="Modal" component={Modal} options={navBarOption}/>
    </StackNews.Navigator>
  )
}

const StackChat = createStackNavigator();
function ChatStack(){
  return(
    <StackChat.Navigator initialRouteName="ChatLists">
      <StackChat.Screen name="ChatLists" component={ChatLists} options={navBarOption}/>
      <StackChat.Screen name="ChatDetail" component={ChatTwo} options={navBarOption}/>
    </StackChat.Navigator>
  )
}

const StackTalk = createStackNavigator();
function TalkStack(){
  return(
    <StackTalk.Navigator initialRouteName="Talk">
      <StackTalk.Screen name="Talk" component={Talk} options={navBarOption} />
      <StackTalk.Screen name="CustumTalk" component={CustumTalk} options={navBarOption} />
    </StackTalk.Navigator>
  )
}

const Tab = createBottomTabNavigator();
const navBarOption = () =>({
  headerShown: true
})
const falseBar = () =>({
  headerShown : false
})

const Navi = () =>{
        return(
            <Tab.Navigator
            initialRouteName="Chat"
            tabBarOptions={{
                style : {
                    justifyContent:'center',
                    paddingVertical:10,
                    backgroundColor:'black',
                    elevation:2,
                },
            }}
            screenOptions={({ route }) => ({
                tabBarIcon:  ({color}) =>{
                let iconName;

                if(route.name === 'Auth'){
                    iconName = 'tumblr'
                }else if( route.name === 'News'){
                    iconName = 'bookmark'
                }else if(route.name === 'Chat'){
                    iconName = 'user'
                }else if(route.name === 'Talk'){
                    iconName = 'bell'
                }
                else{
                    iconName = 'home'
                }

                return <FontAwesome name={iconName} size={30} color={color} />
                }
            })}
            tabBarOptions={{
                activeTintColor:'tomato',
                inactiveTintColor:'gray',
                style:{
                backgroundColor:'#ccc'
                }
            }}
            >

              <Tab.Screen name="News" component={NewsStack}/>
              <Tab.Screen name="Chat" component={ChatStack}/>
              <Tab.Screen name="Talk" component={TalkStack}/>
              <Tab.Screen name="Home" component={HomeStack}/>
            </Tab.Navigator>
        )
  }



  const StackAuth = createStackNavigator();
  export default class AuthStack extends Component{
    render() {
    return(
      <StackAuth.Navigator>
        <StackAuth.Screen name="Auth" component={Auth} options={falseBar} />
        <StackAuth.Screen name="Signin" component={Signin} options={navBarOption} />
        <StackAuth.Screen name="Signup" component={Signup} options={navBarOption} />
        <StackAuth.Screen name="Navi" component={Navi} options={falseBar} />
        {/* Except Facebok and Google login */}
      </StackAuth.Navigator>
     )
    }
  }

/*

export default class Navi extends Component{
  render(){
      return(
          <Tab.Navigator
          initialRouteName="Auth"
          tabBarOptions={{
              style : {
                  height:65,
                  justifyContent:'center',
                  paddingVertical:20,
                  backgroundColor:'#ccc',
                  elevation:2
              },
          }}
          screenOptions={({ route }) => ({
              tabBarIcon:  ({color}) =>{
              let iconName;

              if(route.name === 'Auth'){
                  iconName = 'tumblr'
              }else if( route.name === 'News'){
                  iconName = 'bookmark'
              }else if(route.name === 'Chat'){
                  iconName = 'user'
              }
              else{
                  iconName = 'home'
              }

              return <FontAwesome name={iconName} size={30} color={color} />
              }
          })}
          tabBarOptions={{
              activeTintColor:'tomato',
              inactiveTintColor:'gray',
              style:{
              backgroundColor:'lightblue'
              }
          }}
          >
              <Tab.Screen name="Auth" component={AuthStack}/>
              <Tab.Screen name="Chat" component={ChatStack}/>
              <Tab.Screen name="News" component={NewsLists}/>
              <Tab.Screen name="Home" component={HomeStack}/>
          </Tab.Navigator>
      )
  }
}

*/
