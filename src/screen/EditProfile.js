import React, { useState, useEffect } from 'react';
import { TextInput, SafeAreaView, ScrollView,Dimensions,Button } from 'react-native';
import { View, Text } from 'native-base';
import CountryPicker from 'react-native-country-picker-modal';
import { Input } from 'react-native-elements'
import {FloatingLabelInput} from 'react-native-floating-label-input';


const EditProfile = ( { navigation } ) => {

  const [name, setName] = useState('')
  const [show, setShow] = useState(false)

  useEffect(()=>{
    const timeout = setTimeout(() => {
      setShow(!show)
    }, 5000);
    return ()=> clearTimeout(timeout)
  },[show])

  const [introduce, setIntroduce] = useState('')
  const [countryCode, setCountryCode] = useState('')
  const [country, setCountry] = useState(null)
  const [withCountryNameButton, setWithCountryNameButton] = useState(
    false,
  )
  const [withFlag, setWithFlag] = useState(true)
  const [withEmoji, setWithEmoji] = useState(true)
  const [withFilter, setWithFilter] = useState(true)
  const [withAlphaFilter, setWithAlphaFilter] = useState(true)
  const [withCallingCode, setWithCallingCode] = useState(true)
  const onSelect = (country) => {
    setCountryCode(country.cca2)
    setCountry(country)
  }


  /*const [date, setDate] = useState('')
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (entereddate) => {
    setDate(entereddate)
    hideDatePicker();
  };

*/
    return (
      <SafeAreaView style={{height:Dimensions.get('window').height}}>
       
        <ScrollView>
        <View style={{flex:1}}>
           <View style={{alignItems:'center',marginVertical:30}}>
                <Text style={{fontSize:30}}>Edit Profile</Text>
            </View>
            <View>
               <View style={{alignItems:'center'}}>
                 <View style={{width:'80%'}}>
                 <FloatingLabelInput
                    label={'username'}
                    togglePassword={show}
                    value={name}
                    onChangeText={(value) => setName(value)}
                  />
                 </View>

                 <View style={{width:330}}>
                  <View style={{borderWidth:2,borderColor:'#526982',
                       width:'40%',borderRadius:30,marginVertical:20,height:40,
                       justifyContent:'center',alignItems:'center'}}>
                    <CountryPicker
                    {...{
                        countryCode,
                        withFilter,
                        withFlag,
                        withCountryNameButton,
                        withAlphaFilter,
                        withCallingCode,
                        withEmoji,
                        onSelect,
                    }}
                  />
                  </View>
                 </View>


                 <View style={{borderWidth:2,borderColor:'#526982',
                       width:'80%'}}>
                   <TextInput
                      placeholder="Introduce Yourself"
                      numberOfLines = {100}
                      value={introduce}
                      onChangeText={(text) => setIntroduce(text)}
                      style={{fontSize:20,marginTop:0}}
                      multiline={true}
                      style={{height:300,fontSize:20}}
                    />
                </View>
               </View>
            </View>
            <View style={{alignItems:'center',marginVertical:30}}>
                <View style={{width:'80%',height:60,
                              backgroundColor:'#526982',alignItems:'center',
                              justifyContent:'center',
                              borderRadius:20}}>
                    <Text style={{fontSize:20,color:'white'}}>Saved</Text>
                </View>
            </View>
        </View>
        </ScrollView>
      </SafeAreaView>
    );
}
export default EditProfile;