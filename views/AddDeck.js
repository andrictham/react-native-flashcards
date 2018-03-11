import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addDeck } from '../actions'
import { ScrollView } from 'react-native'
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
	handleAdd = () => {
		this.props.addDeck(this.state.title)
		this.props.navigation.navigate('DeckList')
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
					onPress={this.handleAdd}
					color={COLORS.accent}
					disabled={this.state.title === '' ? true : false}
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

export default connect(null, { addDeck })(AddDeck)
