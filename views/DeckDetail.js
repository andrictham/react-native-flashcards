import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View } from 'react-native'
import styled from 'styled-components/native'
import { PrimaryButton, SecondaryButton } from '../components/Buttons'
import DeckInfo from '../components/DeckInfo'
import COLORS from '../styles/colors'

class DeckDetail extends Component {
	static navigationOptions = () => {
		return {
			title: 'Deck',
		}
	}
	render() {
		const { id } = this.props.navigation.state.params
		const { navigate } = this.props.navigation
		const { decks } = this.props
		const currentDeck = decks[id]
		const cardCount = currentDeck.cards.length
		return (
			<ViewContainer>
				<Deck>
					<DeckInfo title={currentDeck.title} cardCount={cardCount} />
					<Actions>
						{cardCount >= 1 && (
							<PrimaryButton
								title="Start Quiz"
								onPress={() => {
									navigate('QuizView', { id })
								}}
							/>
						)}
						<SecondaryButton
							title="Add Flashcard"
							onPress={() => {
								navigate('AddFlashcard', { id })
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

const mapStateToProps = ({ decks }) => {
	// const decksArray = Object.keys(decks).map(id => {
	// 	return {
	// 		...decks[id],
	// 		cardCount: decks[id].cards.length,
	// 	}
	// })
	return {
		decks,
	}
}

export default connect(mapStateToProps)(DeckDetail)
