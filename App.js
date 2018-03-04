import React from 'react'
import styled from 'styled-components/native'
import { View } from 'react-native'
import { TabNavigator } from 'react-navigation'
import CustomStatusBar from './components/CustomStatusBar'
import DeckList from './views/DeckList'
import AddDeck from './views/AddDeck'

const Tabs = TabNavigator(
	{
		Decks: {
			screen: DeckList,
			navigationOptions: {
				tabBarLabel: 'Decks',
			},
		},
		AddDeck: {
			screen: AddDeck,
			navigationOptions: {
				tabBarLabel: 'Add Deck',
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
