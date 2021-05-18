import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import { NewsStack, ChatStack, TalkStack, HomeStack} from './StackNavigation'

// Bottom Tab
const Tab = createBottomTabNavigator();
const Navi = () =>{
        return(
            <Tab.Navigator
            initialRouteName="Home"
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
                }
                else if(route.name === 'Chat'){
                    iconName = 'user-plus'
                }else if(route.name === 'Talk'){
                    iconName = 'comments'
                }
                else{
                    iconName = 'home'
                }
                return <FontAwesome name={iconName} size={30} color={color} />
                }
            })}
            tabBarOptions={{
                activeTintColor:'white',
                inactiveTintColor:'gray',
                style:{
                backgroundColor:'#04196b'
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

export { Navi }

