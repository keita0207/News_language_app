import React, {useEffect} from 'react'
import {View, Text,FlatList, Image,Dimensions} from 'react-native'
import { Container, Header, Content, Card, CardItem, Thumbnail,
         Button, Icon, Left, Body } from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { connect } from 'react-redux'
import firebase from 'firebase'
require('firebase/firestore')

const Posts = (props) =>{

    useEffect(() => {
        /*(async () => {
          const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
          setHasGalleryPermission(galleryStatus.status === 'granted');
        })();*/

        if(firebase.auth().currentUser.uid){
          firebase.firestore()
          .collection('users')
          .doc()
          .get()
          .then((snapshot) =>{
              if(snapshot.exists){
                  setUser(snapshot.data())
              }
              else{
                  console.log('Does not exist.')
              }
          })
        }
      }, [firebase.auth().currentUser.uid]);


    const {currentUser,posts} = props
    const height = Dimensions.get('screen').height
    return(
        <View style={{alignItems:'center',width:'100%',height}}>
            <View>
                {/* Postsが無かったら、 NO POSTS YETと記載する */}
                {
                    posts === null ? (
                        <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
                            <Text>
                                No Posts Yet
                            </Text>
                        </View>
                    ):
                    <View style={{height:500,width:400,borderColor:'#626e82',borderWidth:1,marginTop:30}}>
                        <View style={{flexDirection:'row',alignItems:'center',
                                    paddingHorizontal:10,paddingVertical:10,borderBottomWidth:1,borderBottomColor:'#626e82'}}>
                            {
                                posts === undefined ?(
                                <Image style={{width:50,height:50,borderRadius:50}} source={require('../../assets/images/user.jpg')} />
                                ):
                                (
                                    <Image style={{width:50,height:50,borderRadius:50,marginRight:10}} source={{uri: posts !== null ? posts[0]?.downloadURL : 'https://www.javatpoint.com/images/logo/jtp_logo.png' }} />
                                )
                            }
                        <Text style={{fontSize:25}}>{currentUser.name}</Text>
                        <View style={{position:'absolute',right:10}}>
                            <FontAwesome name="trash-o" size={30} />
                        </View>
                    </View>
                        <View pagingEnabled horizontal>
                        {
                                posts === undefined ?(
                                <Image style={{width:50,height:50,borderRadius:50}} source={require('../../assets/images/user.jpg')} />
                                ):
                                (
                                    <Image style={{width:'100%',height:200,marginRight:10,resizeMode:'cover'}} source={{uri: posts !== null ? posts[0]?.downloadURL : 'https://www.javatpoint.com/images/logo/jtp_logo.png' }} />
                                )
                        }
                        </View>
                    </View>
                }
            </View>
        </View>
    )
}


const mapStateToProps = (store) =>({
    currentUser:store.userState.currentUser,
    posts: store.userState.posts
})
export default connect(mapStateToProps,null)(Posts);
