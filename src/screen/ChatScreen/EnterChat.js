import React, { Component } from 'react'
import {View,Text,KeyboardAvoidingView,ScrollView,Image,Dimensions,FlatList,
        Platform,StyleSheet,SafeAreaView,TouchableOpacity,
        TextInput,Keyboard,TouchableWithoutFeedback} from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { StatusBar } from 'expo-status-bar'
import AntDesign from 'react-native-vector-icons/AntDesign'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getUser } from '../../redux/actions/user'

import addMessage from '../../redux/actions/post'

class EnterChat extends Component{

    // Individual Talk Screen
    componentDidMount = () =>{
        // Get the clicked User params( Like it is an User route Id ) from previous screen.
        const { params } = this.props.route
        if(params !== undefined){
            // If there's a param, retrive the User Profile.
            this.props.getUser(params,'PROFILE')
        }
    }

    state = {
        message : ''
    }

    sendMessage = () =>{
        if(this.state.message.replace(/\s/g).length){
           //this.props.addMessage(this.state.message)
            this.setState({message: ''})
        }
    }

    render(){
        this.props.navigation.setOptions({
             title :
                <View>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('UserProfile',this.props.profile.uid)}
                                      style={styles.headerContainer}>
                        <View style={{flex:0.5}}>
                            <Image source={{uri: this.props.profile.photo}} style={styles.userImage} />
                        </View>
                        <View style={{flex:1}}>
                        <Text style={styles.userName}>{this.props.profile.userName}</Text>
                        </View>
                    </TouchableOpacity>
                </View>,
             headerLeft:() =>(
                 <TouchableOpacity
                 onPress={() => this.props.navigation.goBack()}
                 style={{marginLeft:5}}>
                     <AntDesign name="arrowleft" size={28} color="white"/>
                 </TouchableOpacity>
             ),
             headerRight:() =>(
                 <View style={{marginRight:15}}>
                     <AntDesign name="setting" size={28} color="white" />
                 </View>
             )
        })

        const { params } = this.props.route

        if(params === undefined){
            return(
                <View style={styles.ownProfile}>
                    <Text>Your Profile</Text>
                </View>
            )
        }
        else{
        return(
            <SafeAreaView style={styles.container}>
               <StatusBar style="light" />
                    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? "padding" : "height"}
                                  style={styles.container}
                                  keyboardVerticalOffset={90}>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <>
                    <ScrollView contentContainerStyle={{paddingTop:15}}>
                       <View>
                           <Text>{this.props.profile.userName}</Text>
                           <Text>{this.props.profile.uid}</Text>
                           <Text>Hello</Text>
                       </View>
                    {/* {messages.map(({id,data}) =>(
                        data.email === auth.currentUser.email ? (
                            <View key={id} style={styles.reciever}>
                                <Text style={styles.receiveMessage}>{data.message}</Text>
                            </View>
                        ): (
                            <View key={id} style={styles.sender}>
                                <Text style={styles.senderMessage}>{data.message}</Text>
                            </View>
                        )

                        ))}*/}
                    </ScrollView>
                    <View style={styles.footer}>
                        <TextInput
                            value={this.state.message}
                            onChangeText={(message) => this.setState({message})}
                            onSubmitEditing={this.sendMessage}
                            placeholder="Send Message"
                            style={styles.textinput}
                        />
                        <TouchableOpacity
                            style={styles.send}
                            onPress={() => this.sendMessage()}
                            >
                            <FontAwesome
                            size={40}
                            name="angle-right"
                            style={[
                                (!this.state.message.replace(/\s/g,'').length) ?
                                {fontWeight: 'bold',color:'rgba(0,0,0,0.6)'}
                                :
                                {fontWeight:'bold',color:'black'}
                            ]}/>
                        </TouchableOpacity>
                    </View>
                    </>
              </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
        )
      }
    }
}

const mapDispatchToProps = (dispatch) =>{
    return bindActionCreators({
        getUser,
        addMessage
    },dispatch)
}


const mapStateToProps = (state) =>{
    return{
        user: state.user,
        profile: state.profile
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(EnterChat)


const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'white'
    },
    headerContainer:{
        height:'100%',
        width:150,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    ownProfile:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    footer:{
       flexDirection:'row',
       alignItems:'center',
       width:'100%',
       padding:15,
    },
    userImage:{
        width:30,
        height:30,
        borderRadius:50
    },
    userName:{
        fontSize:20,
        color:'white',
    },
    reciever:{
        padding:15,
        backgroundColor:'#CCC',
        alignSelf:'flex-end',
        borderRadius:20,
        marginRight:15,
        marginBottom:20,
        maxWidth:'80%',
        position:'relative',
    },
    receiveMessage:{
        color:'white',
        fontWeight:500,
        marginLeft:10,
        marginBottom:15,
        flexDirection:'row'
    },
    sender:{
        padding:15,
        backgroundColor:"#ccc",
        alignSelf:'flex-start',
        borderRadius:20,
        marginRight:15,
        marginBottom:20,
        maxWidth:'80%',
        position:'relative',
    },
    textinput:{
       // bottom:0,
       // height:40,
        flex:1,
        marginRight:15,
        borderColor:'transparent',
        backgroundColor:'#CCC',
        borderWidth:1,
        padding:10,
        color:'black',
        fontSize:15,
        borderRadius:30
    },
    receiveMessage:{

    },
    sendingContainer: {
        justifyContent: 'center',
        alignItems: 'center'
      },
    bottomComponentContainer: {
        justifyContent: 'center',
        alignItems: 'center'
      }
})