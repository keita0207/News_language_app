import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Dimensions, Image, StyleSheet } from 'react-native'
import * as Permissions from 'expo-permissions'
import * as ImagePicker from 'expo-image-picker'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { uploadPhoto } from '../../redux/actions/index'
import { updatePhoto } from '../../redux/actions/user'

const screenWidth = Dimensions.get('window').width


class ProfilePic extends Component{

    openLibrary = async () =>{
        try{
            // Ask an User to open their own Photo Library.
            const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL)
            if(status === 'granted'){
                const image = await ImagePicker.launchImageLibraryAsync({
                    allowsEditing: true
                })
                if(!image.cancelled){
                    // if an Image is selected, upload the photo on Firebase.
                    const url = await this.props.uploadPhoto(image)
                    this.props.updatePhoto(url)
                }
            }
        }
        catch(error){
            console.log(error)
        }
    }


    render(){
        return(
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Text style={styles.continueText}>Choose a Profile Picture</Text>
                    {
                            /* If an User doesn't select an Image */
                            (this.props.user.photo === undefined)
                            ?
                            <TouchableOpacity onPress={() => this.openLibrary()}>
                                <Image source={require('../../assets/images/user.jpg')}
                                style={styles.image} />
                            </TouchableOpacity>
                            :
                            /* If an User selects an Image */
                            <TouchableOpacity onPress={() => this.openLibrary()}>
                                <Image
                                source={{uri: this.props.user.photo}}
                               style={styles.image}/>
                            </TouchableOpacity>
                    }
                </View>
                <TouchableOpacity
                    style={styles.continueButton}
                    onPress={() => this.props.navigation.navigate('Signup')}>
                      <Text style={styles.continueText}>Continue</Text>
                </TouchableOpacity>
            </View>
        )
    }
}


const mapDispatchToProps = (dispatch) =>{
    return bindActionCreators({
        uploadPhoto,
        updatePhoto
    },dispatch)
};

const mapStateToProps = (state) =>{
    return {
        user: state.user
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(ProfilePic)

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    imageContainer:{
        justifyContent:'center',
        justifyContent:'center',
        bottom:50
    },
    chooseText:{
        textAlign:'center',
        marginBottom:40,
        fontWeight:'bold',
        fontSize:23,
    },
    image:{
        width:300,
        height:200,
        resizeMode:'contain'
    },
    continueButton:{
        justifyContent:'center',
        alignItems:'center',
        width:screenWidth * 0.75,
        marginTop:30,
        padding:20,
        borderRadius:20,
        backgroundColor:'rgba(31, 58, 147, 1)',
    },
    continueText:{
        fontSize:20,
        color:"white"
    }
})