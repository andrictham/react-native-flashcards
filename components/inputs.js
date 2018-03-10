import React from 'react'
import { TextInput, View } from 'react-native'
import styled from 'styled-components/native'
import { Header } from '../components/Typography'
import COLORS from '../styles/colors'

export const TextInputGroup = ({
	title,
	placeholder,
	value,
	onChangeText,
	autoFocus,
	multiline,
	large,
}) => (
	<View>
		<Header size="XXS" style={{ paddingLeft: 3 }}>
			{title.toUpperCase()}
		</Header>
		<StyledTextInput
			placeholder={placeholder}
			autoFocus={autoFocus}
			value={value}
			onChangeText={onChangeText}
			multiline={multiline}
			large={large}
			underlineColorAndroid={COLORS.accent}
			selectionColor={COLORS.accent}
		/>
	</View>
)

const StyledTextInput = styled(TextInput)`
	margin: 8px 0;
	padding-bottom: 16px;
	margin-bottom: 16px;
	padding-left: 5px;
	font-size: ${props => (props.large ? '24px' : '14px')};
	font-weight: 900;
	color: ${COLORS.primary};
`
