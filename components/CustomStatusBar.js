import React from 'react'
import { StatusBar, View } from 'react-native'
import { Constants } from 'expo'

const CustomStatusBar = ({ backgroundColor, ...props }) => {
	return (
		<View
			style={{
				backgroundColor,
				height: Constants.statusBarHeight,
				zIndex: 99,
			}}
		>
			<StatusBar translucent backgroundColor={backgroundColor} {...props} />
		</View>
	)
}

export default CustomStatusBar
