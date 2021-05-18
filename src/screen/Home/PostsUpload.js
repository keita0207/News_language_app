import React, { Component } from 'react'
import { View, Text, TouchableOpacity,
         SafeAreaView, Platform, Dimensions,
         Image, StyleSheet } from 'react-native'
import Fontawesome from 'react-native-vector-icons/FontAwesome'
import * as Permissions from 'expo-permissions'
import * as ImagePicker from 'expo-image-picker'
import { connect } from 'react-redux'
import { uploadPhoto } from '../../redux/actions/index'
import { getUser } from '../../redux/actions/user'
import { updateNextPhotos, removeImage } from '../../redux/actions/post'
import { bindActionCreators } from 'redux'

const screenWidth = Dimensions.get('window').width

class PostsUpload extends Component{

    state = {
        urlChosen : undefined
    }

    openLibrary = async () =>{
        try{
            const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL)
            if(status === 'granted'){
                const image = await ImagePicker.launchImageLibraryAsync({
                    allowsEditing: true
                })
                if(!image.cancelled){
                   const url = await this.props.uploadPhoto(image)
                   this.props.updateNextPhotos(url)
                   this.setState({urlChosen: url})
                }
            }
        }
        catch(error){
            alert(error)
        }
    }

    changeChosenUrl = async (url) => {
        // A selected Image has its own url and set to UrlChosen state.
        this.setState({urlChosen:url})
    }

    removeImage = async (url) => {
        // If there is only an image,then this photos position would be 0.
        // indexOf => Find an index of a clicked Image
        const position = this.props.post.photos.indexOf(url)
        this.props.removeImage(position)
        if(this.props.post.photos.length === 2){
            this.setState({urlChosen: this.props.post.photos[0]})
        }
        else{
            this.setState({urlChosen: undefined})
        }
    }

    uploadPost = () => {
        this.props.navigation.navigate('PostCheckout')
    }

    render(){
        return (
            <SafeAreaView style={{flex:1}}>
                <View style={(Platform.Os == 'ios') ?
                     {width:screenWidth,height:45,borderBottomColor:'black',borderBottomWidth:1}:
                     {width:screenWidth,height:45, borderBottomColor:'gray',borderBottomWidth:1},
                      styles.container}>
                    <Fontawesome name="long-arrow-left" size={25} style={styles.arrowLeft} />
                    <TouchableOpacity
                        onPress={() => this.uploadPost()}
                        style={{margin:10}}>
                        <Text style={styles.uploadText}>UPLOAD</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.selectedImageContainer}>
                    {
                        (this.state.urlChosen === undefined) ?
                        <TouchableOpacity onPress={() => this.openLibrary()}>
                            <View style={styles.plusContainer}>
                               <Text style={styles.plusText}>+</Text>
                              </View>
                        </TouchableOpacity>
                        :
                        <View style={styles.image}>
                            <Image source={{url: this.state.urlChosen}} style={styles.image} />
                            <TouchableOpacity onPress={() => this.removeImage(this.state.urlChosen)} style={styles.trashIcon}>
                                <Fontawesome size={30} color="black" name="trash" />
                            </TouchableOpacity>
                        </View>
                    }
                </View>
                <View style={styles.selectedImagerow}>
                    {
                        (this.props.post.photos === undefined || this.props.post.photos.length === 3 || this.props.post.photos.length === 0) ?
                         null
                         :
                         <TouchableOpacity
                            onPress={() => this.openLibrary()}
                            style={styles.selectImageContainer}>
                            <Text style={styles.selectImageText}>Select an Image</Text>
                        </TouchableOpacity>
                    }
                   {
                       this.props.post.photos?.map(e =>
                           <TouchableOpacity
                           onPress={() => this.changeChosenUrl(e)}
                           style={styles.flexDirection}>
                               <Image source={{uri: e}} style={styles.selectedImage} />
                           </TouchableOpacity>
                        )
                   }
                </View>
            </SafeAreaView>
        )
    }
}

const mapDispatchToProps = (dispatch) =>{
    return bindActionCreators({
        getUser,
        uploadPhoto,
        updateNextPhotos,
        removeImage
    },dispatch)
}

const mapStateToProps = (state) =>{
    return{
        user: state.user,
        post: state.post
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(PostsUpload)

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:0,
    },
    arrowLeft:{
        margin:10,
        fontWeight:'bold'
    },
    uploadText:{
        fontWeight:'bold',
        color:'#04196b'
    },
    flexDirection:{
        flexDirection:'row'
    },
    image:{
        width:screenWidth,
        height:360
    },
    plusContainer:{
        width:65,
        height:65,
        justifyContent:'center',
        alignItems:'center',
        borderRadius: 65/2,
        backgroundColor:'gray',
    },
    plusText:{
        color:'white',
        fontSize:40
    },
    selectedImageContainer:{
        width:screenWidth,
        height:360,
        justifyContent:'center',
        alignItems:'center'
    },
    selectedImagerow:{
        width:screenWidth,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        marginTop:40
    },
    selectedImage:{
        width:90,
        height:90,
        margin:10,
        borderRadius:20
    },
    trashIcon:{
        position:'absolute',
        bottom:30,
        right:30
    },
    selectImageContainer:{
        padding:10,
        backgroundColor:'blue',
    },
    selectImageText:{
        color:'white',
        fontWeight:'bold'
    }
})