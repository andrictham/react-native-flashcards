import React, { Component } from 'react'
import { View, TextInput, Button } from 'react-native'
import styled from 'styled-components/native'
import COLORS from '../styles/colors'
import { TextInputGroup } from '../components/Inputs'

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
			<AddDeckForm>
				<TextInputGroup
					title="What are you learning?"
					placeholder="Topic"
					large
					autoFocus
					value={this.state.title}
					onChangeText={title => this.setState({ title })}
				/>
				<Button
					title="Add Deck"
					onPress={() => alert(this.state.title)}
					color={COLORS.accent}
				/>
			</AddDeckForm>
		)
	}
}

const AddDeckForm = styled(View)`
	flex: 1;
	padding: 32px 16px;
	background-color: ${COLORS.inverse};
`

export default AddDeck
