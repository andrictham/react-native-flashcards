import React, { Component } from 'react'
import { View, Text } from 'react-native'

// TODO: display title of the deck
// TODO: display number of cards in deck
// TODO: display an option to start a quiz on this deck
// TODO: option to add new question to this deck

class DeckDetail extends Component {
	static navigationOptions = ({ navigation }) => {
		const { title } = navigation.state.params

		return {
			title,
		}
	}
	render() {
		const { title, cardCount } = this.props.navigation.state.params
		return (
			<View>
				<Text>{title}</Text>
				<Text>{cardCount}</Text>
			</View>
		)
	}
}

export default DeckDetail
