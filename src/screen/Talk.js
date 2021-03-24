import React, { useLayoutEffect } from 'react'
import {ScrollView,SafeAreaView,View,Text} from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import CustumTalk from './CustumTalk'

const Talk = ({navigation}) =>{

    useLayoutEffect(() =>{
        navigation.setOptions({
            title: 'Chat',
            headerRight: () =>
            <View style={{marginLeft:10,flexDirection:'row',alignItems:'center'}}>
                <FontAwesome name="trash-o" size={30} style={{marginRight:8}} />
            </View>
        })

    },[])
    return(
        <SafeAreaView>
            <ScrollView>
               <CustumTalk />
            </ScrollView>
        </SafeAreaView>
    )
}

export default Talk