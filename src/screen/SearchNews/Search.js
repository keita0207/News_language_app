import React,{ Component } from 'react';
import { View, SafeAreaView, StatusBar, StyleSheet,Text,ScrollView, Dimensions } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { Container, List } from 'native-base';
import Modal from '../NewsScreen/modal'
import DataItem from '../NewsScreen/dataItem'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

export default class Search extends Component {
	constructor(props) {
		super(props);
		this.state = {
			navigation: props.navigation,
			data: [],
			searchQuery: '',
			iconFilter: 'search',
			showFilter: true,
			isLoading: true,
			rel: false,
			pop: false,
			pub: true,
			color: 'blue',
			fromDate: (new Date).toISOString().substring(0,10),
			toDate: (new Date).toISOString().substring(0,10),
			itemsFetched: 20,
			totalResults: 0,
			datas: null,
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

	getData() {
		let sortBy = 'publishedAt';
		let itemsFetched = this.state.itemsFetched;
		if (this.state.rel === true) { sortBy = 'relevancy'
		} else if (this.state.pop === true) { sortBy = 'popularity'
		}
		this.setState({ isLoading: true });
		let q = encodeURIComponent(this.state.searchQuery.toLowerCase());
		// どの言語でも調べれるように
		let uri = `https://newsapi.org/v2/everything?q=${q}&sortBy=${sortBy}&pageSize=${itemsFetched}&from=${this.state.fromDate}&to=${this.state.toDate}&apiKey=8953a82cf3d447318585bfb3ef6f6944`

		fetch(uri)
			.then((response) => response.json())
			.then((responseJson) => {
				this.setState({ data: responseJson.articles, totalResults: responseJson.totalResults })
			})
			.catch((error) => {
				console.error(error);
			}).
			finally(() => {
				this.setState({ isLoading: false })
			})
	}

	render() {
		const screenHeight = Dimensions.get('window').height

		let view =(this.state.isLoading ? (
			// 調べたい言語が分からない人様に、キーワードを羅列したい。
		<View style={screenHeight}>
			<ScrollView>
				<View style={styles.descriptionContainer}>
					<Text style={styles.descriptionText}>You can copy and paste these keywords below</Text>
				</View>
				<View>
					<View style={styles.topKeywordsPosition}>
						<View>
							<Text style={styles.topKeywordsText}>• <Text selectable>Economy</Text></Text>
						</View>
						<View>
							<View style={styles.keywordsItems}>
								<View style={styles.keyword}>
									<Text style={styles.keywordsText} selectable>経済</Text>
								</View>
								<View style={styles.keyword}>
									<Text style={styles.keywordsText} selectable>경제</Text>
								</View>
								<View style={styles.keyword}>
									<Text style={styles.keywordsText} selectable>经济</Text>
								</View>
								<View style={styles.keyword}>
									<Text style={styles.keywordsText} selectable>economía</Text>
								</View>
							</View>
							<View style={styles.keywordsItems}>
								<View style={styles.keyword}>
									<Text style={styles.keywordsText} selectable>экономия</Text>
								</View>
								<View style={styles.keyword}>
									<Text style={styles.keywordsText} selectable>Wirtschaft</Text>
								</View>
								<View style={styles.keyword}>
									<Text style={styles.keywordsText} selectable>économie</Text>
								</View>
							</View>
						</View>
					</View>
						<View style={styles.topKeywordsPosition}>
							<View>
								<Text style={styles.topKeywordsText}>•<Text selectable> Entertainment</Text></Text>
							</View>
							<View>
								<View style={styles.keywordsItems}>
									<View style={styles.keyword}>
										<Text style={styles.keywordsText} selectable>エンターテインメント</Text>
									</View>
									<View style={styles.keyword}>
										<Text style={styles.keywordsText} selectable>환대</Text>
									</View>
									<View style={styles.keyword}>
										<Text style={styles.keywordsText} selectable>娱乐</Text>
									</View>
								</View>
								<View style={styles.keywordsItems}>
								    <View style={styles.keyword}>
										<Text style={styles.keywordsText} selectable>entretenimiento</Text>
									</View>
									<View style={styles.keyword}>
										<Text style={styles.keywordsText} selectable>развлечения</Text>
									</View>
									<View style={styles.keyword}>
										<Text style={styles.keywordsText} selectable>Unterhaltung</Text>
									</View>
								</View>
								<View style={styles.keywordsItems}>
									<View style={styles.keyword}>
										<Text style={styles.keywordsText} selectable>divertissement</Text>
									</View>
								</View>
						    </View>
						</View>
						<View style={styles.topKeywordsPosition}>
							<View>
								<Text style={styles.topKeywordsText}>•<Text selectable> Health</Text></Text>
							</View>
							<View>
								<View style={styles.keywordsItems}>
									<View style={styles.keyword}>
										<Text style={styles.keywordsText} selectable>健康</Text>
									</View>
									<View style={styles.keyword}>
										<Text style={styles.keywordsText} selectable>건강</Text>
									</View>
									<View style={styles.keyword}>
										<Text style={styles.keywordsText} selectable>健康</Text>
									</View>
								</View>
								<View style={styles.keywordsItems}>
								    <View style={styles.keyword}>
										<Text style={styles.keywordsText} selectable>Salud</Text>
									</View>
									<View style={styles.keyword}>
										<Text style={styles.keywordsText} selectable>Здоровье</Text>
									</View>
									<View style={styles.keyword}>
										<Text style={styles.keywordsText} selectable>Gesundheit</Text>
									</View>
									<View style={styles.keyword}>
										<Text style={styles.keywordsText} selectable>Santé</Text>
									</View>
								</View>
						    </View>
						</View>
						<View style={styles.topKeywordsPosition}>
							<View>
								<Text style={styles.topKeywordsText}>•<Text selectable> General</Text></Text>
							</View>
							<View>
								<View style={styles.keywordsItems}>
									<View style={styles.keyword}>
										<Text style={styles.keywordsText} selectable>一般</Text>
									</View>
									<View style={styles.keyword}>
										<Text style={styles.keywordsText} selectable>일반</Text>
									</View>
									<View style={styles.keyword}>
										<Text style={styles.keywordsText} selectable>一般的</Text>
									</View>
								</View>
								<View style={styles.keywordsItems}>
								    <View style={styles.keyword}>
										<Text style={styles.keywordsText} selectable>General</Text>
									</View>
									<View style={styles.keyword}>
										<Text style={styles.keywordsText} selectable>Общий</Text>
									</View>
									<View style={styles.keyword}>
										<Text style={styles.keywordsText} selectable>Allgemeines</Text>
									</View>
									<View style={styles.keyword}>
										<Text style={styles.keywordsText} selectable>Générale</Text>
									</View>
								</View>
						    </View>
						</View>
							<View style={styles.topKeywordsPosition}>
								<View>
									<Text style={styles.topKeywordsText}>• <Text selectable>Science</Text></Text>
								</View>
							    <View>
									<View style={styles.keywordsItems}>
										<View style={styles.keyword}>
											<Text style={styles.keywordsText} selectable>科学</Text>
										</View>
										<View style={styles.keyword}>
											<Text style={styles.keywordsText} selectable>과학</Text>
										</View>
										<View style={styles.keyword}>
											<Text style={styles.keywordsText} selectable>科学</Text>
										</View>
									</View>
									<View style={styles.keywordsItems}>
										<View style={styles.keyword}>
											<Text style={styles.keywordsText} selectable>Ciencias</Text>
										</View>
										<View style={styles.keyword}>
											<Text style={styles.keywordsText} selectable>Hаука</Text>
										</View>
										<View style={styles.keyword}>
											<Text style={styles.keywordsText} selectable>Wissenschaft</Text>
										</View>
										<View style={styles.keyword}>
											<Text style={styles.keywordsText} selectable>Science</Text>
										</View>
									</View>
						       </View>
						    </View>
							<View style={styles.topKeywordsPosition}>
								<View>
									<Text style={styles.topKeywordsText}>• <Text selectable>Sports</Text></Text>
								</View>
							    <View>
									<View style={styles.keywordsItems}>
										<View style={styles.keyword}>
											<Text style={styles.keywordsText} selectable>スポーツ</Text>
										</View>
										<View style={styles.keyword}>
											<Text style={styles.keywordsText} selectable>스포츠</Text>
										</View>
										<View style={styles.keyword}>
											<Text style={styles.keywordsText} selectable>体育</Text>
										</View>
									</View>
									<View style={styles.keywordsItems}>
										<View style={styles.keyword}>
											<Text style={styles.keywordsText} selectable>Deportes</Text>
										</View>
										<View style={styles.keyword}>
											<Text style={styles.keywordsText} selectable>спортивный</Text>
										</View>
										<View style={styles.keyword}>
											<Text style={styles.keywordsText} selectable>Sport</Text>
										</View>
										<View style={styles.keyword}>
											<Text style={styles.keywordsText} selectable>sports</Text>
										</View>
									</View>
									{/* Add Other Keywords */}
									<View style={{marginTop:50}}>
										<Text>---------------------------------------------------------</Text>
									</View>
						       </View>
						</View>
				    </View>
			</ScrollView>
		</View>
		  ) : (
		  // isLoading = falseの場合に、Newsが表示される。
		  // Where to Add keyExtractor = {}.
		  // Need to change how to render the Component due to be able to set keys respectively.
		  <List
			dataArray={this.state.data}
			renderRow={(item,key) => {
				return (
					<DataItem onPress={this.handleItemDataOnPress} data={item} key={key}
					/>
				)
			}} />
		  ))
		return(
		  <Container>
			<SafeAreaView style={styles.container}>
				<StatusBar backgroundColor={'transparent'} barStyle={"dark-content"} />
				<View style={styles.searchContainer}>
					<Searchbar
						placeholder="Search"
						onChangeText={(searchQuery) => {this.setState({ searchQuery, showFilter: false, isLoading: true})}}
						value={this.state.searchQuery}
						onIconPress={() => {
							if (this.state.iconFilter === 'filter') {
								this.setState({ iconFilter: 'filter-outline' })
							} else {
								this.setState({ iconFilter: 'filter' })
							}
							this.setState({ showFilter: !this.state.showFilter })
						}}
						style={{ flex:8 }}
					/>
					<View style={styles.searchIcon}>
					   <FontAwesome
						name="play"
						color='#FFF'
						size={30}
						title="Search"
						onPress={() => this.getData({})} />
					</View>
				</View>
				<View>
				   {view}
				</View>
				<View style={{marginTop:50}}>
                  <Text>------------------------------------------------------------</Text>
                </View>
				<Modal
					showModal={this.state.setModalVisible}
					articleData={this.state.modalArticleData}
					onClose={this.handleModalClose}
				/>
			</SafeAreaView>
		  </Container>
		);
	}
}

const styles = StyleSheet.create({
	descriptionContainer:{
		justifyContent:'center',
		alignItems:'center',
		marginTop:30
	},
	descriptionText:{
		color:'#cc0202'
	},
	keywordsContainer:{

	},
	topKeywordsPosition:{
		marginTop:25,
		marginLeft:20
	},
	topKeywordsText:{
		fontSize:20
	},
	keywordsItems:{
		flexDirection:'row',
		paddingHorizontal:10,
		alignItems:'center',
		marginTop:15
	},
	keyword:{
		marginRight:10,
		backgroundColor:'#ccc',
		padding:7,
		borderRadius:20
	},
	keywordsText:{
		fontSize:16
	},
	container:{
		flex: 1,
		backgroundColor: '#fff'
	},
	searchContainer:{
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		paddingHorizontal:20,
		marginTop:20
	},
	searchIcon:{
		flex: 4,
		height:50,
		justifyContent:'center',
		alignItems:'center',
		backgroundColor:'black',
	}
})