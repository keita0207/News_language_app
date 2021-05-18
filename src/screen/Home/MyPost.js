import React, { Component } from 'react';
import { View, Text,TouchableOpacity, ScrollView,
         FlatList, SafeAreaView, StyleSheet} from 'react-native'
import Fontawesome from 'react-native-vector-icons/FontAwesome'

import PostComponent from './PostComponent'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getUser } from '../../redux/actions/user'
import { getPosts, likePost, unLikePost, savePost, unSavePost } from '../../redux/actions/post'


class Posts extends Component{

    // Get logging User Posts up to 10 Posts
    componentDidMount = () =>{
        this.props.getPosts(10)
    }

    render(){
        return(
                <SafeAreaView style={styles.container}>
                    <View style={styles.header}>
                        <Text style={styles.headerText}>Your Posts</Text>
                        <TouchableOpacity style={{marginLeft:20}} onPress={() => this.props.navigation.navigate('SavedPosts')}>
                           <Text >See Saved Posts</Text>
                        </TouchableOpacity>
                    </View>
                    <FlatList
                        data={this.props.post.feed}
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

                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('PostsUpload')}
                        style={styles.postIconContainer}
                    >
                            <View style={styles.postIconContainerStyle}>
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
    header:{
        height:80,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row'
    },
    headerText:{
        fontWeight:'bold',
        fontSize:26
    },
    postIconContainer:{
        position:'absolute',
        bottom:30,
        right:30
    },
    postIconContainerStyle:{
        width:50,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:50,
        backgroundColor:'#04196b',
    },
})