import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import styled from 'styled-components/native'
import COLORS from '../styles/colors'
import { FontAwesome } from '@expo/vector-icons'

export const PrimaryButton = ({ title, onPress, stackedRow, intent }) => (
	<SolidButton onPress={onPress} stackedRow={stackedRow} intent={intent}>
		{intent && (
			<FontAwesome
				name={
					(intent === 'correct' && 'check-square') ||
					(intent === 'wrong' && 'window-close')
				}
				size={16}
				color={COLORS.inverse}
				style={{ paddingRight: 8 }}
			/>
		)}
		<SolidButtonText>{title.toUpperCase()}</SolidButtonText>
	</SolidButton>
)

export const SecondaryButton = ({ title, onPress }) => (
	<LinkButton onPress={onPress}>
		<LinkButtonText>{title.toUpperCase()}</LinkButtonText>
	</LinkButton>
)

const SolidButton = styled(TouchableOpacity)`
	flex-direction: row;
	align-items: center;
	justify-content: center;
	padding: 16px 32px;
	margin: ${props => (props.stackedRow ? '8px' : '8px 0px')};
	border-radius: 3px;
	background-color: ${COLORS.accent};
	elevation: 3;
`

const SolidButtonText = styled(Text)`
	color: ${COLORS.inverse};
	font-weight: 600;
`

const LinkButton = styled(TouchableOpacity)`
	padding: 16px 0px;
`

const LinkButtonText = styled(Text)`
	color: ${COLORS.accent};
	font-weight: 400;
`
