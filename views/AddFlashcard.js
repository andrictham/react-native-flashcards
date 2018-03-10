import React, { Component } from 'react'
import { View, Text } from 'react-native'

// TODO: option to enter in the question
// TODO: option enter in the answer
// TODO: option to submit the new card

class AddFlashcard extends Component {
	static navigationOptions = () => {
		return {
			title: 'Add Flashcard',
		}
	}
	render() {
		return (
			<View>
				<Text>Add Flashcard View</Text>
			</View>
		)
	}
}

export default AddFlashcard
