import React, { Component } from 'react'
import { View, Text, FlatList, TouchableNativeFeedback } from 'react-native'
import styled from 'styled-components/native'

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
		key: '38s4623ekwfjh',
		title: 'Styled Components',
		numberOfQuestions: 1,
	},
	{
		key: '38s4623ekwfjh',
		title: 'Flexbox',
		numberOfQuestions: 0,
	},
	{
		key: '38s4623ekwfjh',
		title: 'Swift',
		numberOfQuestions: 12,
	},
	{
		key: '38s4623ekwfjh',
		title: 'Objective-C',
		numberOfQuestions: 32,
	},
	{
		key: '38s4623ekwfjh',
		title: 'Sketch.app',
		numberOfQuestions: 6,
	},
]

class DeckList extends Component {
	render() {
		return (
			<CardList>
				<FlatList
					data={data}
					renderItem={({ item }) => <DeckItem key={item.key} {...item} />}
					contentContainerStyle={{ paddingTop: 16, paddingBottom: 16 }}
				/>
			</CardList>
		)
	}
}

const DeckItem = ({ title, numberOfQuestions }) => (
	<TouchableNativeFeedback>
		<Card>
			<Header size="M" primary>
				{title}
			</Header>
			<Header size="XS">{`${numberOfQuestions} Questions`}</Header>
		</Card>
	</TouchableNativeFeedback>
)

const Card = styled(View)`
	align-items: center;
	margin: 8px 16px;
	padding: 32px;
	background-color: white;
	border-radius: 3px;
	elevation: 2;
`

const Header = styled(Text)`
	color: ${props => (props.primary ? 'salmon' : 'grey')};
	font-size: ${props =>
		(props.size === 'XL' && '36px') ||
		(props.size === 'L' && '32px') ||
		(props.size === 'M' && '28px') ||
		(props.size === 'S' && '24px') ||
		(props.size === 'XS' && '16px')};
	font-weight: ${props =>
		(props.size === 'XL' && 400) ||
		(props.size === 'L' && 700) ||
		(props.size === 'M' && 900) ||
		(props.size === 'S' && 400) ||
		(props.size === 'XS' && 400)};
	text-align: center;
	margin: 2% 0;
`

const CardList = styled(View)`
	background-color: #f5f3f3;
`

export default DeckList
