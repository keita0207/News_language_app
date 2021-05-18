import React, { Component, useEffect } from 'react';
import { View, Text,TouchableOpacity, ScrollView, Dimensions, FlatList, Image, SafeAreaView, StyleSheet} from 'react-native'
import { Container, Tab, Tabs, ScrollableTab } from 'native-base';
import Fontawesome from 'react-native-vector-icons/FontAwesome'
import Posts from './Posts'
import Introduce from './Introduce'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getUser, unFollowUser, followUser } from '../../redux/actions/user'
//import { getPosts, likePost, unLikePost, savePost, unSavePost } from '../../redux/actions/post'

const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height
//const height = width * 100 / 100
//const { width } = Dimensions.get('screen')


class UserIntrpduce extends Component{

    componentDidMount = () =>{
        //const { params } = this.props.route
        const { params } = this.props.params
        if(params !== undefined){
            this.props.getUser(params,'PROFILE')
        }
    }

    unFollow = () =>{
        this.props.unFollowUser(this.props.profile)
    }

    follow = () =>{
        this.props.followUser(this.props.profile)
        this.props.navigation.navigate('EnterChat',this.props.profile)
        this.props.getUser(this.props.profile.uid,'PROFILE')
    }

    /*startToTalk = () =>{
        this.props.navigation.navigate('CustumTalk')
    }*/


    render(){
        return(
            <ScrollView style={{flex:1}}>
                <View style={{height:150,width:'100%',justifyContent:'space-between',alignItems:'center',flexDirection:'row'}}>
                   <Image source={{uri: this.props.profile.photo}} style={{height:90,width:90,borderRadius:50,margin:20}} />
                   <View style={{justifyContent:'space-between',alignItems:'center',flexDirection:'row'}}>
                       <View style={{justifyContent:'center',alignItems:'center',margin:10}}>
                           <Text style={{fontWeight:'bold'}}>23</Text>
                           <Text>Posts</Text>
                       </View>
                       <View style={{justifyContent:'center',alignItems:'center',margin:10}}>
                           <Text style={{fontWeight:'bold'}}>222</Text>
                           <Text>Followes</Text>
                       </View>
                       <View style={{justifyContent:'center',alignItems:'center',margin:10}}>
                          <Text style={{fontWeight:'bold'}}>1000</Text>
                           <Text>Folloing</Text>
                       </View>
                   </View>
                </View>
                <View>
                {
                    (this.props.profile.followers?.includes(this.props.user)) ?
                    <View>
                        <Text>NO</Text>
                    </View>
                    :
                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',height:50}}>
                        <TouchableOpacity
                        onPress={() => this.follow()}
                        style={{margin:10,backgroundColor:'blue',padding:10}}>
                            <Text style={{fontWeight:'bold',color:'white'}}>Follow</Text>
                        </TouchableOpacity>
                    </View>
                }
                </View>
                <View style={{height:300,justifyContent:'center',alignItems:'center',marginTop:0,width:'100%'}}>
                        <ScrollView pagingEnabled={true} horizontal={true} style={{height:300,width:'100%',flexDirection:'row'}}>
                            {
                                (this.props.profile.photo)?
                                <Image style={{height:300,width:screenWidth}} source={{uri: this.props.profile.photo}} />
                                :
                                <Image style={{height:300,width:screenWidth}} source={require('../../assets/images/user.jpg')} />
                            }
                            {
                                (this.props.profile.profilePic2)?
                                <Image style={{height:300,width:screenWidth}} source={{uri: this.props.profile.profilePic2}} />
                                :
                                <View />
                            }
                            {
                                (this.props.profile.profilePic3)?
                                <Image style={{height:300,width:screenWidth}} source={{uri: this.props.profile.profilePic3}} />
                                :
                                <View />
                            }
                            {
                                (this.props.profile.profilePic4)?
                                <Image style={{height:300,width:screenWidth}} source={{uri: this.props.profile.profilePic4}} />
                                :
                                <View />
                            }
                            {
                                (this.props.profile.profilePic5)?
                                <Image style={{height:300,width:screenWidth}} source={{uri: this.props.profile.profilePic5}} />
                                :
                                <View />
                            }

                        </ScrollView>
                  </View>
                  <View style={{height:50,borderBottomColor:'black',borderBottomWidth:1}}>
                        <View style={{marginTop:15,flexDirection:'row',alignItems:'center',
                                        marginRight:5,marginHorizontal:20}}>
                            <Text style={{fontSize:25}}>{this.props.profile.userName} / </Text>
                            <Text style={{fontSize:25}}>{this.props.profile.age} / Female / 🇷🇺</Text>
                        </View>
                  </View>
                  <ScrollView
                        pagingEnabled horizontal
                        style={{
                        marginTop:15,alignContent:'stretch',flexDirection:'row',width:'100%',
                        marginRight:0,marginHorizontal:0}}>
                        <View style={{marginHorizontal:10,marginTop:30}}>
                        <Text style={{fontSize:20}}>{this.props.profile.introduction}</Text>
                        </View>
                  </ScrollView>
                  <TouchableOpacity
                  onPress={() => this.follow()}
                        style={{position:'absolute',bottom:30,
                                right:30}}
                                >
                            <View style={{backgroundColor:'#04196b',borderRadius:50,width:50,height:50,
                                        justifyContent:'center',alignItems:'center'}}>
                                <Fontawesome
                                name="image"
                                size={30}
                                color="white" />
                            </View>
                  </TouchableOpacity>
            </ScrollView>
        )
    }
}

const mapDispatchToProps = (dispatch) =>{
    return bindActionCreators({
        getUser,
        followUser,
        unFollowUser
    },dispatch)
}


const mapStateToProps = (state) =>{
    return{
        user: state.user,
        profile: state.profile
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(UserIntrpduce)


/*

/*<View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',height:50}}>
                        <TouchableOpacity
                        onPress={() => this.unFollow()}
                        style={{margin:10,backgroundColor:'blue',padding:10}}>
                            <Text style={{fontWeight:'bold',color:'white'}}>Following</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{margin:10,backgroundColor:'blue',padding:10}}>
                            <Text style={{fontWeight:'bold',color:'white'}}>Message</Text>
                        </TouchableOpacity>
</View>*/
