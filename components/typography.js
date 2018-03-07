import { Text } from 'react-native'
import styled from 'styled-components/native'
import COLORS from '../styles/colors'

export const TEXT_SIZE = {
	XL: '36px',
	L: '32px',
	M: '28px',
	S: '24px',
	XS: '16px',
	XXS: '14px',
}

export const Header = styled(Text)`
	color: ${props => (props.primary ? COLORS.primary : COLORS.subtle)};
	font-size: ${props =>
		(props.size === 'XL' && '36px') ||
		(props.size === 'L' && '32px') ||
		(props.size === 'M' && '28px') ||
		(props.size === 'S' && '24px') ||
		(props.size === 'XS' && '16px') ||
		(props.size === 'XXS' && '14px')};
	font-weight: ${props =>
		(props.size === 'XL' && 400) ||
		(props.size === 'L' && 700) ||
		(props.size === 'M' && 900) ||
		(props.size === 'S' && 400) ||
		(props.size === 'XS' && 400) ||
		(props.size === 'XXS' && 600)};
	text-align: ${props => (props.center ? 'center' : 'left')};
	margin: 1% 0;
`
