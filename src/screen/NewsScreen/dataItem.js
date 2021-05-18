import React, {Component} from 'react';
import { StyleSheet } from 'react-native'
import { ListItem, Right, Thumbnail, View, Text } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';

class DataItem extends Component {

    constructor(props) {
        super(props);
        this.data = props.data;
    }

    handlePress = () => {
      const {url, title} = this.data;
      this.props.onPress({url, title});
    }

    render() {
        return(
          <ListItem thumbnail>
              <TouchableOpacity onPress={this.handlePress} style={styles.flexDirection}>
                  <Thumbnail
                    square
                    style={styles.thumbnail}
                    source={{ uri: this.data.urlToImage != null ? this.data.urlToImage : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWBAMAAADOL2zRAAAAG1BMVEXMzMyWlpajo6PFxcW3t7ecnJyqqqq+vr6xsbGXmO98AAAACXBIWXMAAA7EAAAOxAGVKw4bAAABPUlEQVRoge3Tv0/CQBjG8YcWaMcebymOENLI2MZoHMHEvVUKjq1K4lhM2Kvxx7/tUUiamDhc6GSez8INzbf3HleAiIiIiIiIiIiIiNozAGzvuJYTW2reXmso7bX8YN96HUR1a7RZ6+VVOgU+p4LuZGrSkqK0PWfwfl+3ht/hcpdvPkJ0g0fBYpYZtS7HttfPMatbAbZzJ1kjjnqVK1ihNzdpdX3b65S4qVsjXbG9EtuoEzliC/RbDFoIL7wY2NZrQayPzw1VpH/FUUqNjVrx0+9W8Rzrlt7yMMvMWq7fzHhoCTp6Rr0vw0uiH8+as69bov/AyNqf/Rms3Ky1aO7EYV93X2nlBIXg7WVSmrWs5q4eWrvVdYLbpR4/PTeZ8S9O82mdzMr7SVstV6mqrRaKh9ZSRERERERERET0n/wAZwMqI9kyPcoAAAAASUVORK5CYII=' }}
                  />
                  <Right style={styles.right}>
                    <Text numberOfLines={1}>{this.data.title}</Text>
                    <Text note numberOfLines={1}>{this.data.description}</Text>
                    <View style={styles.sourceName}>
                          <Text note>{this.data.source.name}</Text>
                    </View>
                  </Right>
              </TouchableOpacity>
          </ListItem>
        );
    }
}

export default DataItem;

const styles = StyleSheet.create({
  flexDirection:{
    flexDirection:'row'
  },
  thumbnail:{
    width:'20%',
    height:100,
    resizeMode:'center'
  },
  right:{
    width:'80%'
  },
  sourceName:{
    flex:1,
    flexDirection:'row',
    marginTop:8,
    marginLeft:0
  }
})