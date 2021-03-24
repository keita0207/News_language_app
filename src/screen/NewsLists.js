import React, { Component } from 'react';
import {StatusBar,View,SafeAreaView,StyleSheet} from 'react-native'
import { Container, Tab, Tabs, ScrollableTab } from 'native-base';
import Tab1 from '../tabs/tab1';
import Tab2 from '../tabs/tab2';
import Tab3 from '../tabs/tab3';
import Tab4 from '../tabs/tab4';
import Tab5 from '../tabs/tab5';
import Tab6 from '../tabs/tab6';

const NewsLists = ({navigation}) => {
     return(
     <Container style={styles.container}>
        <Tabs tabBarUnderlineStyle={{backgroundColor:'white'}}  renderTabBar={()=> <ScrollableTab />}>
          <Tab
               tabStyle={styles.tabStyle}
               activeTabStyle={styles.activeTabStyle}
               textStyle={styles.whiteText}
               activeTextStyle={styles.whiteText}
               heading="Japanese">
               <Tab1 />
          </Tab>
          <Tab
               tabStyle={styles.tabStyle}
               activeTabStyle={styles.activeTabStyle}
               textStyle={styles.whiteText}
               activeTextStyle={styles.whiteText}
               heading="Korean">
               <Tab2 />
          </Tab>
          <Tab
              tabStyle={styles.tabStyle}
              activeTabStyle={styles.activeTabStyle}
              textStyle={styles.whiteText}
              activeTextStyle={styles.whiteText}
              heading="Chinese">
               <Tab3 />
          </Tab>
          <Tab
               tabStyle={styles.tabStyle}
               activeTabStyle={styles.activeTabStyle}
               textStyle={styles.whiteText}
               activeTextStyle={styles.whiteText}
               heading="English">
               <Tab4 />
          </Tab>
          <Tab
               tabStyle={styles.tabStyle}
               activeTabStyle={styles.activeTabStyle}
               textStyle={styles.whiteText}
               activeTextStyle={styles.whiteText}
               heading="Spanish">
               <Tab5 />
          </Tab>
          <Tab
               tabStyle={styles.tabStyle}
               activeTabStyle={styles.activeTabStyle}
               textStyle={styles.whiteText}
               activeTextStyle={styles.whiteText}
               heading="Russian">
               <Tab6 />
          </Tab>
        </Tabs>
        </Container>
     )
}

export default  NewsLists

const styles = StyleSheet.create({
   container:{
        marginTop:0
   },
   tabStyle:{
     backgroundColor:'#009387'
   },
   activeTabStyle:{
     backgroundColor:'#009387'
   },
   whiteText:{
        color:'white'
   }
})