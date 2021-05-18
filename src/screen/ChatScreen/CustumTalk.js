import React,{ Component } from 'react'
import { Text, View, Dimensions, FlatList,
         SafeAreaView, TouchableOpacity, Image, StyleSheet} from 'react-native'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getUser } from '../../redux/actions/user'

const screenWidth = Dimensions.get('window').width

class CustumTalk extends Component{

    componentDidMount = () =>{
        this.props.getUser(this.props.user.following,'PROFILE')
    }

    // Separate Component
    separate = () =>{
        return(
            <View
                style={styles.separate}
            />
        )
    }

    render(){
        return(
           <SafeAreaView>
             <View style={styles.container}>
               <FlatList
                data={this.props.user.following}
                refreshing={true}
                keyExtractor={(item) => JSON.stringify(item.uid)}
                ItemSeparatorComponent={this.separate}
                renderItem={({item}) =>(
                    <>
                    <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('EnterChat',item.uid)}
                    >
                        <View style={styles.user}>
                            {
                                (item.photo) ?
                                <Image source={{uri:item.photo}} style={styles.userImage} />
                                :
                                <Image source={require('../../assets/images/user.jpg')} style={styles.userImage}/>
                            }
                            <View style={styles.userName}>
                                <Text style={styles.userNameText}>{item.userName}</Text>
                            </View>
                            <Text>{item.uid}</Text>
                        </View>
                    </TouchableOpacity>
                    </>
                )}
                />
             </View>
           </SafeAreaView>
        )
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
        users: state.users,
        profile: state.profile
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CustumTalk)

const styles = StyleSheet.create({
    separate:{
        borderColor:'gray',
        borderBottomWidth:1
    },
    container:{
        width:screenWidth,
        marginTop:10,
    },
    user:{
        height:80,
        flexDirection:'row',
        alignItems:'center'
    },
    userImage:{
        height:50,
        width:50,
        borderRadius:50
    },
    userName:{
        marginBottom:40
    },
    userNameText:{
        marginHorizontal:20,
        marginVertical:5,
        fontWeight:'bold'
    }
})