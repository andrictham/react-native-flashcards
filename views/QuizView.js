import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, LayoutAnimation } from 'react-native'
import styled from 'styled-components/native'
import FlipCard from '../components/FlipCard'
import { PrimaryButton, SecondaryButton } from '../components/Buttons'
import { Header } from '../components/Typography'
import COLORS from '../styles/colors'
import { BORDER_RADIUS } from '../styles/utils'
import {
	scheduleNotifications,
	cancelScheduledNotifications,
} from '../utils/scheduleNotifications'

class QuizView extends Component {
	static navigationOptions = () => {
		return {
			title: 'Quiz',
		}
	}

	state = {
		currentCardCount: 1,
		quizScore: 0,
	}

	handleCorrect = () => {
		this.setState(prevState => ({
			currentCardCount: prevState.currentCardCount + 1,
			quizScore: prevState.quizScore + 1,
		}))
		LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
	}

	handleIncorrect = () => {
		this.setState(prevState => ({
			currentCardCount: prevState.currentCardCount + 1,
		}))
		LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
	}

	handleReplay = () => {
		this.setState({
			currentCardCount: 1,
			quizScore: 0,
		})
	}

	handleGoBack = () => {
		this.props.navigation.goBack()
	}

	componentDidUpdate = () => {
		const { totalCardCount, notifications } = this.props
		const { currentCardCount } = this.state
		if (currentCardCount > totalCardCount) {
			console.log('Quiz is completed!')
			// When quiz is done, given notifications are enabled by the user, defer notifications until the next day
			// If not, don’t do anything
			if (notifications.areNotificationsEnabled) {
				cancelScheduledNotifications() // Cancel scheduled notification for the day
				scheduleNotifications() // Reinstantiate notifications, starting from the next day
			}
		}
	}

	render() {
		const { currentDeck, totalCardCount } = this.props
		const { currentCardCount, quizScore } = this.state
		if (currentCardCount <= totalCardCount) {
			return (
				<Quiz>
					{currentDeck.cards.map(
						(card, index) =>
							currentCardCount === index + 1 && (
								<FlipCard
									key={card.question}
									question={card.question}
									answer={card.answer}
									currentCount={currentCardCount}
									totalCount={totalCardCount}
								/>
							),
					)}

					<Buttons stackedRow>
						<PrimaryButton
							title="Correct"
							stackedRow
							intent="correct"
							onPress={this.handleCorrect}
						/>
						<PrimaryButton
							title="Incorrect"
							stackedRow
							intent="wrong"
							onPress={this.handleIncorrect}
						/>
					</Buttons>
				</Quiz>
			)
		} else if (currentCardCount > totalCardCount) {
			const percentageCorrect = (quizScore / totalCardCount * 100).toFixed(0)
			return (
				<Score>
					{quizScore < totalCardCount && (
						<Header size="L" center>
							🚀 Do better next time!
						</Header>
					)}
					{quizScore === totalCardCount && (
						<Header size="L" center>
							🎉 Great job!
						</Header>
					)}
					<Scorecard>
						<Header size="XXS">YOUR SCORE</Header>
						<Header size="XL">{`${percentageCorrect}%`}</Header>
						<Header size="S">
							You got {quizScore} out of {totalCardCount} correct
						</Header>
					</Scorecard>

					<Buttons>
						<PrimaryButton title="Replay Quiz" onPress={this.handleReplay} />
						<SecondaryButton title="Back to Deck" onPress={this.handleGoBack} />
					</Buttons>
				</Score>
			)
		}
	}
}

const Quiz = styled(View)`
	flex: 1;
	padding: 16px 16px 32px;
	background-color: ${COLORS.background};
	align-items: center;
`

const Buttons = styled(View)`
	flex-direction: ${props => (props.stackedRow ? 'row' : 'column')};
	align-items: center;
	margin-top: 32px;
`

const Score = styled(View)`
	flex: 1;
	padding: 32px 16px 32px;
	background-color: ${COLORS.background};
	align-items: center;
	justify-content: flex-start;
`

const Scorecard = styled(View)`
	padding: 16px;
	margin-top: 32px;
	background-color: ${COLORS.inverse};
	border-radius: ${BORDER_RADIUS};
`

const mapStateToProps = ({ decks, notifications }, ownProps) => {
	const currentDeckID = ownProps.navigation.state.params.id
	const currentDeck = decks[currentDeckID]
	const currentDeckCardCount = currentDeck.cards.length
	return {
		currentDeck,
		totalCardCount: currentDeckCardCount,
		notifications,
	}
}

export default connect(mapStateToProps)(QuizView)
