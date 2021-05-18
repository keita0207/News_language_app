import React, { Component } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Dimensions } from 'react-native';
import * as Permissions from 'expo-permissions'
import * as ImagePicker from 'expo-image-picker'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { uploadPhoto } from '../../redux/actions/index'
import { getUser, updateUserFirstPic, updateUserSecondPic ,updateUserThirdPic,
         updateUserFourthPic, updateUserFifthPic} from '../../redux/actions/user'
import { removeImage } from '../../redux/actions/post'

const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height

class TakingPic extends Component {

  // Set state to an Image idividually.
      state = {
          urlChosenOne : undefined,
          urlChosenTwo: undefined,
          urlChosenThird: undefined,
          urlChosenFourth: undefined,
          urlChosenFifth: undefined
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
                  this.props.updateUserFirstPic(url)
                  this.setState({urlChosenOne: url})
                }
            }
        }
        catch(error){
            alert(error)
        }
    }

    openLibraryTwo = async () =>{
      try{
          const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL)
          if(status === 'granted'){
              const image = await ImagePicker.launchImageLibraryAsync({
                  allowsEditing: true
              })
              if(!image.cancelled){
                const url = await this.props.uploadPhoto(image)
                this.props.updateUserSecondPic(url)
                this.setState({urlChosenTwo: url})
              }
          }
      }
      catch(error){
          alert(error)
      }
  }

    openLibraryThird = async () =>{
      try{
          const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL)
          if(status === 'granted'){
              const image = await ImagePicker.launchImageLibraryAsync({
                  allowsEditing: true
              })
              if(!image.cancelled){
                const url = await this.props.uploadPhoto(image)
                this.props.updateUserThirdPic(url)
                this.setState({urlChosenThird: url})
              }
          }
      }
      catch(error){
          alert(error)
      }
  }

  openLibraryFourth = async () =>{
    try{
        const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL)
        if(status === 'granted'){
            const image = await ImagePicker.launchImageLibraryAsync({
                allowsEditing: true
            })
            if(!image.cancelled){
              const url = await this.props.uploadPhoto(image)
              this.props.updateUserFourthPic(url)
              this.setState({urlChosenFourth: url})
            }
        }
    }
    catch(error){
        alert(error)
    }
  }

  openLibraryFifth = async () =>{
    try{
        const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL)
        if(status === 'granted'){
            const image = await ImagePicker.launchImageLibraryAsync({
                allowsEditing: true
            })
            if(!image.cancelled){
              const url = await this.props.uploadPhoto(image)
              this.props.updateUserFifthPic(url)
              this.setState({urlChosenFifth: url})
            }
        }
    }
    catch(error){
        alert(error)
    }
  }

    changeChosenUrl = async (url) => {
      this.setState({urlChosen:url})
    }

    uploadPost = () => {
      this.props.navigation.navigate('PostCheckout')
    }

  render(){

  return (
    <View style={{height:screenHeight,width:screenWidth}}>
      <View>
          <View style={styles.imageRow}>
            <View>
              {
                (this.state.urlChosenOne === undefined) ?
                  <View //style={styles.imageContainer}
                  >
                    <TouchableOpacity onPress={this.openLibrary}>
                      <Image source={{uri: this.props.user.photo}} style={styles.image}/>
                    </TouchableOpacity>
                  </View>
                    :
                    (this.state.urlChosenOne) ?
                      <View>
                          <Image source={{uri: this.state.urlChosenOne}} style={styles.image}/>
                      </View>
                :
                <View>
                  <TouchableOpacity>
                    <Image source={require('../../assets/images/user.jpg')} style={styles.image} />
                  </TouchableOpacity>
                </View>
              }
            </View>
            <View>
              {
                (this.props.user.profilePic2) ?
                  <View>
                      <TouchableOpacity onPress={this.openLibraryTwo}>
                        <Image source={{uri: this.props.user.profilePic2}} style={styles.image}/>
                      </TouchableOpacity>
                  </View>
                  :
                  (this.state.urlChosenTwo)?
                  <View>
                    <Image source={{uri: this.state.urlChosenTwo}} style={styles.image} />
                  </View>
                :
                <View>
                  <TouchableOpacity onPress={this.openLibraryTwo}>
                    <Image source={require('../../assets/images/user.jpg')} style={styles.image} />
                  </TouchableOpacity>
                </View>
              }
            </View>
          </View>
          <View style={styles.imageRow}>
            <View >
              {
                (this.props.user.profilePic3) ?
                <View //style={styles.imageContainer}
                >
                  <TouchableOpacity onPress={this.openLibraryThird}>
                    <Image source={{uri: this.props.user.profilePic3}} style={styles.image}/>
                  </TouchableOpacity>
                </View>
                :
                  (this.state.urlChosenThird)?
                  <View>
                    <Image source={{uri: this.state.urlChosenThird}} style={styles.image}/>
                  </View>
                :
                <View >
                  <TouchableOpacity onPress={this.openLibraryThird}>
                    <Image source={require('../../assets/images/user.jpg')} style={styles.image} />
                  </TouchableOpacity>
                </View>
              }
            </View>
            <View>
              {
                (this.props.user.profilePic4) ?
                <View >
                  <TouchableOpacity onPress={this.openLibraryFourth}>
                    <Image source={{uri: this.props.user.profilePic4}} style={styles.image}/>
                  </TouchableOpacity>
                </View>
                 :
                 (this.state.urlChosenFourth)?
                 <View>
                   <Image source={{uri: this.state.urlChosenFourth}} style={styles.image}/>
                 </View>
                :
                <View >
                <TouchableOpacity onPress={this.openLibraryFourth}>
                  <Image source={require('../../assets/images/user.jpg')} style={styles.image} />
                </TouchableOpacity>
              </View>
              }
            </View>
          </View>
          <View style={styles.imagefifth}>
            {
              (this.props.user.profilePic5) ?
              <View>
                <TouchableOpacity onPress={this.openLibraryFifth}>
                  <Image source={{uri: this.props.user.profilePic5}} style={styles.image}/>
                </TouchableOpacity>
              </View>
                :
                (this.state.urlChosenFifth)?
                <View>
                  <Image source={{uri: this.state.urlChosenFifth}} style={styles.image}/>
                </View>
              :
              <View >
                <TouchableOpacity onPress={this.openLibraryFifth}>
                  <Image source={require('../../assets/images/user.jpg')} style={styles.image} />
                </TouchableOpacity>
              </View>
            }
          </View>
          </View>
      </View>
     )
  }
}

const mapDispatchToProps = (dispatch) =>{
  return bindActionCreators({
      getUser,
      updateUserFirstPic,
      updateUserSecondPic,
      updateUserThirdPic,
      updateUserFourthPic,
      updateUserFifthPic,
      uploadPhoto,
      removeImage
  },dispatch)
}

const mapStateToProps = (state) =>{
  return{
      user: state.user,
      post: state.post
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(TakingPic)


const styles = StyleSheet.create({
  cameracontainer:{
    flex:1,
    flexDirection:'row'
  },
  fixedRatio:{
    flex:1,
    aspectRatio:1
  },
  image:{
    width:150,
    height:150,
    marginRight:10,
    marginLeft:10,
    marginTop:20,
    resizeMode:'contain'
  },
  imageContainer:{
    width:screenWidth
  },
  imageRow:{
    width:screenWidth,
    height:200,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
  imagefifth:{
    width:screenWidth,
    justifyContent:'center',
    alignItems:'center'
  }
})


