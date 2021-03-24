import React, { Component } from 'react';
import { Image,View,SafeAreaView } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right} from 'native-base';
import FontAwsome from 'react-native-vector-icons/FontAwesome'



const ChatLists = ( { navigation } ) => {

    return (
      <View>
        <Text>Helloooo</Text>
      </View>
    );
}

export default ChatLists;


/**
 <Container>
        <Content>
          <Card style={{flex: 1,}}
          >

            <CardItem style={{borderTopColor:'black',
                      borderTopWidth:1,borderRightWidth:1,borderLeftWidth:1}}>
              <Left>
                <Body>
                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                      <Text style={{fontWeight:'bold',fontSize:25,marginRight:5}}>Alina</Text>
                      <Text style={{fontSize:25}}>🇷🇺</Text>
                    </View>
                    <View style={{flexDirection:'row',alignItems:'center',
                                 justifyContent:'center'}}>
                        <Text  style={{color:'#1d3b59'}}>
                                 Russian,English,Italian
                        </Text>
                    </View>
                </Body>
              </Left>
            </CardItem>
            <CardItem style={{borderRightWidth:1,borderLeftWidth:1}}>
              <Body>
                <Image source={require('../assets/images/blove2.jpg')}
                       style={{height: 250, width: '100%', flex: 1,resizeMode:'contain'}}/>
                <Text numberOfLines={3}>
                  he flag for Russia, which may show as the letters RU on some platforms.
                  The Flag: Russia emoji is a flag sequence combining 🇷
                  Regional Indicator Symbol Letter R and 🇺 Regional Indicator Symbol Letter U.
                  These display as a single emoji on supported platforms. Flag: Russia was added to Emoji 1.0 in 2015.
                </Text>
              </Body>
            </CardItem>
            <CardItem style={{borderBottomColor:'black',borderRightWidth:1,borderLeftWidth:1,borderBottomWidth:1}}>
              <Left />
              <Body>
                <Button style={{borderRadius:20,width:100,justifyContent:'center',marginLeft:7}}
                        onPress={() => navigation.navigate('HomeDetail')}>
                  <Text style={{fontSize:25}}>
                    View
                  </Text>
                </Button>
              </Body>
              <Right>
                <View style={{flexDirection:'row'}}>
                      <View>
                        <Button onPress={() => navigation.navigate('HomeDetail')}
                        style={{borderRadius:20,borderColor:'blue',borderWidth:2,width:100,
                        backgroundColor:'skyblue'
                        }}>
                          <FontAwsome name='user' size={25} color='blue' style={{marginLeft:10}} />
                          <Text style={{fontSize:20,marginRight:0}}>Chat</Text>
                        </Button>
                      </View>
                </View>
              </Right>
            </CardItem>



            <CardItem style={{borderTopColor:'black',marginTop:20,
                      borderTopWidth:1,borderRightWidth:1,borderLeftWidth:1}}>
              <Left>
                <Body>
                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                      <Text style={{fontWeight:'bold',fontSize:25,marginRight:5}}>Sonya</Text>
                      <Text style={{fontSize:25}}>🇷🇺</Text>
                    </View>
                    <View style={{flexDirection:'row',alignItems:'center',
                                 justifyContent:'center'}}>
                        <Text  style={{color:'#1d3b59'}}>
                                 Russian,English
                        </Text>
                    </View>
                </Body>
              </Left>
            </CardItem>
            <CardItem style={{borderRightWidth:1,borderLeftWidth:1}}>
              <Body>
                <Image source={require('../assets/images/blove3.jpg')}
                       style={{height: 250, width: '100%', flex: 1,resizeMode:'contain'}}/>
                <Text numberOfLines={3}>
                  he flag for Russia, which may show as the letters RU on some platforms.
                  The Flag: Russia emoji is a flag sequence combining 🇷
                  Regional Indicator Symbol Letter R and 🇺 Regional Indicator Symbol Letter U.
                  These display as a single emoji on supported platforms. Flag: Russia was added to Emoji 1.0 in 2015.
                </Text>
              </Body>
            </CardItem>
            <CardItem style={{borderBottomColor:'black',borderRightWidth:1,borderLeftWidth:1,borderBottomWidth:1}}>
              <Left />
              <Body>
                <Button style={{borderRadius:20,width:100,justifyContent:'center',marginLeft:7}}
                        onPress={() => navigation.navigate('HomeDetail')}>
                  <Text style={{fontSize:25}}>
                    View
                  </Text>
                </Button>
              </Body>
              <Right>
                  <FontAwsome name='user-plus' size={25} color='blue' onPress={() => navigation.navigate('HomeDetail')} />
              </Right>
            </CardItem>


            <CardItem style={{borderTopColor:'black',marginTop:20,
                      borderTopWidth:1,borderRightWidth:1,borderLeftWidth:1}}>
              <Left>
                <Body>
                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                      <Text style={{fontWeight:'bold',fontSize:25,marginRight:5}}>Eva Elfie</Text>
                      <Text style={{fontSize:25}}>🇷🇺</Text>
                    </View>
                    <View style={{flexDirection:'row',alignItems:'center',
                                 justifyContent:'center'}}>
                        <Text  style={{color:'#1d3b59'}}>
                                 Russian,English
                        </Text>
                    </View>
                </Body>
              </Left>
            </CardItem>
            <CardItem style={{borderRightWidth:1,borderLeftWidth:1}}>
              <Body>
                <Image source={require('../assets/images/25.jpg')}
                       style={{height: 250, width: '100%', flex: 1,resizeMode:'contain'}}/>
                <Text numberOfLines={3}>
                  he flag for Russia, which may show as the letters RU on some platforms.
                  The Flag: Russia emoji is a flag sequence combining 🇷
                  Regional Indicator Symbol Letter R and 🇺 Regional Indicator Symbol Letter U.
                  These display as a single emoji on supported platforms. Flag: Russia was added to Emoji 1.0 in 2015.
                </Text>
              </Body>
            </CardItem>
            <CardItem style={{borderBottomColor:'black',borderRightWidth:1,borderLeftWidth:1,borderBottomWidth:1}}>
              <Left />
              <Body>
                <Button style={{borderRadius:20,width:100,justifyContent:'center',marginLeft:7}}
                        onPress={() => navigation.navigate('HomeDetail')}>
                  <Text style={{fontSize:25}}>
                    View
                  </Text>
                </Button>
              </Body>
              <Right>
                  <FontAwsome name='user-plus' size={25} color='blue' onPress={() => navigation.navigate('HomeDetail')} />
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
 */