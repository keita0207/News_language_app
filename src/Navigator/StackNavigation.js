import React, { useEffect, Component } from 'react'
import { TouchableOpacity } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import Fontawesome from 'react-native-vector-icons/FontAwesome'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { uploadPost } from '../redux/actions/post'

/* News Scren Starts */
import Modal from '../screen/NewsScreen/modal'
import NewsLists from '../screen/NewsScreen/NewsLists';
import Search from '../screen/SearchNews/Search';
/* News Scren Ends */

/* User Candidate Screen Starts */
import ChatLists from '../screen/FindFriends/ChatLists'
import UserProfile from '../screen/Home/UserProfile'
import UserIntroduce from '../screen/Home/UserIntroduce'
import UserPosts from '../screen/Home/UserPosts'
/* User Candidate Screen Ends */

/* Talk Screen Starts */
import CustumTalk from '../screen/ChatScreen/CustumTalk'
import SearchTalk from '../screen/ChatScreen/SearchTalk'
import EnterChat from '../screen/ChatScreen/EnterChat';
/* Talk Screen Ends */

/* Home Screen Starts */
import Home from '../screen/Home/Home'
import EditProfile from '../screen/Home/EditProfile';
import Introduce from '../screen/Home/Introduce'
import Posts from '../screen/Home/Posts'
import PostsUpload from '../screen/Home/PostsUpload'
import PostCheckout from '../screen/Home/PostCheckout'
import SavedPosts from '../screen/Home/SavedPosts'
import MyPost from '../screen/Home/MyPost'
import Profile from '../screen/Home/Profile'
import Save from '../screen/Home/Save'
import TakingPic from '../screen/Home/TakingPic'
/* Home Screen Ends */

/* Auth Screen Starts */
import Auth from '../screen/Auth/Auth'
/* Auth Screen Ends */

// The Header doesn't show up on the screen.
const navBarOption = () =>({
    headerShown: true
})

// Display News and Search
const StackNews = createStackNavigator();
function NewsStack({navigation,route}){

  useEffect(() =>{
    // Need to change to getFocused Route Name from Route.
    if(route.state && route.state.index > 0){
      navigation.setOptions({tabBarVisible:false})
    }
    else{
      navigation.setOptions({tabBarVisible:true})
    }
  })

  return(
    <StackNews.Navigator>
        <StackNews.Screen name="News" navigation={navigation} component={NewsLists}
          options={{
            headerShown: true,
            headerStyle:{
              backgroundColor:'#04196b',
            }, // Insert Advertisement on the top?
            headerTintColor:'white'
          }}/>
        <StackNews.Screen name="Search" navigation={navigation} component={Search} options={navBarOption}
          options={{
            headerShown:true,
            headerStyle:{
              backgroundColor:'#04196b',
            },
            headerTintColor:'white'
          }}/>
        <StackNews.Screen name="Modal" component={Modal} options={navBarOption}/>
    </StackNews.Navigator>
  )
}


//Display User Chats
const StackChat = createStackNavigator();
function ChatStack({navigation,route}){

  useEffect(() =>{
      // Need to change to getFocused Route Name from Route.
      if(route.state && route.state.index > 0){
        navigation.setOptions({tabBarVisible:false})
      }
      else{
        navigation.setOptions({tabBarVisible:true})
      }
    })
  return(
    <StackChat.Navigator initialRouteName="ChatLists">
        <StackChat.Screen name="ChatLists" component={ChatLists}
          options={{
            headerStyle:{
            backgroundColor: '#04196b'
          },
            headerTintColor:'white'
          }}/>
        <StackTalk.Screen name="EnterChat" component={EnterChat}
          options={{
            headerStyle:{
            backgroundColor: '#04196b'
          },
            headerTintColor:'white'
          }} />
        <StackHome.Screen name="Introduce" component={Introduce} navigation={navigation}
          options={{
            headerStyle:{
            backgroundColor: '#04196b'
          },
            headerTintColor:'white'
        }}/>
        <StackChat.Screen name="UserProfile" component={UserProfile}
              options={{
                headerStyle:{
                backgroundColor: '#04196b'
              },
                headerTintColor:'white'
              }}
        />
        <StackChat.Screen name="UserPosts" component={UserPosts}
              options={{
                headerStyle:{
                backgroundColor: '#04196b'
              },
                headerTintColor:'white'
              }}
        />
        <StackChat.Screen name="UserIntroduce" component={UserIntroduce}
              options={{
                headerStyle:{
                backgroundColor: '#04196b'
              },
                headerTintColor:'white'
        }}/>
    </StackChat.Navigator>
  )
}

// Talk Screen
const StackTalk = createStackNavigator();
function TalkStack({navigation,route}){

  useEffect(() =>{
      if(route.state && route.state.index > 0){　
        // 初期画面を０とすると、navigation.push('')で画面遷移された画面は１となる。
      　// その場合に１の画面は自動的にBottomTabBarがFalseとなり現れなくなる。　　　　　　　　　　　　　　　　　　　　　　　　　
        navigation.setOptions({tabBarVisible:false})
      }
      else{
        navigation.setOptions({tabBarVisible:true})
      }
    })
  return(
    <StackTalk.Navigator initialRouteName="CustumTalk">
        <StackTalk.Screen name="CustumTalk" component={CustumTalk}
          options={{
            headerStyle:{
            backgroundColor: '#04196b'
          },
            headerTintColor:'white'
          }} />
        <StackTalk.Screen name="EnterChat" component={EnterChat}
          options={{
            headerStyle:{
            backgroundColor: '#04196b'
          },
            headerTintColor:'white'
          }}
        />
        <StackTalk.Screen name="SearchTalk" component={SearchTalk} options={navBarOption} />
    </StackTalk.Navigator>
  )
}

// Display Home
const StackHome = createStackNavigator();
class HomeStack extends Component{

  render(){
    return(
      <StackHome.Navigator initialRouteName="Home">
          <StackHome.Screen name="Home" component={Home}
              options={{
                headerStyle:{
                backgroundColor: '#04196b'
              },
                headerTintColor:'white'
              }}
              />
          <StackHome.Screen name="TakingPic" component={TakingPic}
              options={{
                headerStyle:{
                backgroundColor: '#04196b'
              },
                headerTintColor:'white'
              }}/>
          <StackHome.Screen name="Profile" component={Profile}
              options={{
                headerStyle:{
                backgroundColor: '#04196b'
              },
                headerTintColor:'white'
              }}
              />
          <StackHome.Screen name="Introduce" component={Introduce}
              options={{
                headerStyle:{
                backgroundColor: '#04196b'
              },
                headerTintColor:'white'
              }}/>
           <StackHome.Screen name="Posts" component={Posts}
              options={{
                headerStyle:{
                backgroundColor: '#04196b'
              },
                headerTintColor:'white'
              }}/>
          <StackHome.Screen name="PostsUpload" component={PostsUpload}
              options={{
                headerShown:false
              }}/>
          <StackHome.Screen name="PostCheckout" component={PostCheckout}
              options={{
                headerTitle:'See your Post',
                headerStyle:{
                backgroundColor: '#04196b'
              },
                headerTintColor:'white',
                headerRight: () =>(
                  <TouchableOpacity
                  onPress={() => this.props.uploadPost()}
                  style={{marginRight:20}}>
                    <Fontawesome name="paper-plane" color="white" size={20} />
                  </TouchableOpacity>
                )
              }}/>
          <StackHome.Screen name="SavedPosts" component={SavedPosts}
             options={{
              headerStyle:{
              backgroundColor: '#04196b'
            },
              headerTintColor:'white'
            }}/>
          <StackHome.Screen name="MyPost" component={MyPost}
              options={{
                headerStyle:{
                backgroundColor: '#04196b'
              },
                headerTintColor:'white'
          }}/>
          <StackHome.Screen name="EditProfile" component={EditProfile}
              options={{
                headerStyle:{
                backgroundColor: '#04196b'
              },
                headerTintColor:'white'
              }}/>
          <StackHome.Screen name="Save" component={Save}
              options={{
                headerStyle:{
                backgroundColor: '#04196b'
              },
                headerTintColor:'white'
              }}/>
          <StackHome.Screen name="Auth" component={Auth}
              options={{
                headerStyle:{
                backgroundColor: '#04196b'
              },
                headerTintColor:'white'
              }}/>
          <StackHome.Screen name="EnterChat" component={EnterChat} options={navBarOption} />
      </StackHome.Navigator>
      )
  }
}


const mapDispatchToProps = (dispatch) =>{
  return bindActionCreators({
      uploadPost
  },dispatch)
}

const mapStateToProps = (state) =>{
  return{
      user: state.user,
      post: state.post
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(HomeStack)
export { NewsStack, ChatStack, TalkStack, HomeStack }