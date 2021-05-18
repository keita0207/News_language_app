import React, { Component } from 'react';
import { TextInput, SafeAreaView, ScrollView, Dimensions, StyleSheet } from 'react-native';
import { View, Text } from 'native-base';
import CountryPicker from 'react-native-country-picker-modal';
import { Input } from 'react-native-elements'
import { FloatingLabelInput } from 'react-native-floating-label-input';
import { TouchableOpacity } from 'react-native-gesture-handler';
import SelectBox from 'react-native-multi-selectbox'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import SectionedMultiSelect from 'react-native-sectioned-multi-select';
import Icon from 'react-native-vector-icons/MaterialIcons'


import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getUser, updateName, updateAge, updateIntroduction,  updateUserProfile } from '../../redux/actions/user'


// Updateをそれぞれの項目で行ったときに、即座に反映させるにはどうしたらいい？ Reloadすれば変更が反映されるが。
// And Enable an User select Country, language
class EditProfile extends Component  {

  render(){
      const updateProfile = () =>{
        if(this.props.user.userName !== null && this.props.user.age !== null){
            this.props.updateUserProfile()
            alert('Saved')
        }
        else{
          alert('Fill out Username and Age.')
        }
      }

    return (
      <ScrollView style={{height:Dimensions.get('window').height}}>
          <SafeAreaView>
               <View style={styles.editContainer}>
                  <View style={styles.userContainer}>
                    <Input
                      label={'username'}
                      placeholder={this.props.user.userName}
                      value={this.props.user.userName}
                      onChangeText={input => this.props.updateName(input)}
                      style={styles.userInput}
                    />
                  </View>
                  <View style={styles.userContainer}>
                    <Input
                      label={'Age'}
                      value={this.props.user.age}
                      onChangeText={input => this.props.updateAge(input)}
                      style={styles.userInput}
                    />
                  </View>
                {/*<View style={{width:330}}>
                  <View style={{borderWidth:2,borderColor:'#939ac4',borderWidth:2,
                       width:'40%',marginVertical:20,height:40,
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
                 </View>*/}
                <View style={{width:'100%',alignItems:'center'}}>
                  <View style={{width:'90%'}}>
                  {/* {<SectionedMultiSelect
                          colors={{
                            primary:'#526982',
                            subText:'black',
                            chipColor:'black',
                            success:'#526982'
                          }}
                          items={items}
                          IconRenderer={Icon}
                          displayKey={'false'}
                          uniqueKey="id"
                          //subKey='children'
                          selectText="+ Language"
                          showDropDowns={false}
                          readOnlyHeadings={false}
                          onSelectedItemsChange={onSelectedItemsChange}
                          selectedItems={selectedItems}
                        />}*/}

                    </View>
                      {/*  <View style={{flexDirection:'row'}}>
                        {
                          currentUser.selectedItems.map((item) => (
                            <View
                            key={item.toString()}>
                              <View style={{flexDirection:'row',padding:0,alignItems:'center'}}>
                                <Text style={{marginLeft:10,borderWidth:1,borderColor:'black',padding:5}}>
                                  {item}
                                  <TouchableOpacity
                                  style={{position:'absolute',right:0,top:7}}
                                    >
                                      <FontAwesome size={20} name="remove" />
                                  </TouchableOpacity>
                                </Text>
                              </View>
                            </View>
                          ))
                        }
                      </View>*/}
                  </View>
                 {/*自己紹介文の設定 */}
                 <View style={styles.descriptionContainer}>
                   <TextInput
                      placeholder="Introduce Yourself"
                      numberOfLines = {100}
                      value={this.props.user.introduction}
                      onChangeText={input => this.props.updateIntroduction(input)}
                      multiline={true}
                      style={styles.descriptionInput}
                    />
                </View>
              </View>
                <TouchableOpacity
                  onPress={updateProfile}
                  style={styles.saveContainer}>
                  <View style={styles.saveButton}>
                      <Text style={styles.saveText}>Save</Text>
                  </View>
                </TouchableOpacity>
          </SafeAreaView>
      </ScrollView>
    );
    }
}

const mapDispatchToProps = (dispatch) =>{
  return bindActionCreators({
      getUser,
      updateName,
      updateAge,
      updateIntroduction,
      updateUserProfile
  },dispatch)
}

const mapStateToProps = (state) =>{
  return{
      user: state.user,
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(EditProfile)

const styles = StyleSheet.create({
  editContainer:{
    alignItems:'center',
    marginTop:30
  },
  userContainer:{
    flexDirection:'row',
    alignItems:'center',
    width:'70%'
  },
  userInput:{
    borderBottomColor:'#939ac4',
    borderBottomWidth:2
  },
  descriptionContainer:{
    width:'80%',
    marginTop:20,
    borderWidth:2,
    borderColor:'#939ac4'
  },
  descriptionInput:{
    height:400,
    fontSize:20
  },
  saveContainer:{
    alignItems:'center',
    marginVertical:30
  },
  saveButton:{
    alignItems:'center',
    justifyContent:'center',
    width:'80%',
    height:60,
    backgroundColor:'#526982',
    borderRadius:20
  },
  saveText:{
    fontSize:20,
    color:'white'
  }
})
