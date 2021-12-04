import React from 'react'
import { GestureResponderEvent, StyleProp, StyleSheet, TouchableOpacity, ViewStyle, Text } from 'react-native'
import { getTextStyle } from './theme'

interface IProps {
	type?: 'primary' | 'secondary'
	onPress?: (evt: GestureResponderEvent) => void
	style?: StyleProp<ViewStyle>
	children?: string
	full?: boolean
}
export const UIButton = ({ type, onPress, style, children, full }: IProps) => {
	const isSecondary = type === 'secondary'
	return (
		<TouchableOpacity
			activeOpacity={0.7}
			style={[ss.button, isSecondary && ss.buttonSecondary, full && ss.buttonFull, style]}
			onPress={onPress}>
			<Text style={[ss.buttonText, isSecondary && ss.buttonSecondaryText]}>{children}</Text>
		</TouchableOpacity>
	)
}

const ss = StyleSheet.create({
	button: {
		height: 54,
		width: 250,
		backgroundColor: '#FFA800',
		borderRadius: 10,
		alignItems: 'center',
		justifyContent: 'center'
	},
	buttonFull: {
		width: '100%'
	},
	buttonText: {
		...getTextStyle(16, 'medium'),
		color: '#fff'
	},
	buttonSecondary: {
		backgroundColor: '#FFEECC',
		borderWidth: 1,
		borderColor: '#FFA800'
	},
	buttonSecondaryText: {
		color: '#000'
	}
})
