import React from 'react'
import styled from 'styled-components/native'
import { View } from 'react-native'
import { TabNavigator } from 'react-navigation'
import CustomStatusBar from './components/CustomStatusBar'
import DeckList from './views/DeckList'
import AddDeck from './views/AddDeck'
import AddFlashcard from './views/AddFlashcard'
import QuizView from './views/QuizView'
import DeckDetail from './views/DeckDetail'

const Tabs = TabNavigator(
	{
		DeckList: {
			screen: DeckList,
			navigationOptions: {
				tabBarLabel: 'All Decks',
			},
		},
		DeckDetail: {
			screen: DeckDetail,
			navigationOptions: {
				tabBarLabel: 'Deck',
			},
		},
		AddDeck: {
			screen: AddDeck,
			navigationOptions: {
				tabBarLabel: 'Add Deck',
			},
		},
		AddFlashcard: {
			screen: AddFlashcard,
			navigationOptions: {
				tabBarLabel: 'Add Card',
			},
		},
		QuizView: {
			screen: QuizView,
			navigationOptions: {
				tabBarLabel: 'Quiz',
			},
		},
	},
	{
		navigationOptions: {
			header: null,
		},
		tabBarOptions: {
			activeTintColor: '#fff',
			style: {
				height: 56,
				backgroundColor: '#000',
				shadowColor: 'rgba(0,0,0,0.24)',
				shadowOffset: {
					width: 0,
					height: 3,
				},
				shadowRadius: 6,
				shadowOpacity: 1,
			},
		},
	},
)

export default class App extends React.Component {
	render() {
		return (
			<AppContainer>
				<CustomStatusBar backgroundColor="#000000" barStyle="light-content" />
				<Tabs />
			</AppContainer>
		)
	}
}

const AppContainer = styled(View)`
	flex: 1;
`
