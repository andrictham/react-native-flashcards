import React from 'react'
import { View } from 'react-native'
import { Header } from '../components/Typography'
import pluralize from 'pluralize'

const DeckInfo = ({ title, cardCount }) => {
	return (
		<View>
			<Header size="M" center>
				{title}
			</Header>
			<Header size="XS" center>
				{pluralize('Questions', cardCount, true)}
			</Header>
		</View>
	)
}

export default DeckInfo
