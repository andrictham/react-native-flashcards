import React, { Component } from 'react'
import { ScrollView, Platform, KeyboardAvoidingView } from 'react-native'
import styled from 'styled-components/native'
import COLORS from '../styles/colors'
import { TextInputGroup } from '../components/Inputs'
import { PrimaryButton } from '../components/Buttons'

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
			<KeyboardAvoidingView
				behavior="padding"
				style={{ flex: 1, backgroundColor: COLORS.inverse }}
				keyboardVerticalOffset={Platform.OS === 'ios' ? 180 : 100}
			>
				<AddFlashcardForm
					keyboardShouldPersistTaps="handled"
					keyboardDismissMode="interactive"
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
					<PrimaryButton
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
			</KeyboardAvoidingView>
		)
	}
}

// `overflow: visible` helps to keep the button in view while `KeyboardAvoidingiew` pushes the inputs out of the way with a generous `keyboardVerticalOffset`. For some reason, this only works on iOS.
const AddFlashcardForm = styled(ScrollView)`
	flex: 1;
	padding: 32px 16px;
	background-color: ${COLORS.inverse};
	overflow: visible;
`

export default AddFlashcard
