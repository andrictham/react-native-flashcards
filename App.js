import React from 'react'
import styled from 'styled-components/native'
import { View, Platform } from 'react-native'
import { TabNavigator, StackNavigator } from 'react-navigation'
import CustomStatusBar from './components/CustomStatusBar'
import DeckList from './views/DeckList'
import AddDeck from './views/AddDeck'
import AddFlashcard from './views/AddFlashcard'
import QuizView from './views/QuizView'
import DeckDetail from './views/DeckDetail'
import ProfileView from './views/ProfileView'
import COLORS from './styles/colors'
import { Ionicons } from '@expo/vector-icons'

// TODO: Store everything in Redux
// TODO: Persist Redux store to AsyncStorage
// TODO: Add daily push notification reminder

const TabContents = () => {
	if (Platform.OS === 'ios') {
		return {
			DeckList: {
				screen: DeckList,
				navigationOptions: {
					tabBarLabel: 'All Decks',
					tabBarIcon: ({ tintColor }) => (
						<Ionicons name="ios-albums" size={30} color={tintColor} />
					),
				},
			},
			AddDeck: {
				screen: AddDeck,
				navigationOptions: {
					tabBarLabel: 'Add Deck',
					tabBarIcon: ({ tintColor }) => (
						<Ionicons name="ios-add-circle" size={30} color={tintColor} />
					),
				},
			},
			ProfileView: {
				screen: ProfileView,
				navigationOptions: {
					tabBarLabel: 'Profile',
					tabBarIcon: ({ tintColor }) => (
						<Ionicons name="ios-person" size={40} color={tintColor} />
					),
				},
			},
		}
	} else if (Platform.OS === 'android') {
		return {
			DeckList: {
				screen: DeckList,
				navigationOptions: {
					tabBarLabel: 'All Decks',
					tabBarIcon: ({ tintColor }) => (
						<Ionicons name="ios-albums" size={30} color={tintColor} />
					),
				},
			},
			ProfileView: {
				screen: ProfileView,
				navigationOptions: {
					tabBarLabel: 'Profile',
					tabBarIcon: ({ tintColor }) => (
						<Ionicons name="ios-person" size={40} color={tintColor} />
					),
				},
			},
		}
	}
}

const Tabs = TabNavigator(
	{
		...TabContents(),
	},
	{
		navigationOptions: {
			header: null,
		},
		tabBarOptions: {
			activeTintColor:
				Platform.OS === 'android' ? COLORS.inverse : COLORS.accent,
			inactiveTintColor:
				Platform.OS === 'android' ? COLORS.inverse : COLORS.subtle,
			indicatorStyle: {
				backgroundColor: COLORS.inverse,
			},
			style: {
				height: 56,
				backgroundColor:
					Platform.OS === 'android' ? COLORS.accent : COLORS.inverse,
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
	AddFlashcard: {
		screen: AddFlashcard,
		navigationOptions: {
			...StackNavigationOptions,
		},
	},
	QuizView: {
		screen: QuizView,
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
				<Stacks style={{ flex: 1 }} />
			</AppContainer>
		)
	}
}

const AppContainer = styled(View)`
	flex: 1;
`
