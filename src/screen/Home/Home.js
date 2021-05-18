import React,{ Component } from 'react'
import { StyleSheet,View,SafeAreaView,TouchableOpacity,
         Image,Text,Switch,ScrollView } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
import Entypo from 'react-native-vector-icons/Entypo'
import firebase from 'firebase'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getUser } from '../../redux/actions/user'


class Home extends Component {

   signOutUser = () => {
      firebase.auth().signOut().then(() =>{
      this.props.navigation.navigate('Auth')
      })
   }

   // Get a loggin User Profile
   componentDidMount = () => {
       this.props.getUser(this.props.user.uid,'PROFILE')
   }

render(){
  return (
    // Change to Flatlist
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
            <View style={styles.part}>
              <View style={styles.itemRow}>
                  <View style={styles.userInfo}>
                    <View>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('TakingPic')}>
                          {
                            (this.props.user.photo === undefined) ?
                            <Image style={styles.userImage} source={require('../../assets/images/user.jpg')} />
                            :
                            <Image style={styles.userImage} source={{uri:this.props.user.photo}}/>
                          }
                          <View style={styles.addImageButton}>
                            <FontAwesome name="plus" size={20} color="white" />
                          </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.userTextContainer}>
                          <Text style={styles.userName}>
                            {this.props.user.userName}
                          </Text>
                          <Text>{this.props.user.age} </Text>
                          {/* National Flagを入れとく？ */}
                          <Text style={styles.userNationality}>🇷🇺</Text>
                    </View>
                  </View>
              </View>
            </View>

            <View style={styles.part}>
                <TouchableOpacity style={styles.itemRow} title="Click" onPress={() => this.props.navigation.navigate('Profile')}>
                  <View style={styles.iconContainer}>
                    <FontAwesome name="gear" size={25} />
                  </View>
                  <Text style={styles.text}>Edit Profiles</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.part}>
                  <TouchableOpacity  style={styles.itemRow} onPress={() => this.props.navigation.navigate('TakingPic')}>
                      <View style={styles.iconContainer}>
                      <FontAwesome name="bookmark" size={25} />
                      </View>
                      <Text style={styles.text}>Shop</Text>
                  </TouchableOpacity>
            </View>
              <View style={styles.part}>
                  <TouchableOpacity
                  onPress={this.signOutUser}
                  style={styles.itemRow}>
                    <View style={styles.iconContainer}>
                      <Feather name="log-out" size={25} />
                    </View>
                    <Text style={styles.text}>Log Out</Text>
                  </TouchableOpacity>
              </View>
              <View style={styles.part}>
                  <TouchableOpacity  style={styles.itemRow}>
                    <View style={styles.iconContainer}>
                      <FontAwesome name="envelope-o" size={25} />
                    </View>
                    {/* GmailかIcloud mailで送信可能に設定する? */}
                    <Text style={styles.text}>Contact us</Text>
                  </TouchableOpacity>
              </View>
              <View style={styles.part}>
                  <TouchableOpacity  style={styles.itemRow}>
                    <View style={styles.iconContainer}>
                      <Entypo name="text" size={25} />
                    </View>
                    {/* Privacy Policyは必ず記載しなくてはならない。*/}
                    <Text style={styles.text}>Policy</Text>
                  </TouchableOpacity>
              </View>
                {/*　気軽に通知を切れるように、マッチングアプリに興味ない人(ニュースだけを読みたい人用)に必須な機能かも？ */}
              <View style={styles.switch}>
                    <Text style={styles.text}>Notification Off</Text>
                    <Switch style={{marginLeft:5}} />
              </View>
              <View style={styles.switch}>
                    <Text style={styles.text}>Dark Mode</Text>
                    <Switch style={{marginLeft:10}} />
              </View>
      </ScrollView>
    </SafeAreaView>
    );
  }
}

const mapDispatchToProps = (dispatch) =>{
  return bindActionCreators({
      getUser
  },dispatch)
}

const mapStateToProps = (state) =>{
  return{
      user: state.user,
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)

const styles = StyleSheet.create({
  part:{
      justifyContent:'space-between',
      paddingHorizontal:20,
      paddingVertical:25,
      borderBottomWidth:1,
      borderBottomColor:'black',
      marginBottom:1,
  },
  userInfo:{
    justifyContent:'center',
    alignItems:'center',
    marginTop:0,
    width:'100%'
  },
  userImage:{
    width:100,
    height:100,
    margin:20,
    borderRadius:50
  },
  addImageButton:{
    position:'absolute',
    bottom:15,
    right:10,
    padding:10,
    borderRadius:50,
    backgroundColor:'#04196b',
  },
  userTextContainer:{
    flexDirection:'row',
    alignItems:'center'
  },
  userName:{
    color:'#555',
    fontSize:30
  },
  userNationality:{
    marginLeft:10,
    fontSize:30
  },
  text:{
    fontSize:15,
    marginLeft:20
  },
  itemRow:{
    flexDirection:'row',
    alignItems:'center'
  },
  iconContainer:{
    width:30
  },
  gallery:{
    width:'30%',
    height:150,
    borderRadius:10,
    borderColor:'#ccc',
    borderWidth:1,
    marginTop:10
  },
  switch:{
    flexDirection:'row',
    alignItems:'center',
    height:55,
    width:'100%',
    paddingHorizontal:5
  }
})





