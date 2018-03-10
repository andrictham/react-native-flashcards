import React, { Component } from 'react'
import { ScrollView, Button, Platform } from 'react-native'
import styled from 'styled-components/native'
import COLORS from '../styles/colors'
import { TextInputGroup } from '../components/Inputs'

// TODO: Link up button
// TODO: Connect to Redux

class AddFlashcard extends Component {
	static navigationOptions = () => {
		return {
			title: 'Add Flashcard',
		}
	}
	state = {
		question: '',
		answer: '',
	}
	render() {
		return (
			<AddFlashcardForm
				keyboardShouldPersistTaps="handled"
				keyboardDismissMode="on-drag"
			>
				<TextInputGroup
					title="Question"
					placeholder="What’s the answer to life and the universe?"
					value={this.state.question}
					onChangeText={question => this.setState({ question })}
					multiline
					autoFocus={Platform.OS === 'ios' ? true : false}
				/>
				<TextInputGroup
					title="Answer"
					placeholder="42"
					value={this.state.answer}
					onChangeText={answer => this.setState({ answer })}
					multiline
				/>
				<Button
					title="Add Card"
					onPress={() =>
						alert(`Question: ${this.state.question}\nAnswer: ${
							this.state.answer
						}
						`)
					}
					color={COLORS.accent}
				/>
			</AddFlashcardForm>
		)
	}
}

const AddFlashcardForm = styled(ScrollView)`
	flex: 1;
	padding: 32px 16px;
	background-color: ${COLORS.inverse};
`

export default AddFlashcard
