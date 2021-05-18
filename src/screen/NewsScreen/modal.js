import React, { Component } from 'react';
import { Dimensions, Modal, Share, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview'
import { Container, Header, Content, Body, Left, Icon, Right, Title, Button } from 'native-base';

const webViewHeight = Dimensions.get('window').height - 56;

export default class ModalElement extends Component{

    constructor(props) {
        super(props);
    }

    handleClose = () => {
        return this.props.onClose();
    }

    // Enable users to share news on their SNS
    handleShare = () => {
        const {url, title} = this.props.articleData;
        message = `${title}\n\nRead More @${url}\n\nShared via News App`;
        return Share.share(
            { title, message, url: message },
            { dialogTitle:`Share ${title}` }
        );
    }

    render() {
        const { showModal, articleData } = this.props;
        const { url } = articleData;

        if( url != undefined ) {
        return (
            <Modal
                animationType="slide"
                transparent
                visible={showModal}
                onRequestClose={this.handleClose}
            >
                <Header style={styles.header}>
                        <Left>
                            <Button onPress={this.handleClose} transparent>
                                <Icon name="close" style={styles.headerIcon}/>
                            </Button>
                        </Left>
                        <Body>
                            <Title children={articleData.title} style={styles.heaerBody}/>
                        </Body>
                        <Right>
                            <Button onPress={this.handleShare} transparent>
                                <Icon name="share" size={20} style={styles,headerIcon} />
                            </Button>
                        </Right>
                </Header>
                <Container style={styles.container}>
                    <Content contentContainerStyle={{height: webViewHeight}}>
                        <WebView source={{uri:url}} style={styles.WebView}
                        onError={this.handleClose} startInLoadingState
                        scalesPageToFit
                        />
                    </Content>
                </Container>
            </Modal>
        )
        ;
        }
        // If News is not undefined or null, on this screen news show up nothing.
        else {
            return null;
        }
    }
}

const styles = StyleSheet.create({
    header:{
        backgroundColor:'#04196b'
    },
    headerIcon:{
        color:'white',
        fontSize:20
    },
    heaerBody:{
        color: 'white'
    },
    container:{
        marginBottom:0,
        backgroundColor:'#fff'
    },
    WebView:{
        flex:1
    }
})
