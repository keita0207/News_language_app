import React, { Component } from 'react';
import { View, Text,TouchableOpacity, ScrollView, Dimensions, FlatList, Image, SafeAreaView} from 'react-native'
import Fontawesome from 'react-native-vector-icons/FontAwesome'

import PostComponent from './PostComponent'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getUser } from '../../redux/actions/user'
import { getPosts, likePost, unLikePost, savePost, unSavePost, getSavedPosts } from '../../redux/actions/post'

const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height



class SavedPosts extends Component{

    componentDidMount = () =>{
        this.props.getSavedPosts()
    }

    render(){
        return(
                <SafeAreaView style={{flex:1, justifyContent:'center',alignItems:'center'}}>
                    <View style={{height:80,justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
                        <TouchableOpacity  onPress={() => this.props.navigation.navigate('SavedPosts')}>
                           <Text >See Saved Posts</Text>
                        </TouchableOpacity>
                    </View>
                    <FlatList
                        data={this.props.post.saved_feed}
                        keyExtractor={(item) => JSON.stringify(item.uid)}
                        renderItem={({item}) =>(
                            <View>
                                <PostComponent
                                item={item}
                                user={this.props.user}
                                likePost={(item) => this.props.likePost(item)}
                                unLikePost={(item) => this.props.unLikePost(item)}
                                savePost={(item) => this.props.savePost(item)}
                                unSavePost={(item) => this.props.unSavePost(item)}
                                />
                            </View>
                        )}
                    />
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
        unSavePost,
        getSavedPosts
    },dispatch)
}


const mapStateToProps = (state) =>{
    return{
        user: state.user,
        post: state.post
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SavedPosts)
