import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import styled from 'styled-components/native'
import COLORS from '../styles/colors'

export const PrimaryButton = ({ title, onPress }) => (
	<SolidButton onPress={onPress}>
		<SolidButtonText>{title.toUpperCase()}</SolidButtonText>
	</SolidButton>
)

export const SecondaryButton = ({ title, onPress }) => (
	<LinkButton onPress={onPress}>
		<LinkButtonText>{title.toUpperCase()}</LinkButtonText>
	</LinkButton>
)

const SolidButton = styled(TouchableOpacity)`
	padding: 8px 32px;
	margin: 8px;
	border-radius: 3px;
	background-color: ${COLORS.accent};
	elevation: 3;
`

const SolidButtonText = styled(Text)`
	color: ${COLORS.inverse};
	font-weight: 600;
`

const LinkButton = styled(TouchableOpacity)`
	padding: 16px;
`

const LinkButtonText = styled(Text)`
	color: ${COLORS.accent};
	font-weight: 400;
`
