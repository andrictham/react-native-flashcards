import React, { Component } from 'react'
import { ScrollView, Platform } from 'react-native'
import styled from 'styled-components/native'
import COLORS from '../styles/colors'
import { TextInputGroup } from '../components/Inputs'
import { PrimaryButton } from '../components/Buttons'

// TODO: option to submit the new deck title

class AddDeck extends Component {
	static navigationOptions = () => {
		return {
			title: 'Add Deck',
		}
	}
	state = {
		title: '',
	}
	render() {
		return (
			<AddDeckForm
				keyboardShouldPersistTaps="handled"
				keyboardDismissMode="on-drag"
			>
				<TextInputGroup
					title="What are you learning?"
					placeholder="Flower Arrangement"
					maxLength={40}
					large
					autoFocus
					value={this.state.title}
					onChangeText={title => this.setState({ title })}
				/>
				<PrimaryButton
					title="Add Deck"
					onPress={() => alert(this.state.title)}
					color={COLORS.accent}
				/>
			</AddDeckForm>
		)
	}
}

const AddDeckForm = styled(ScrollView)`
	flex: 1;
	padding: 32px 16px;
	background-color: ${COLORS.inverse};
`

export default AddDeck
