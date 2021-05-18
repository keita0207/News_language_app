import React, { Component } from 'react';
import { View, TouchableOpacity, Image, Text, StyleSheet } from 'react-native';

class SearchListView extends Component {

	constructor(props){
		super(props)
		this.data = props.data
	}

	handlePress = () => {
		const {url, title} = this.data;
		this.props.onPress({url, title});
	}

	render(){
	    return (
			<View>
				<TouchableOpacity style={styles.cardView} activeOpacity={0.7}
					onPress={this.handlePress}>
					<View style={styles.cardContent}>
						<View style={style.image}>
							<Image source={{ uri: item.urlToImage }} style={styles.cardImage} />
						</View>
						<View style={styles.newsItem}>
							<Text style={styles.title}>{item.title}</Text>
							<Text style={styles.description}>{item.description}</Text>
						</View>
					</View>
				</TouchableOpacity>
			</View>
		);
	};
};

export default SearchListView;

const styles = StyleSheet.create({
	cardView: {
		justifyContent:'center',
		margin:10,
		borderRadius:20,
		borderColor:'#000',
	},
	cardContent: {
		flexDirection:'row',
		borderRadius:10,
		borderWidth:1,
		borderColor:'grey',
	},
	cardImage: {
		width:130,
		height:130,
		resizeMode:'cover',
		borderTopLeftRadius:10,
		borderBottomLeftRadius:10
	},
	image:{
		flex:4
	},
	newsItem:{
		flex:6,
		justifyContent:'center'
	},
	title: {
		fontSize:17,
		fontWeight:'bold'
	},
	description: {
		fontSize:13,
		paddingTop: 15
	}
})