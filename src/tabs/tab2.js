import React, { Component } from 'react';
import { Alert, View, ActivityIndicator, StyleSheet } from 'react-native';
import { Container, List, Text } from 'native-base';

import DataItem from '../screen/NewsScreen/dataItem';
import Modal from '../screen/NewsScreen/modal';

import { getArticles } from '../service/news';

// Korean News
export default class tab2 extends Component {

    constructor(props) {
      super(props);

      this.state = {
        isLoading: true,
        data: null,
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

    componentDidMount() {
      getArticles().then(data => {
        this.setState({
          isLoading: false,
          data: data
        });
      }, error => {
        Alert.alert('Error', 'Something went wrong!');
      }
      )
    }

    render() {
      console.log(this.state.data);

      // isLoading = trueの場合に、Loading Screenが表示される。
      const view = this.state.isLoading ? (
        <View style={styles.indicatorContainer}>
          <ActivityIndicator animating={this.state.isLoading} color="#00f0ff" />
          <Text style={styles.indicatorText} children="Please Wait.." />
        </View>
      ) : (
        <List
        dataArray={this.state.data}
        renderRow={(item,key) => {
            return (
              <DataItem onPress={this.handleItemDataOnPress} data={item}
              />
            )
        }} />
      )

      return (
        <Container style={styles.container}>
          <View>
            {view}
          </View>
          <Modal
            showModal={this.state.setModalVisible}
            articleData={this.state.modalArticleData}
            onClose={this.handleModalClose}
          />
        </Container>
      );
    }
  }

const styles = StyleSheet.create({
  indicatorContainer:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  indicatorText:{
    marginTop:10
  },
  container:{
    width:"100%",
    marginRight:30
  }
})