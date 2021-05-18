import React,{ Component } from 'react'
import { View,Text } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as firebase from 'firebase'
import { getUser } from '../../redux/actions/user'

class Logo extends Component{

    // Confirm if an User already log in or not.
    componentDidMount = () =>{
        firebase.auth().onAuthStateChanged((user) =>{
          if(user){
            this.props.getUser(user.uid)
            if(this.props.user !== null){
              this.props.navigation.navigate('Navi')
              this.props.navigation.reset({
                // Navi Component is the First Component which doesn't allow an User go back to Auth Component.
                index:0,
                routes: [{name: 'Navi'}]
              })
            }
          }
          else{
            // If an User alredy loggs in, automatically switch to th Navi Component.
            this.props.navigation.navigate('Auth')
          }
        })
      }

    render(){
        return(
                // Insert Images or Logo. The first screen that Users see.
                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                    <Text>Loading User Authentication</Text>
                </View>
        )
    }
}


const mapDispatchToProps = (dispatch) =>{
    return bindActionCreators({
      getUser
     },dispatch)
}

const mapStateToProps = (state) =>{
    return{
      user: state.user
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Logo)

