import { Text } from 'react-native'
import styled from 'styled-components/native'
import COLORS from '../styles/colors'

export const TEXT_SIZE = {
	XL: '36px',
	L: '32px',
	M: '24px',
	S: '20px',
	XS: '16px',
	XXS: '12px',
}

export const Header = styled(Text)`
	color: ${props => (props.accent ? COLORS.accent : COLORS.primary)};
	font-size: ${props =>
		(props.size === 'XL' && TEXT_SIZE.XL) ||
		(props.size === 'L' && TEXT_SIZE.L) ||
		(props.size === 'M' && TEXT_SIZE.M) ||
		(props.size === 'S' && TEXT_SIZE.S) ||
		(props.size === 'XS' && TEXT_SIZE.XS) ||
		(props.size === 'XXS' && TEXT_SIZE.XXS)};
	font-weight: ${props =>
		(props.size === 'XL' && 400) ||
		(props.size === 'L' && 900) ||
		(props.size === 'M' && 900) ||
		(props.size === 'S' && 400) ||
		(props.size === 'XS' && 400) ||
		(props.size === 'XXS' && 600)};
	text-align: ${props => (props.center ? 'center' : 'left')};
	margin: 1% 0px;
`
