import React  from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Navi } from './BottomTabNavigation'

/* Auth Screen Starts */
import Auth from '../screen/Auth/Auth'
import ProfilePic from '../screen/Auth/ProfilePic'
import Signup from '../screen/Auth/Signup'
import Logo from '../screen/Auth/Logo'
/* Auth Screen Ends */


const StackAuth = createStackNavigator();

export default function App(){
    const navBarOption = () =>({
        headerShown: true
    })

    const falseBar = () =>({
        headerShown : false
})


return(
      <NavigationContainer>
          <StackAuth.Navigator>
            <StackAuth.Screen name="Logo" component={Logo} options={falseBar} />
            <StackAuth.Screen name="Auth" component={Auth} options={falseBar} />
            <StackAuth.Screen name="ProfilePic" component={ProfilePic} options={navBarOption} />
            <StackAuth.Screen name="Signup" component={Signup} options={navBarOption} />
            <StackAuth.Screen name="Navi" component={Navi} options={falseBar} />
          </StackAuth.Navigator>
      </NavigationContainer>
   )
}