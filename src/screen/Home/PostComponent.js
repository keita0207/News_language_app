import React, { Component } from 'react'
import { View, Text,TouchableOpacity, ScrollView, Dimensions, FlatList, Image} from 'react-native'
import moment from 'moment'



const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height

export class PostComponent extends Component {


    state = {
        liked: undefined,
        numLike: 0,
        saved: undefined
    }


    likePost = () =>{
        if((this.props.item.likes.includes(this.props.user.uid)) || this.state.liked === true){
           if(this.state.liked == false){
               this.setState({liked: true})
               this.setState({numLike: this.state.numLike + 1})
               this.props.likePost(this.props.item)
           }
           else{
               this.setState({liked: false})
               this.setState({numLike: this.state.numLike - 1})
               this.props.unLikePost(this.props.item)
           }
        }
        else{
               this.setState({liked: true})
               this.props.likePost(this.props.item)
               this.setState({numLike: this.state.numLike + 1})
        }
    }

    savePost = () =>{
        if((this.props.item.savedBy.includes(this.props.user.uid)) || this.state.savedBy === true){
            if(this.state.savedBy == false){
                this.setState({saved: true})
                this.props.savePost(this.props.item)
            }
            else{
                this.setState({saved: false})
                this.props.unSavePost(this.props.item)
            }
         }
         else{
                this.setState({saved: true})
                this.props.savePost(this.props.item)
         }
    }

    render() {
        return (
            <View style={{marginVertical:10}}>
                {
                    (this.props.user.uid === this.props.item.uid && this.props.item.photos.feed === undefined) ?
                    <>
                    <View style={{height:50,width:screenWidth,flexDirection:'row',alignItems:'center',
                                  justifyContent:'space-between',borderBottomColor:'gray',borderBottomWidth:1}}>
                        <View style={{justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
                            <TouchableOpacity style={{justifyContent:'center',alignItems:'center',flexDirection:'row'}}
                            onPress={() => this.props.navigation.navigate('UserProfile',this.props.item.uid)}
                            >
                                <Image source={{uri: this.props.item.photo}} style={{height:30,width:30,margin:10}} />
                                <Text style={{fontSize:20,fontWeight:'bold'}}>{this.props.item.userName}</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{marginRight:20}}>
                            <Text>{moment(this.props.item.date).format("MMM Do YY")}</Text>
                        </View>
                    </View>
                    <ScrollView
                    horizontal={true}
                    pagingEnabled={true}
                    >
                        {
                            this.props.item.photos?.map(e =>
                                <Image source={{uri: e}} style={{width:screenWidth,height:300}} />
                            )
                        }

                    </ScrollView>
                        <View style={{width:screenWidth,flexDirection:'row',justifyContent:'space-between',alignItems:'center',height:50}}>
                            <View style={{justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
                                <TouchableOpacity onPress={() => this.likePost()}>
                                    {
                                        (this.props.item.likes.includes(this.props.user.uid) && this.state.liked === undefined) ?
                                         <Image source={require('../../assets/images/redstar.jpg')} style={{height:30,width:30,margin:10}} />
                                        :
                                           (this.state.liked === true) ?
                                              <Image source={require('../../assets/images/redstar.jpg')} style={{height:30,width:30,margin:10}} />
                                              :
                                              <Image source={require('../../assets/images/star.png')} style={{height:30,width:30,margin:10}} />
                                    }
                                </TouchableOpacity>
                                <Image source={require('../../assets/images/comment.png')} style={{height:30,width:30,margin:10}} />
                                <Image source={require('../../assets/images/share.jpg')} style={{height:30,width:30,margin:10}} />
                            </View>
                            <TouchableOpacity onPress={() => this.savePost()}>
                                {
                                    (this.props.item.savedBy.includes(this.props.user.uid)  && this.state.saved === undefined) ?
                                    <Image source={require('../../assets/images/save.jpeg')} style={{height:30,width:30,margin:10}} />
                                    :
                                       (this.state.saved === true) ?
                                       <Image source={require('../../assets/images/redstar.jpg')} style={{height:30,width:30,margin:10}} />
                                       :
                                       <Image source={require('../../assets/images/save.jpeg')} style={{height:30,width:30,margin:10}} />
                                }
                            </TouchableOpacity>
                        </View>
                        <View style={{marginHorizontal:15,marginVertical:6}}>
                            <Text style={{fontSize:16}}>
                               {
                                   this.props.item.likes.length + this.state.numLike
                               }
                                <Text> Likes</Text>
                            </Text>
                        </View>
                        <View style={{flexDirection:'row',alignItems:'center',marginVertical:1}}>
                            <Text style={{fontWeight:'bold',marginLeft:15}}>{this.props.item.userName}  </Text>
                            <Text>{this.props.item.description}</Text>
                        </View>
                        <View style={{marginLeft:15,marginVertical:6}}>
                            <Text>Show all Comments : {this.props.item.comment.length}</Text>
                        </View>
                        <View style={{marginLeft:15,marginVertical:6,alignItems:'center',flexDirection:'row'}}>
                            <Image source={{uri: this.props.user.photo}} style={{height:30,width:30,borderRadius:20}} />
                            <Text style={{marginHorizontal:10,color:'gray'}}>Add a Comment</Text>
                        </View>
                    </>
                    :
                    <View />
                }
            </View>
        )
    }
}


export default PostComponent
