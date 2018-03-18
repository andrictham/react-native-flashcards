import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addDeck } from '../actions'
import { ScrollView, Keyboard } from 'react-native'
import styled from 'styled-components/native'
import COLORS from '../styles/colors'
import { TextInputGroup } from '../components/Inputs'
import { PrimaryButton } from '../components/Buttons'
import uuidv4 from 'uuid/v4'

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
		const id = uuidv4()
		const { title } = this.state
		this.props.addDeck({
			id,
			title,
		})
		this.props.navigation.navigate('DeckDetail', { id })
		this.setState({
			title: '',
		})
		Keyboard.dismiss()
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
