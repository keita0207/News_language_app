import React, { Component } from 'react'
import { View, Text, Image, TextInput, ScrollView,
         Dimensions, TouchableOpacity, StyleSheet } from 'react-native'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateDescription, uploadPost } from '../../redux/actions/post'

const screenWidth = Dimensions.get('window').width

class PostCheckout extends Component{
    render(){
        return(
            <View style={{justifyContent:'center',alignItems:'center'}}>
                <TextInput
                    placeholderTextColor="gray"
                    placeholder={'Type in your descreption here.'}
                    onChangeText={input => this.props.updateDescription(input)}
                    value={this.props.post.description}
                    style={styles.textInput}
                />
                <View style={styles.imagePosition}>
                    <ScrollView
                    horizontal={true}
                    pagingEnabled={true}
                    >
                    {
                       this.props.post.photos?.map(e =>
                               <Image source={{uri: e}} style={styles.image} />
                        )
                    }
                    </ScrollView>
                </View>
                <View style={styles.uploadStyleContainer}>
                    <TouchableOpacity
                    onPress={() => this.props.uploadPost()}
                    style={styles.uploadContainerStyle}>
                        <Text style={styles.uploadText}>UPLOAD</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
};

const mapDispatchToProps = (dispatch) =>{
    return bindActionCreators({
        updateDescription,
        uploadPost
    },dispatch)
}

const mapStateToProps = (state) =>{
    return{
        user: state.user,
        post: state.post
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(PostCheckout)

const styles = StyleSheet.create({
    textInput:{
        width:'95%',
        paddingHorizontal:25,
        paddingVertical:10,
        marginTop:100,
        fontSize:20,
        borderRadius:10,
        backgroundColor:'rgba(0,0,0,0.05)',
    },
    imagePosition:{
        marginTop:50
    },
    image:{
        width:screenWidth,
        height:360
    },
    uploadStyleContainer:{
        position:'absolute',
        bottom:200
    },
    uploadContainerStyle:{
        width:screenWidth * 0.75,
        justifyContent:'center',
        alignItems:'center',
        padding:20,
        backgroundColor:'rgba(31, 58, 147, 1)',
        borderRadius:20,
    },
    uploadText:{
        fontWeight:'bold',
        fontSize:20,
        color:'white'
    }
})