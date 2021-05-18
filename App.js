import  React,{ Component } from 'react';
import { DarkTheme } from '@react-navigation/native';
import { StatusBar } from 'react-native'
//import {Provider as PaperProvider, DarkTheme as PaperDarkTheme} from 'react-native-paper'
import { Provider } from 'react-redux'
import  reducer from './src/redux/reducers/index'
import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'

import SwitchContainer from './src/Navigator/LoginNavigator'

const middleware = applyMiddleware(thunkMiddleware)
const store = createStore(reducer,middleware)

//仮のデータ。reduxをudemyの講座と同じ様に設定する。
export class App extends Component{
  render(){
    return(
      <Provider store={store}>
        <StatusBar barStyle="light-content" />
        <SwitchContainer />
      </Provider>
    )
  }
}

export default App
