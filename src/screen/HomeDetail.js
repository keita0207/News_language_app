import React,{useState, Component} from 'react';
import { View, Text, Dimensions, SafeAreaView, ScrollView,
         Image, TouchableHighlight, StyleSheet,Button }
        from 'react-native';



const PersonProfile = ( {navigation}) =>{

    const [isPress, setIsPress] = useState(false)

    const touchProps = {
        activeOpacity : 1,
        underlayColor: '#c97fc7',
        color:'white',
        style: isPress ? styles.btnpress : styles.btnnormal,
        onHideUnderlay : () => setIsPress(false),
        onShowUnderlay : () => setIsPress(true),
        onPress: () => console.log('Changed.')
    }

const images = [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBC2fOmkf0r5lebcwbsNgA0xzCcTJguynLTQ&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkIYAQY2U97SvR61hspTA1B8KQecviLEPn7A&usqp=CAU',
        'data:image/jpeg;base64,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'
]

const { width } = Dimensions.get('window') // windowを指定すると、フル画面の要素が取れる。
const height = width * 100 / 80


       return (
          <SafeAreaView>
              <ScrollView>
             
                  <View style={{height,width}}>
                    <ScrollView pagingEnabled horizontal style={{height,width}}>
                        {
                            images.map((image,index) => (
                                <Image style={{
                                        height,
                                        width,
                                        resizeMode:'contain'
                                    }}
                                        source={{url :image }}
                                        key={index}/>
                            )
                        )}
                    </ScrollView>
                  </View>
                  <View style={{flexDirection:'row',alignItems:'center',marginVertical:20}}>
                        <Text style={{fontSize:25,fontWeight:'bold',
                              marginRight:10,marginHorizontal:10}}>
                                Alina {/* 字数制限を設ける 15 letters? */}
                        </Text>
                        <Text style={{fontSize:25,marginRight:70}}>🇷🇺</Text>
                        <TouchableHighlight {...touchProps}>
                            <Text style={{textAlign:'center'}}>Want to Talk</Text>
                        </TouchableHighlight>
                        <Button title="Edit" onPress={() => navigation.push('EditProfile')} />
                  </View>
                  <View>
                      <Text style={{fontSize:30,marginHorizontal:10}}>
                        The Flag: Italy emoji is a flag sequence combining 🇮
                        Regional Indicator Symbol Letter I and 🇹
                        Regional Indicator Symbol Letter T. These display as a single emoji on supported platforms. 
                        Flag: Italy was added to Emoji 1.0 in 2015.
                      </Text>
                  </View>
              </ScrollView>
          </SafeAreaView>
        );
};

const styles =  StyleSheet.create({
    btnpress:{
        justifyContent:'center',
        width:100,
        height:30,
        borderRadius:20,
        borderWidth:3,
        borderColor:'#c97fc7',
        color:'white'
    },
    btnnormal:{
        backgroundColor:'aliceblue',
        justifyContent:'center',
        width:100,
        height:30,
        borderRadius:20,
        borderColor:'#c97fc7',
        borderWidth:3
    }
})

export default PersonProfile;
