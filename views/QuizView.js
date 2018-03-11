import React, { Component } from 'react'
import { View } from 'react-native'
import styled from 'styled-components/native'
import { PrimaryButton } from '../components/Buttons'
import { Header } from '../components/Typography'
import COLORS from '../styles/colors'
import FlipCard from '../components/FlipCard'

// TODO: display a card question
// TODO: option to view answer (flips the card)
// TODO: a “Correct” button
// TODO: an “Incorrect” button
// TODO: number of cards left on the quiz
// TODO: display percentage correct once the quiz is complete

class QuizView extends Component {
	static navigationOptions = () => {
		return {
			title: 'Quiz',
		}
	}
	render() {
		return (
			<Quiz>
				<FlipCard
					question="Does React Native work with Android?"
					answer="Yes, totally! React Native is a cross-platform mobile development framework that works for both iOS, and Android."
					currentCount="1"
					totalCount="9"
				/>
				<Buttons>
					<PrimaryButton title="Correct" stackedRow intent="correct" />
					<PrimaryButton title="Incorrect" stackedRow intent="wrong" />
				</Buttons>
			</Quiz>
		)
	}
}

const Quiz = styled(View)`
	flex: 1;
	padding: 16px 16px 32px;
	background-color: ${COLORS.inverse};
	align-items: center;
`

const Buttons = styled(View)`
	flex-direction: row;
	align-items: center;
`

export default QuizView
