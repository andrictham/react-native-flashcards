import React, { Component } from 'react'
import { View, FlatList, TouchableNativeFeedback } from 'react-native'
import FAB from 'react-native-fab'
import { Ionicons } from '@expo/vector-icons'
import styled from 'styled-components/native'
import { Header } from '../components/Typography'
import COLORS from '../styles/colors'

// TODO: display title of each deck
// TODO: display number of cards in each deck

const data = [
	{
		key: 'aefwHGw8eub',
		title: 'React Native',
		numberOfQuestions: 3,
	},
	{
		key: 'bfjeiofhEIEW',
		title: 'Javascript',
		numberOfQuestions: 57,
	},
	{
		key: '38s4623ekwfjh',
		title: 'Redux',
		numberOfQuestions: 7,
	},
	{
		key: '38dd623ekwfjh',
		title: 'Styled Components',
		numberOfQuestions: 1,
	},
	{
		key: '38s4ffekwfjh',
		title: 'Flexbox',
		numberOfQuestions: 0,
	},
	{
		key: '3awsd623ekwfjh',
		title: 'Swift',
		numberOfQuestions: 12,
	},
	{
		key: '38ergr3ekwfjh',
		title: 'Objective-C',
		numberOfQuestions: 32,
	},
	{
		key: '38s46ssskwfjh',
		title: 'Sketch.app',
		numberOfQuestions: 6,
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

const DeckItem = ({ title, numberOfQuestions, navigate }) => {
	const renderCard = (
		<Card>
			<Header size="M" center>
				{title}
			</Header>
			<Header size="XS" center>{`${numberOfQuestions} Questions`}</Header>
		</Card>
	)
	return (
		<TouchableNativeFeedback
			onPress={() => navigate('DeckDetail', { title, numberOfQuestions })}
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
