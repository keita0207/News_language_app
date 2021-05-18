import React, { Component, useEffect } from 'react';
import { View, Text,TouchableOpacity, ScrollView, Dimensions, FlatList, Image, SafeAreaView, StyleSheet} from 'react-native'
import { Container, Tab, Tabs, ScrollableTab } from 'native-base';
import Fontawesome from 'react-native-vector-icons/FontAwesome'
import UserPosts from './UserPosts'
import UserIntroduce from './UserIntroduce'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getUser } from '../../redux/actions/user'
//import { getPosts, likePost, unLikePost, savePost, unSavePost } from '../../redux/actions/post'

const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height
//const height = width * 100 / 100
//const { width } = Dimensions.get('screen')


class UserProfile extends Component{


    componentDidMount = () =>{
        const { params } = this.props.route
        if(params !== undefined){
            this.props.getUser(params,'PROFILE')
        }
    }


    render(){
        const { params } = this.props.route

        //const { uid } = item.uid
        /*this.props.navigation.setOptions({
            title: this.props.profile.userName
        })*/

        if(params === undefined){
            return(
                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                    <Text>Your Profile</Text>
                </View>
            )
        }
        else{
            return(
                <View style={{flex:1}}>
                    <Container style={styles.container}>
                        <Tabs
                            tabBarUnderlineStyle={{backgroundColor:"aliceblue"}}
                            renderTabBar={()=> <ScrollableTab />}>
                            <Tab
                                textStyle={styles.textStyle}
                                activeTextStyle={styles.whiteText}
                                heading="Introduce">
                                <UserIntroduce params={params} navigation={this.props.navigation} />
                            </Tab>
                            <Tab
                                textStyle={styles.textStyle}
                                activeTextStyle={styles.whiteText}
                                heading="Posts">
                                <UserPosts params={params} navigation={this.props.navigation}/>
                            </Tab>
                       </Tabs>
                   </Container>
                </View>
            )
        }
    }
}

const mapDispatchToProps = (dispatch) =>{
    return bindActionCreators({
        getUser,
    },dispatch)
}


const mapStateToProps = (state) =>{
    return{
        user: state.user,
        profile: state.profile
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(UserProfile)


const styles = StyleSheet.create({
    container:{
         height:'100%'
    },
    whiteText:{
         color:'#04196b'
    },
    textStyle:{
         color:'black'
    }
})
