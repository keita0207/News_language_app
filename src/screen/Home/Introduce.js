import React,{ Component } from 'react';
import { View, Text, Dimensions, SafeAreaView, ScrollView,
         Image, StyleSheet, TouchableOpacity }
        from 'react-native';

import Fontawesome from 'react-native-vector-icons/FontAwesome'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getUser, updateUserAge, updateUserIntroduction } from '../../redux/actions/user'

const screenWidth = Dimensions.get('window').width


class PersonProfile extends Component{

    componentDidMount = () =>{
       this.props.getUser(this.props.user.uid,'PROFILE')
    }

    render(){
        this.props.navigation.setOptions({
            title: 'Profile',
            headerRight:()=>(
                <TouchableOpacity
                style={{marginRight:15}}
                onPress={() => this.props.navigation.navigate('EditProfile')}>
                    <Fontawesome name="edit" size={25} color="white" />
                </TouchableOpacity>
            )
        })

         return (
            <ScrollView style={{flex:1}}>
                    <View style={styles.topContainer}>
                       <Image source={{uri: this.props.profile.photo}} style={styles.topImage} />
                       <View style={styles.numberContainer}>
                           <View style={styles.individualNumberContainer}>
                               <Text style={styles.bold}>23</Text>
                               <Text>Posts</Text>
                           </View>
                           <View style={styles.individualNumberContainer}>
                               <Text style={styles.bold}>222</Text>
                               <Text>Followes</Text>
                           </View>
                           <View style={styles.individualNumberContainer}>
                              <Text style={styles.bold}>1000</Text>
                               <Text>Folloing</Text>
                           </View>
                       </View>
                    </View>
                    <View style={styles.imageContainer}>
                            <ScrollView pagingEnabled={true} horizontal={true} style={styles.scrollImageContainer}>
                                {
                                    (this.props.user.photo) ?
                                    <Image style={styles.image} source={{uri: this.props.user.photo}} />
                                    : <View />
                                }
                                {
                                    (this.props.user.profilePic2) ?
                                    <Image style={styles.image} source={{uri: this.props.user.profilePic2}} />
                                    : <View />
                                }
                                {
                                    (this.props.user.profilePic3) ?
                                    <Image style={styles.image} source={{uri: this.props.user.profilePic3}} />
                                    : <View />
                                }
                                {
                                    (this.props.user.profilePic4) ?
                                    <Image style={styles.image} source={{uri: this.props.user.profilePic4}} />
                                    : <View />
                                }
                                {
                                    (this.props.user.profilePic5) ?
                                    <Image style={styles.image} source={{uri: this.props.user.profilePic5}} />
                                    : <View />
                                }
                            </ScrollView>
                      </View>
                      <View style={styles.userInfoBorder}>
                            <View style={styles.userInfoContainer}>
                                <Text style={styles.userInfoText}>{this.props.user.userName} / </Text>
                                <Text style={styles.userInfoText}>{this.props.user.age} / Female / 🇷🇺</Text>
                            </View>
                      </View>
                      <ScrollView
                            pagingEnabled horizontal
                            style={styles.descriptionContainer}>
                            <View style={styles.description}>
                              <Text style={{fontSize:20}}>{this.props.user.introduction}</Text>
                            </View>
                      </ScrollView>
                      <Text>{this.props.user.uid}</Text>
                </ScrollView>
            )

    }
};

const mapDispatchToProps = (dispatch) =>{
    return bindActionCreators({
        getUser,
        updateUserAge,
        updateUserIntroduction
    },dispatch)
}


const mapStateToProps = (state) =>{
    return{
        user: state.user,
        profile: state.profile
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(PersonProfile)


const styles =  StyleSheet.create({
    topContainer:{
        height:150,
        width:'100%',
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row'
    },
    btnpress:{
        justifyContent:'center',
        height:30,
        color:'white'
    },
    btnnormal:{
        backgroundColor:'aliceblue',
        justifyContent:'center',
        height:30,
    },
    numberContainer:{
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row'
    },
    individualNumberContainer:{
        justifyContent:'center',
        alignItems:'center',
        margin:10
    },
    languageText:{
        backgroundColor:'gray',
        marginLeft:0,
    },
    topImage:{
        height:90,
        width:90,
        margin:20,
        borderRadius:50,
    },
    imageContainer:{
        width:'100%',
        height:300,
        justifyContent:'center',
        alignItems:'center',
        marginTop:0
    },
    scrollImageContainer:{
        height:300,
        width:'100%',
        flexDirection:'row'
    },
    image:{
        height:300,
        width:screenWidth
    },
    userInfoBorder:{
        height:50,
        borderBottomColor:'black',
        borderBottomWidth:1
    },
    userInfoContainer:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:15,
        marginRight:5,
        marginHorizontal:20
    },
    userInfoText:{
        fontSize:25
    },
    descriptionContainer:{
        alignContent:'stretch',
        flexDirection:'row',
        width:'100%',
        marginRight:0,
        marginTop:15,
        marginHorizontal:0
    },
    description:{
        marginHorizontal:10,
        marginTop:30
    },
    bold:{
        fontWeight:'bold'
    }
})


