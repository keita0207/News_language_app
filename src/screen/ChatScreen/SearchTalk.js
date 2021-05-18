import React, { useState, useLayoutEffect } from 'react'
import {View,Text,StyleSheet} from 'react-native'
import {Button,Input} from 'react-native-elements'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { db } from '../../firebase/db'

const SearchTalk = ({navigation}) =>{
    const [input,setInput] = useState('')

    useLayoutEffect(() =>{
        navigation.setOptions({
            title:'Add a new Chat',
        })
    },[navigation])

    const createChat = async() =>{
        await db.collection('chats').add({
            chatName: input
        }).then(() =>{
            navigation.goBack()
        }).catch((error) => alert(error))
    }

    return(
      <View style={styles.container}>
           <Input
           placeholder="Enter"
           value={input}
           onChangeText={(text) => setInput(text)}
           onSubmitEditing={createChat}
           leftIcon={
               <FontAwesome name="image" size={20}/>
           } />
           <Button title="Submit"
            onPress={createChat}
            style={{backgroundColor:'blue'}}/>
      </View>
    )
}

export default SearchTalk

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        padding:40
    }
})