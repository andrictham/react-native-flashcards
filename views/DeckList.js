import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
	View,
	FlatList,
	TouchableNativeFeedback,
	TouchableOpacity,
	Platform,
} from 'react-native'
import FAB from 'react-native-fab'
import { Ionicons } from '@expo/vector-icons'
import styled from 'styled-components/native'
import COLORS from '../styles/colors'
import DeckInfo from '../components/DeckInfo'

// TODO: Connect to Redux

// const data = [
// 	{
// 		key: 'aefwHGw8eub',
// 		title: 'React Native',
// 		cardCount: 3,
// 	},
// 	{
// 		key: 'bfjeiofhEIEW',
// 		title: 'Javascript',
// 		cardCount: 57,
// 	},
// 	{
// 		key: '38s4623ekwfjh',
// 		title: 'Redux',
// 		cardCount: 7,
// 	},
// 	{
// 		key: '38dd623ekwfjh',
// 		title: 'Styled Components',
// 		cardCount: 1,
// 	},
// 	{
// 		key: '38s4ffekwfjh',
// 		title: 'Flexbox',
// 		cardCount: 0,
// 	},
// 	{
// 		key: '3awsd623ekwfjh',
// 		title: 'Swift',
// 		cardCount: 12,
// 	},
// 	{
// 		key: '38ergr3ekwfjh',
// 		title: 'Objective-C',
// 		cardCount: 32,
// 	},
// 	{
// 		key: '38s46ssskwfjh',
// 		title: 'Sketch.app',
// 		cardCount: 6,
// 	},
// ]

class DeckList extends Component {
	keyExtractor = item => item.id
	render() {
		const { navigate } = this.props.navigation

		return (
			<CardList>
				<FlatList
					data={this.props.decks}
					renderItem={({ item }) => <DeckItem {...item} navigate={navigate} />}
					keyExtractor={this.keyExtractor}
					contentContainerStyle={{
						paddingTop: 16,
						paddingBottom: Platform.OS === 'android' ? 88 : 16,
					}}
				/>
				{Platform.OS === 'android' && (
					<FAB
						buttonColor={
							Platform.OS === 'android' ? COLORS.accent : COLORS.inverse
						}
						iconTextColor={
							Platform.OS === 'android' ? COLORS.inverse : COLORS.accent
						}
						onClickAction={() => {
							navigate('AddDeck')
						}}
						visible={true}
						iconTextComponent={<Ionicons name="md-add" />}
					/>
				)}
			</CardList>
		)
	}
}

const DeckItem = ({ title, cardCount, navigate }) => {
	const renderCard = (
		<Card>
			<DeckInfo title={title} cardCount={cardCount} />
		</Card>
	)
	if (Platform.OS === 'ios') {
		return (
			<TouchableOpacity
				onPress={() => navigate('DeckDetail', { title, cardCount })}
			>
				{renderCard}
			</TouchableOpacity>
		)
	} else if (Platform.OS === 'android') {
		return (
			<TouchableNativeFeedback
				onPress={() => navigate('DeckDetail', { title, cardCount })}
			>
				{renderCard}
			</TouchableNativeFeedback>
		)
	}
}

const Card = styled(View)`
	align-items: center;
	margin: 8px 16px;
	padding: 32px;
	background-color: ${COLORS.inverse};
	border-radius: 3px;
	elevation: 2;
`

const CardList = styled(View)`
	background-color: ${COLORS.background};
`

const mapStateToProps = ({ decks }) => {
	const decksArray = Object.keys(decks).map(id => {
		return {
			...decks[id],
			cardCount: decks[id].cards.length,
		}
	})
	return {
		decks: decksArray,
	}
}

export default connect(mapStateToProps)(DeckList)
