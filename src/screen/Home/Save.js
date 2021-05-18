import React, { Component } from 'react'
import { View, Image, Button } from 'react-native'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class Save extends Component{
    render(){
        return(
            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                <Image source={{uri: this.props.user.photo}} style={{height:200,height:200}} />
                <Button title="UPLOAD" />
            </View>
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

export default connect(mapStateToProps,mapDispatchToProps)(Save)
