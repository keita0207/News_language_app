import * as React from 'react';
import { View, Text, SafeAreaView, StatusBar, ImageBackground,
	     ScrollView, Linking, StyleSheet } from 'react-native';

const DetailsScreen = ({ route, navigation }) => {

	const item = route.params.newsData;

	return (
		<SafeAreaView style={styles.container}>
			<StatusBar translucent={true} backgroundColor={'transparent'} barStyle={"light-content"} />

			<ImageBackground
				source={{ uri:item.urlToImage }}
				imageStyle={{ borderTopLeftRadius: 20, borderTopRightRadius: 20 }}
				style={styles.ImageBackground}
			>
				<SafeAreaView style={{ flex: 1 }}>
					<View style={{ flex: 1 }} />
					<ScrollView style={styles.newsContent}>
						<View style={styles.newsInfoBar}>
							<View style={styles.newsInfo}>
								<Text>Source: {item.source.name}</Text>
							</View>
							<View style={styles.newsInfo}>
								<Text
									style={styles.readDetail}
									onPress={() => {
										Linking.openURL(item.url)
									}}>Read Details@</Text>
							</View>
						</View>
						<View>
							<Text style={styles.newsTitle}>{item.title}</Text>
							<Text style={styles.newsDesctription}>{item.description}</Text>
							<Text style={styles.newsUrl}>{item.url}</Text>
						</View>
					</ScrollView>
				</SafeAreaView>
			</ImageBackground>
		</SafeAreaView>
	);
}

export default DetailsScreen;

const styles = StyleSheet.create({
	container:{
		flex: 1,
		backgroundColor:'#fff'
	},
	ImageBackground:{
		flex: 1,
		resizeMode: 'stretch',
	},
	backIconStyle: {
		position:'absolute',
		top:60,
		left:20,
		padding: 5,
		borderRadius: 10,
		backgroundColor: 'rgba(0, 0, 0, 0.3)',
	},
	newsContent: {
		flex:5,
		backgroundColor:'#fff',
		borderTopLeftRadius:20,
		borderTopRightRadius:20,
		padding:20
	},
	newsInfoBar: {
		flexDirection:'row',
		alignItems:'center',
		justifyContent:'space-between'
	},
	readDetail:{
		textDecorationLine: 'underline',
		textDecorationColor: 'blue'
	},
	newsInfo: {
		paddingHorizontal:10,
		paddingVertical:5,
		backgroundColor:'#A9D4FD',
		borderRadius:10
	},
	newsTitle:{
		marginTop: 30,
		fontWeight:'bold',
		fontSize:20,
	},
	newsDesctription:{
		paddingTop: 30,
		paddingBottom: 10,
		fontSize: 16
	},
	newsUrl:{
		fontSize: 15
	}
})
