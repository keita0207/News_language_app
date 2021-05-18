import React, { Component } from 'react';
import { View, Text,TouchableOpacity, ScrollView, Dimensions, FlatList, Image, SafeAreaView} from 'react-native'
import Fontawesome from 'react-native-vector-icons/FontAwesome'

import PostComponent from './PostComponent'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getUser } from '../../redux/actions/user'
import { getPosts, likePost, unLikePost, savePost, unSavePost } from '../../redux/actions/post'

const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height



class Posts extends Component{

    componentDidMount = () =>{
        this.props.getPosts(10)
    }

    render(){
        return(
                <SafeAreaView style={{flex:1, justifyContent:'center',alignItems:'center'}}>
                    <View style={{height:80,justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
                        <Text style={{fontWeight:'bold',fontSize:26}}>{this.props.profile.userName} Posts</Text>
                    </View>
                    <FlatList
                        data={this.props.post.feed}
                        keyExtractor={(item) => JSON.stringify(item.uid)}
                        renderItem={({item}) =>(
                            <>
                            <View>
                                { item !== undefined ?
                                <PostComponent
                                params={this.props.params}
                                item={item}
                                user={this.props.user}
                                likePost={(item) => this.props.likePost(item)}
                                unLikePost={(item) => this.props.unLikePost(item)}
                                savePost={(item) => this.props.savePost(item)}
                                unSavePost={(item) => this.props.unSavePost(item)}
                                navigation={this.props.navigation}
                                />
                                :
                                <View>
                                    <Text>NO POSTS</Text>
                                </View>
                              }
                            </View>
                            </>
                        )}
                    />
                  {/*  <FlatList
                        data={this.props.profile.posts}
                        numColumns={3}
                        keyExtractor={(item) => JSON.stringify(item.date)}
                        renderItem={({item}) =>(
                            <>
                                <Image source={{uri:item.photos[0]}} style={{width:200,height:200}} />
                                <Text>{this.props.photos?.description}</Text>
                            </>
                        )}
                        />*/}
            </SafeAreaView>
        )
    }
}

const mapDispatchToProps = (dispatch) =>{
    return bindActionCreators({
        getUser,
        getPosts,
        likePost,
        unLikePost,
        savePost,
        unSavePost
    },dispatch)
}


const mapStateToProps = (state) =>{
    return{
        user: state.user,
        post: state.post,
        profile: state.profile
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Posts)