import React, { Component } from 'react';
import { StyleSheet, Text, View,SafeAreaView,TouchableOpacity,
         Switch,Dimensions,Image,ScrollView } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import {auth,db} from '../firebase/db'


const Home = ({navigation}) =>{

  const signOutUser = () => {
     auth.signOut().then(() =>{
       navigation.replace('Auth')
     })
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
       <ScrollView>
        <View style={{backgroundColor:'#f5f0f0'}}>
          <View>
            <View>
                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                  <Image source={require('../assets/images/berna1.jpg')}
                  style={{width:'30%',height:150,borderRadius:10,borderColor:'black',borderWidth:4,marginTop:10}} />
                  <Text style={{color:'#555',fontSize:20,marginBottom:20,margin:20}}>{auth?.currentUser?.displayName}</Text>
                </View>
            </View>
          <View>
            <View style={styles.part}>
              <TouchableOpacity style={styles.itemRow} title="Click" onPress={() => navigation.navigate('HomeDetail')}>
                <FontAwesome name="user" size={20} />
                <Text style={styles.text}>Edit Profile</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.part}>
              <TouchableOpacity  style={styles.itemRow}>
              <FontAwesome name="bookmark" size={20} />
                <Text style={styles.text}>Reserved News</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.part}>
              <TouchableOpacity  style={styles.itemRow}>
              <FontAwesome name="bell" size={20} />
                <Text style={styles.text}>Notification</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.part}>
              <TouchableOpacity
               onPress={signOutUser}
               style={styles.itemRow}>
              <FontAwesome name="user" size={20} />
                <Text style={styles.text}>Log Out</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.part}>
              <TouchableOpacity  style={styles.itemRow}>
              <FontAwesome name="user" size={20} />
                <Text style={styles.text}>Contact us</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.part}>
              <TouchableOpacity  style={styles.itemRow}>
              <FontAwesome name="user" size={20} />
                <Text style={styles.text}>Policy</Text>
              </TouchableOpacity>
            </View>

            <View style={{flexDirection:'row',alignItems:'center',
                  height:45,width:'100%',paddingHorizontal:5}}>
                <Text style={styles.text}>Dark Mode</Text>
                <Switch style={{marginLeft:5}} />
            </View>
          </View>
        </View>
      </View>
      </ScrollView>
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  part:{
      backgroundColor:'aliceblue',
      justifyContent:'space-between',
      paddingHorizontal:20,
      paddingVertical:25,
      borderBottomWidth:1,
      borderBottomColor:'black',
      marginBottom:1,
  },
  text:{
    fontSize:15,
    marginLeft:20
  },
  itemRow:{
    flexDirection:'row',
    alignItems:'center'
  }
})

export default Home
