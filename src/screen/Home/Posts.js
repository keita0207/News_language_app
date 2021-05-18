import React, { Component } from 'react';
import { View, Text,TouchableOpacity, FlatList, SafeAreaView, StyleSheet } from 'react-native'
import Fontawesome from 'react-native-vector-icons/FontAwesome'

import PostComponent from './PostComponent'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getUser } from '../../redux/actions/user'
import { getPosts, likePost, unLikePost, savePost, unSavePost } from '../../redux/actions/post'


class Posts extends Component{

    componentDidMount = () =>{
        this.props.getPosts(10)
    }

    render(){
        return(
                <SafeAreaView style={styles.container}>
                    <View style={styles.headerContainer}>
                        <Text style={styles.yourPostsText}>Your Posts</Text>
                        <TouchableOpacity style={styles.savePost} onPress={() => this.props.navigation.navigate('SavedPosts')}>
                           <Text >See Saved Posts</Text>
                        </TouchableOpacity>
                    </View>
                        {/*
                        他のユーザの投稿と情報を全て表示させるための条件？
                        このComponentは、ログインしているユーザーの情報のみ抽出しているため、記載の必要ない。

                        this.props.post.feed.includes(this.props.user.uid) ?
                        <View>
                            <Text>No post yet</Text>
                        </View>
                        :*/}
                    <FlatList
                        data={this.props.post.feed}
                        keyExtractor={(item) => JSON.stringify(item.uid)}
                        renderItem={({item}) =>(
                            <>
                            <View>
                                <PostComponent
                                item={item}
                                user={this.props.user}
                                likePost={(item) => this.props.likePost(item)}
                                unLikePost={(item) => this.props.unLikePost(item)}
                                savePost={(item) => this.props.savePost(item)}
                                unSavePost={(item) => this.props.unSavePost(item)}
                                navigation={this.props.navigation}
                                />
                            </View>
                            </>
                        )}
                    />
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('PostsUpload')}
                        style={styles.postUploadPosition}
                        >
                            <View style={styles.uploadContainer}>
                                <Fontawesome
                                name="image"
                                size={30}
                                color="white" />
                            </View>
                    </TouchableOpacity>
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
        post: state.post
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Posts)

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    headerContainer:{
        height:80,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row'
    },
    yourPostsText:{
        fontWeight:'bold',
        fontSize:26
    },
    savePost:{
        marginLeft:20
    },
    postUploadPosition:{
        position:'absolute',
        bottom:30,
        right:30
    },
    uploadContainer:{
        width:50,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#04196b',
        borderRadius:50,
    }
})