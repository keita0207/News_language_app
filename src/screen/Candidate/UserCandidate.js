import React,{useEffect,userState} from 'react'
import {View,Text} from 'react-native'
import { connect } from 'react-redux'
import firebase from 'firebase'
require('firebase/firestore')

const UserCandidate = (props) =>{

    const {currentUser,posts,following} = props


    return(
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>

        </View>
    )
}


const mapStateToProps = (store) =>({
    currentUser: store.userState.currentUser,
    posts: store.userState.posts,
    following:store.userState.following
})
export default connect(mapStateToProps,null)(UserCandidate)