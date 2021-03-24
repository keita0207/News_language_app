import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import  AuthStack  from './src/Navigator/Navigation'
import {StatusBar} from 'react-native'


export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <AuthStack />
    </NavigationContainer>
  );
}


// INSTALLED
// yarn add @react-navigation/native
// yarn add native-base --save
// yarn add react-native-webview
// yarn add react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
// yarn add react-native-vector-icons
// yarn add @react-navigation/bottom-tabs
// yarn add @react-navigation/stack
// yarn add react-native-swipe-image
// yarn add react-native-country-picker-modal
// yarn add react-native-modal-datetime-picker @react-native-community/datetimepicker
// yarn add react-native-elements
// yarn add react-native-floating-label-input
// yarn add react-native-appearance
// yarn add @react-navigation/drawer