import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Image, StyleSheet } from 'react-native'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getUser } from '../../redux/actions/user'

class UserLists extends Component{

    separate = () =>{
        return(
            <View
                style={styles.separate}
            />
        )
    }

    bringuser = () =>{
        this.props.navigation.navigate('EnterChat')
        console.log(this.props.item.uid)
    }

    render(){
        return(
            <View>
                <TouchableOpacity
                    onPress={() => this.bringuser()}>
                        <View style={styles.userContainer}>
                            {
                                (this.props.item.photo) ?
                                <Image source={{uri:this.props.item.photo}} style={styles.image} />
                                :
                                <Image source={require('../../assets/images/user.jpg')} style={styles.image}/>
                            }
                            <View style={styles.userNameContainer}>
                                <Text style={styles.userName}>{this.props.item.userName}</Text>
                            </View>
                            <Text>{this.props.item.uid}</Text>
                        </View>
                </TouchableOpacity>
            </View>
        )
    }
}

const mapDispatchToProps = (dispatch) =>{
    return bindActionCreators({
        getUser,
    },dispatch)
}


const mapStateToProps = (state) =>{
    return{
        user: state.user,
        profile: state.profile
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(UserLists)

const styles = StyleSheet.create({
   separate:{
     borderColor:'gray',
     borderBottomWidth:1
   },
   userContainer:{
     height:80,
     flexDirection:'row',
     alignItems:'center'
   },
   image:{
     height:50,
     width:50,
     borderRadius:50
   },
   userNameContainer:{
       marginBottom:40
   },
   userName:{
     marginVertical:5,
     marginHorizontal:20,
     fontWeight:'bold'
   }
})