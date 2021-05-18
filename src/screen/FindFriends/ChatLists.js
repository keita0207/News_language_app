import React, { Component } from 'react';
import { Image, View, SafeAreaView, ScrollView,FlatList,
         Text,Dimensions, TouchableOpacity, StyleSheet } from 'react-native';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getUser, getAllUsers } from '../../redux/actions/user'

const screenWidth = Dimensions.get('window').width


class ChatLists extends Component{

  componentDidMount = () =>{
    // Get Users up to 10
    this.props.getAllUsers(10)
  }

  render(){
    if(this.props.user)
    return(
      <ScrollView>
          <SafeAreaView style={styles.container}>
              <FlatList
              numColumns={1}
              keyExtractor={(item) => JSON.stringify(item.uid)}
              data={this.props.user.users}
              renderItem={({item}) =>(
                <>
                  <TouchableOpacity
                    style={styles.userContainer}
                    onPress={() => this.props.navigation.navigate('UserProfile',item.uid)}>
                        <View style={styles.imageContainer}>
                          {
                            (item.photo) ?
                            <Image source={{uri:item.photo}} style={styles.userImage}/>
                            :
                            <Image source={require('../../assets/images/user.jpg')} style={styles.userImage} />
                          }
                        </View>
                        <View style={styles.userInformationContainer}>
                            <View style={styles.userBasicInformation}>
                                <Text style={styles.userName}><Text>{item.userName}</Text></Text>
                                <Text style={styles.userAge}>{item.age} 🇷🇺 </Text>
                                <Text style={styles.userAge}> / F /</Text>
                            </View>
                            <View style={styles.userCity}>
                                <Text style={styles.userCityText}>Saint Peterburg </Text>
                            </View>
                            <View style={styles.userDescription}>
                               <Text numberOfLines={2}>{item.introduction}</Text>
                            </View>
                        </View>
                  </TouchableOpacity>
                </>
            )}
          />
          </SafeAreaView>
      </ScrollView>
    )
  }
}

const mapDispatchToProps = (dispatch) =>{
  return bindActionCreators({
      getUser,
      getAllUsers
  },dispatch)
}


const mapStateToProps = (state) =>{
  return{
      user: state.user,
      users: state.users
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ChatLists)

const styles = StyleSheet.create({
  container:{
    width:screenWidth,
    flex:1
  },
  userContainer:{
    flexDirection:'row',
    marginBottom:10,
    borderWidth:2,
    borderColor:"#ccc",
  },
  imageContainer:{
    height:130,
    justifyContent:'center'
  },
  userImage:{
    height:"80%",
    width:100,
    borderRadius:50
  },
  userInformationContainer:{
    width:'100%'
  },
  userBasicInformation:{
    width:'100%',
    flexDirection:'row',
    alignItems:'center',
    paddingHorizontal:10,paddingTop:5,
    borderBottomColor:'#ccc',
    borderBottomWidth:1
  },
  userName:{
    fontSize:25,
    marginRight:5
  },
  userAge:{
    fontSize:15
  },
  userCity:{
    width:'100%',
    paddingHorizontal:10,
    paddingTop:5,
    borderBottomColor:'#ccc',
    borderBottomWidth:1
  },
  userCityText:{
    fontSize:15
  },
  userDescription:{
    paddingHorizontal:10,
    paddingTop:9
  }
})