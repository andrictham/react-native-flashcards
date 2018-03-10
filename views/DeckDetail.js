import React, { Component } from 'react'
import { View } from 'react-native'
import styled from 'styled-components/native'
import { PrimaryButton, SecondaryButton } from '../components/Buttons'
import DeckInfo from '../components/DeckInfo'
import COLORS from '../styles/colors'

// TODO: display title of the deck
// TODO: display number of cards in deck
// TODO: display an option to start a quiz on this deck
// TODO: option to add new question to this deck

class DeckDetail extends Component {
	static navigationOptions = () => {
		return {
			title: 'Deck',
		}
	}
	render() {
		const { title, cardCount } = this.props.navigation.state.params
		return (
			<ViewContainer>
				<Deck>
					<DeckInfo title={title} cardCount={cardCount} />
					<Actions>
						<PrimaryButton
							title="Start Quiz"
							onPress={() => {
								alert('pressed!')
							}}
						/>
						<SecondaryButton
							title="Add Question"
							onPress={() => {
								alert('pressed!')
							}}
						/>
					</Actions>
				</Deck>
			</ViewContainer>
		)
	}
}

const Deck = styled(View)`
	justify-content: center;
	align-items: center;
	padding: 48px;
	margin: 32px;
	background-color: ${COLORS.inverse};
	border-radius: 4px;
`

const Actions = styled(View)`
	margin-top: 32px;
	align-items: center;
`

const ViewContainer = styled(View)`
	background-color: ${COLORS.background};
	flex: 1;
`

export default DeckDetail
