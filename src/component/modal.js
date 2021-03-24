import React, { Component,useLayoutEffect } from 'react';
import { Dimensions, Modal, Share } from 'react-native';
import { WebView } from 'react-native-webview'
import {Container, Header, Content, Body, Left, Icon, Right, Title, Button} from 'native-base';

const webViewHeight = Dimensions.get('window').height - 56;

// create a component
export default class ModalElement extends Component{

    constructor(props) {
        super(props);
    }

    handleClose = () => {
        return this.props.onClose();
    }

    handleShare = () => {
        const {url, title} = this.props.articleData;
        message = `${title}\n\nRead More @${url}\n\nShared via RN News App`;
        return Share.share(
            {title, message, url: message},
            {dialogTitle:`Share ${title}`}
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
                <Header style={{backgroundColor:'#009387'}}>
                        <Left>
                            <Button onPress={this.handleClose} transparent>
                                <Icon name="close" style={{color: 'white', fontSize: 20}}/>
                            </Button>
                        </Left>
                        <Body>
                            <Title children={articleData.title} style={{color: 'white'}}/>
                        </Body>
                        <Right>
                            <Button onPress={this.handleShare} transparent>
                                <Icon name="share" style={{color: 'white', fontSize: 20}}/>
                            </Button>
                        </Right>
                </Header>
                <Container style={{marginBottom:0, backgroundColor:'#fff'}}>
                    <Content contentContainerStyle={{height: webViewHeight}}>
                        <WebView source={{uri:url}} style={{flex: 1}}
                        onError={this.handleClose} startInLoadingState
                        scalesPageToFit
                        />
                    </Content>
                </Container>
            </Modal>
        );
        } else {
            return null;
        }
    }
}

//make this component available to the app
/**
 <Header style={{backgroundColor:'#009387'}}>
                        <Left>
                            <Button onPress={this.handleClose} transparent>
                                <Icon name="close" style={{color: 'white', fontSize: 20}}/>
                            </Button>
                        </Left>
                        <Body>
                            <Title children={articleData.title} style={{color: 'white'}}/>
                        </Body>
                        <Right>
                            <Button onPress={this.handleShare} transparent>
                                <Icon name="share" style={{color: 'white', fontSize: 20}}/>
                            </Button>
                        </Right>
                    </Header>
 */