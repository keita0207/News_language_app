import React, { Component } from 'react';
import { StyleSheet, View, Text,TouchableOpacity,ActivityIndicator } from 'react-native'
import { Container, Tab, Tabs, ScrollableTab } from 'native-base';
import Fontawesome from 'react-native-vector-icons/FontAwesome'

import Tab1 from '../../tabs/tab1';
import Tab2 from '../../tabs/tab2';
import Tab3 from '../../tabs/tab3';
import Tab4 from '../../tabs/tab4';
import Tab5 from '../../tabs/tab5';
import Tab6 from '../../tabs/tab6';

import DataItem from '../NewsScreen/dataItem'

export class NewsLists extends Component{

     constructor(props) {
		super(props);
		this.state = {
			navigation: props.navigation,
			data: [],
			searchQuery: '',
			iconFilter: 'filter',
			showFilter: true,
			isLoading: true,
			rel: false,
			pop: false,
			pub: true,
			color: 'blue',
			fromDate: (new Date).toISOString().substring(0,10),
			toDate: (new Date).toISOString().substring(0,10),
			itemsFetched: 20,
			totalResults: 0,
			datas: null,
			setModalVisible: false,
			// ClickしたNewsの格納場所。Arrayではない？
			modalArticleData: {}
		}
     }

	handleItemDataOnPress = (articleData) => {
		this.setState({
		  // ClickするとModalが表示される。
		  setModalVisible: true,
		  modalArticleData: articleData
		});
	  }

     handleModalClose = () => {
     this.setState({
          setModalVisible: false,
          // Objectを空にする。
          modalArticleData: {}
     });
     }

     handlePress = () => {
     const {url, title} = this.data;
     this.props.onPress({url, title});
     }

	getData() {
		let sortBy = 'publishedAt';
		let itemsFetched = this.state.itemsFetched;
		if (this.state.rel === true) { sortBy = 'relevancy'
		} else if (this.state.pop === true) { sortBy = 'popularity'
		}
		this.setState({ isLoading: true });
		let q = encodeURIComponent(this.state.searchQuery.toLowerCase());
		let uri = `https://newsapi.org/v2/everything?q=${q}&language=en&sortBy=${sortBy}&pageSize=${itemsFetched}&from=${this.state.fromDate}&to=${this.state.toDate}&apiKey=8953a82cf3d447318585bfb3ef6f6944`

		fetch(uri)
			.then((response) => response.json())
			.then((responseJson) => {
				this.setState({ data: responseJson.articles, totalResults: responseJson.totalResults })
			})
			.catch((error) => {
				console.error(error);
			}).
			finally(() => {
				this.setState({ isLoading: false })
			})
	}

     render(){
          const view =(this.state.isLoading ? (
			<View style={styles.indicatorContainer}>
                    <ActivityIndicator animating={this.state.isLoading} color="green" />
                    <Text style={styles.indicatorText} children="Please Wait.." />
			</View>
		  ) : (
               <DataItem data={this.state.data}   keyExtractor={(item,index) => index.toString(1,100)}/>
		  ))

     return(
     <>
          <Container style={styles.container}>
               <Tabs
                    tabBarUnderlineStyle={{backgroundColor:"aliceblue"}}
                    renderTabBar={()=> <ScrollableTab />}>
                    <Tab
                         tabStyle={styles.tabStyle}
                         activeTabStyle={styles.activeTabStyle}
                         textStyle={styles.textStyle}
                         activeTextStyle={styles.whiteText}
                         heading="Japanese">
                         <Tab1 />
                    </Tab>
                    <Tab
                         tabStyle={styles.tabStyle}
                         activeTabStyle={styles.activeTabStyle}
                         textStyle={styles.textStyle}
                         activeTextStyle={styles.whiteText}
                         heading="Korean">
                         <Tab2 />
                    </Tab>
                    <Tab
                         tabStyle={styles.tabStyle}
                         activeTabStyle={styles.activeTabStyle}
                         textStyle={styles.textStyle}
                         activeTextStyle={styles.whiteText}
                         heading="Chinese">
                         <Tab3 />
                    </Tab>
                    <Tab
                         tabStyle={styles.tabStyle}
                         activeTabStyle={styles.activeTabStyle}
                         textStyle={styles.textStyle}
                         activeTextStyle={styles.whiteText}
                         heading="English">
                         <Tab4 />
                    </Tab>
                    <Tab
                         tabStyle={styles.tabStyle}
                         activeTabStyle={styles.activeTabStyle}
                         textStyle={styles.textStyle}
                         activeTextStyle={styles.whiteText}
                         heading="Spanish">
                         <Tab5 />
                    </Tab>
                    <Tab
                         tabStyle={styles.tabStyle}
                         activeTabStyle={styles.activeTabStyle}
                         textStyle={styles.textStyle}
                         activeTextStyle={styles.whiteText}
                         heading="Russian">
                         <Tab6 />
                    </Tab>
               </Tabs>


               {/* Users can search by clicking this button whatever they want to know */}
               <TouchableOpacity
                    onPress={() => this.state.navigation.navigate('Search')}
                    style={styles.searchContainer}>
                         <View style={styles.searchIcon}>
                              <Fontawesome
                              name="search"
                              size={30}
                              color="white" />
                         </View>
               </TouchableOpacity>
          </Container>
     </>
     )
    }
}

export default NewsLists

const styles = StyleSheet.create({
   container:{
     height:'100%'
   },
   tabStyle:{
     backgroundColor:'#04196b',
   },
   activeTabStyle:{
     backgroundColor:'#aba9ba'
   },
   whiteText:{
     color:'black'
   },
   textStyle:{
     color:'white'
   },
   indicatorContainer:{
     height:'100%',
     alignItems:'center',
     justifyContent:'center',
   },
   indicatorText:{
     marginTop:100
   },
   cardView:{
     justifyContent:'center',
     margin:10,
     borderRadius:20,
     borderColor:'#000',
     },
   cardContent:{
     flexDirection:'row',
     borderRadius:10,
     borderColor:'grey',
     borderWidth:1
   },
   cardImage:{
     width:130,
     height:130,
     resizeMode:'cover',
     borderTopLeftRadius:10,
     borderBottomLeftRadius:10
   },
   title:{
     fontSize:17,
     fontWeight:'bold'
   },
   description:{
     paddingTop:15,
     fontSize:13,
   },
   searchContainer:{
     position:'absolute',
     bottom:20,
     right:20
   },
   searchIcon:{
     width:50,
     height:50,
     justifyContent:'center',
     alignItems:'center',
     borderRadius:50,
     backgroundColor:'#04196b',
   }
})
