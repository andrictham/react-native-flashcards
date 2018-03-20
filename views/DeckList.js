import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
	View,
	FlatList,
	TouchableNativeFeedback,
	TouchableOpacity,
	Platform,
} from 'react-native'
import FAB from 'react-native-fab'
import { Ionicons } from '@expo/vector-icons'
import styled from 'styled-components/native'
import COLORS from '../styles/colors'
import { BORDER_RADIUS } from '../styles/utils'
import DeckInfo from '../components/DeckInfo'

class DeckList extends Component {
	keyExtractor = item => item.id

	render() {
		const { navigate } = this.props.navigation

		return (
			<CardList>
				<FlatList
					data={this.props.decks}
					renderItem={({ item }) => <DeckItem {...item} navigate={navigate} />}
					keyExtractor={this.keyExtractor}
					contentContainerStyle={{
						paddingTop: 16,
						paddingBottom: Platform.OS === 'android' ? 88 : 16,
					}}
				/>
				{Platform.OS === 'android' && (
					<FAB
						buttonColor={COLORS.accent}
						iconTextColor={COLORS.inverse}
						onClickAction={() => {
							navigate('AddDeck')
						}}
						visible={true}
						iconTextComponent={<Ionicons name="md-add" />}
					/>
				)}
			</CardList>
		)
	}
}

const DeckItem = ({ id, title, cardCount, navigate }) => {
	const renderCard = (
		<Card>
			<DeckInfo title={title} cardCount={cardCount} />
		</Card>
	)
	const goToCardDetail = () => {
		navigate('DeckDetail', { id })
	}
	if (Platform.OS === 'ios') {
		return (
			<TouchableOpacity onPress={goToCardDetail}>{renderCard}</TouchableOpacity>
		)
	} else if (Platform.OS === 'android') {
		return (
			<TouchableNativeFeedback onPress={goToCardDetail}>
				{renderCard}
			</TouchableNativeFeedback>
		)
	}
}

const Card = styled(View)`
	align-items: center;
	margin: 8px 16px;
	padding: 32px;
	background-color: ${COLORS.inverse};
	border-radius: ${BORDER_RADIUS};
	elevation: 2;
`

const CardList = styled(View)`
	background-color: ${COLORS.background};
	flex: 1;
`

const mapStateToProps = ({ decks }) => {
	const decksArray = Object.keys(decks).map(id => {
		return {
			...decks[id],
			id,
			cardCount: decks[id].cards.length,
		}
	})
	return {
		decks: decksArray,
	}
}

export default connect(mapStateToProps)(DeckList)
