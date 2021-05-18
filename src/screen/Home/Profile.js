import React, { Component } from 'react';
import { StyleSheet, View,Text } from 'react-native'
import { Container, Tab, Tabs, ScrollableTab } from 'native-base';
import Posts from './Posts'
import Introduce from './Introduce'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getUser } from '../../redux/actions/user'
import { getPosts } from '../../redux/actions/post'

class Profile extends Component{

     componentDidMount = () =>{
          const { params } = this.props.route
          if(params !== undefined){
              this.props.getUser(params,'PROFILE')
          }
      }

     render(){
          const { params } = this.props.route

          this.props.navigation.setOptions({
              title: this.props.user.userName
          })

          if(params !== undefined){
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
                                    <Introduce params={params} navigation={this.props.navigation} />
                                </Tab>
                                {/*　自分の投稿に変える必要あり。今のままだと、全員の投稿が表示されるため。 */}
                                <Tab
                                    textStyle={styles.textStyle}
                                    activeTextStyle={styles.whiteText}
                                    heading="Posts">
                                    <Posts params={params} navigation={this.props.navigation}/>
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
         getPosts
     },dispatch)
}

const mapStateToProps = (state) =>{
     return{
         user: state.user
     }
 }

// mapStateToPropsは必ず最初に記述しなければいけない
export default connect(mapStateToProps,mapDispatchToProps,)(Profile)

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

