import React, { Component } from 'react'
import { View, TextInput, Button } from 'react-native'
import styled from 'styled-components/native'
import { Header } from '../components/Typography'
import COLORS from '../styles/colors'

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
				<Header size="XXS" style={{ paddingLeft: 3 }}>
					WHAT ARE YOU LEARNING?
				</Header>
				<DeckTitleInput
					placeholder="Topic"
					autoFocus
					value={this.state.title}
					onChangeText={title => this.setState({ title })}
					underlineColorAndroid={COLORS.accent}
					selectionColor={COLORS.accent}
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

const DeckTitleInput = styled(TextInput)`
	margin: 8px 0;
	padding-bottom: 16px;
	margin-top: 8px;
	padding-left: 5px;
	font-size: 24px;
	font-weight: 900;
	color: ${COLORS.primary};
`

const AddDeckForm = styled(View)`
	flex: 1;
	padding: 32px 16px;
	background-color: ${COLORS.inverse};
`

export default AddDeck
