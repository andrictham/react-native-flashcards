import React, { Component } from 'react'
import { View, FlatList, TouchableNativeFeedback } from 'react-native'
import FAB from 'react-native-fab'
import { Ionicons } from '@expo/vector-icons'
import styled from 'styled-components/native'
import COLORS from '../styles/colors'
import DeckInfo from '../components/DeckInfo'

// TODO: display title of each deck
// TODO: display number of cards in each deck

const data = [
	{
		key: 'aefwHGw8eub',
		title: 'React Native',
		cardCount: 3,
	},
	{
		key: 'bfjeiofhEIEW',
		title: 'Javascript',
		cardCount: 57,
	},
	{
		key: '38s4623ekwfjh',
		title: 'Redux',
		cardCount: 7,
	},
	{
		key: '38dd623ekwfjh',
		title: 'Styled Components',
		cardCount: 1,
	},
	{
		key: '38s4ffekwfjh',
		title: 'Flexbox',
		cardCount: 0,
	},
	{
		key: '3awsd623ekwfjh',
		title: 'Swift',
		cardCount: 12,
	},
	{
		key: '38ergr3ekwfjh',
		title: 'Objective-C',
		cardCount: 32,
	},
	{
		key: '38s46ssskwfjh',
		title: 'Sketch.app',
		cardCount: 6,
	},
]

class DeckList extends Component {
	render() {
		const { navigate } = this.props.navigation

		return (
			<CardList>
				<FlatList
					data={data}
					renderItem={({ item }) => (
						<DeckItem key={item.key} {...item} navigate={navigate} />
					)}
					contentContainerStyle={{ paddingTop: 16, paddingBottom: 88 }}
				/>
				<FAB
					buttonColor={COLORS.accent}
					iconTextColor="#FFFFFF"
					onClickAction={() => {
						navigate('AddDeck')
					}}
					visible={true}
					iconTextComponent={<Ionicons name="md-add" />}
				/>
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
	return (
		<TouchableNativeFeedback
			onPress={() => navigate('DeckDetail', { title, cardCount })}
		>
			{renderCard}
		</TouchableNativeFeedback>
	)
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

export default DeckList
