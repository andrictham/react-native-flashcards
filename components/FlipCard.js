import React, { Component } from 'react'
import { View, Animated, Dimensions } from 'react-native'
import styled from 'styled-components/native'
import { SecondaryButton } from './Buttons'
import { Header } from './Typography'
import COLORS from '../styles/colors'
import { BORDER_RADIUS } from '../styles/utils'

// Sources:
// https://github.com/facebook/react-native/issues/1973#issuecomment-262059217
// https://github.com/browniefed/examples/blob/animated_basic/flip/animatedbasic/index.android.js

export default class FlipCard extends Component {
	state = {
		side: 'front',
	}
	componentWillMount() {
		this.animatedValue = new Animated.Value(0)
		this.value = 0
		this.animatedValue.addListener(({ value }) => {
			this.value = value
		})
		this.frontInterpolate = this.animatedValue.interpolate({
			inputRange: [0, 180],
			outputRange: ['0deg', '180deg'],
		})
		this.backInterpolate = this.animatedValue.interpolate({
			inputRange: [0, 180],
			outputRange: ['180deg', '360deg'],
		})
		this.frontOpacity = this.animatedValue.interpolate({
			inputRange: [89, 90],
			outputRange: [1, 0],
		})
		this.backOpacity = this.animatedValue.interpolate({
			inputRange: [89, 90],
			outputRange: [0, 1],
		})
	}
	flipCard() {
		if (this.value >= 90) {
			Animated.spring(this.animatedValue, {
				toValue: 0,
				friction: 12,
				tension: 100,
			}).start()
			this.setState({ side: 'front' })
		} else {
			Animated.spring(this.animatedValue, {
				toValue: 180,
				friction: 12,
				tension: 100,
			}).start()
			this.setState({ side: 'back' })
		}
	}

	render() {
		const frontAnimatedStyle = {
			transform: [{ rotateY: this.frontInterpolate }],
			opacity: this.frontOpacity,
		}
		const backAnimatedStyle = {
			transform: [{ rotateY: this.backInterpolate }],
			opacity: this.backOpacity,
		}
		return (
			<Container>
				<TopRow>
					<Header size="XS">
						Flashcard {this.props.currentCount} of {this.props.totalCount}
					</Header>
					<SecondaryButton
						title={
							(this.state.side === 'front' && 'Show Answer') ||
							(this.state.side === 'back' && 'Show Question')
						}
						onPress={() => this.flipCard()}
					/>
				</TopRow>

				<View>
					<FlashCard style={frontAnimatedStyle}>
						<Header size="L" center>
							{this.props.question}
						</Header>
					</FlashCard>
					<FlashCardBack style={backAnimatedStyle}>
						<Header size="XS">{this.props.answer}</Header>
					</FlashCardBack>
				</View>
			</Container>
		)
	}
}

const { width } = Dimensions.get('window')

const Container = styled(View)`
	flex: 1;
	align-items: center;
	justify-content: flex-start;
`

const FlashCard = styled(Animated.View)`
	align-items: center;
	justify-content: center;
	backface-visibility: hidden;
	padding: 32px 24px;
	margin: 16px;
	background-color: ${COLORS.inverse};
	border-radius: ${BORDER_RADIUS};
`

const FlashCardBack = FlashCard.extend`
	position: absolute;
	top: 0;
	left: 0;
`

const TopRow = styled(View)`
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	width: ${width};
	padding: 8px 32px;
`
