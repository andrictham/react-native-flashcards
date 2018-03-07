import React from 'react'
import styled from 'styled-components/native'
import { View } from 'react-native'
import { TabNavigator, StackNavigator } from 'react-navigation'
import CustomStatusBar from './components/CustomStatusBar'
import DeckList from './views/DeckList'
import AddDeck from './views/AddDeck'
import AddFlashcard from './views/AddFlashcard'
import QuizView from './views/QuizView'
import DeckDetail from './views/DeckDetail'
import COLORS from './styles/colors'

const Tabs = TabNavigator(
	{
		DeckList: {
			screen: DeckList,
			navigationOptions: {
				tabBarLabel: 'All Decks',
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
			activeTintColor: COLORS.inverse,
			inactiveTintColor: COLORS.inverse,
			indicatorStyle: {
				backgroundColor: COLORS.inverse,
			},
			style: {
				height: 56,
				backgroundColor: COLORS.accent,
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

const StackNavigationOptions = {
	headerTintColor: COLORS.inverse,
	headerStyle: {
		backgroundColor: COLORS.accent,
	},
}

const Stacks = StackNavigator({
	Tabs: {
		screen: Tabs,
	},
	AddDeck: {
		screen: AddDeck,
		navigationOptions: {
			...StackNavigationOptions,
		},
	},
	DeckDetail: {
		screen: DeckDetail,
		navigationOptions: {
			...StackNavigationOptions,
		},
	},
})

export default class App extends React.Component {
	render() {
		return (
			<AppContainer>
				<CustomStatusBar
					backgroundColor={COLORS.accent}
					barStyle="light-content"
				/>
				<Stacks />
			</AppContainer>
		)
	}
}

const AppContainer = styled(View)`
	flex: 1;
`
