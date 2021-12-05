import React from 'react'
import { GestureResponderEvent, StyleProp, StyleSheet, TouchableOpacity, ViewStyle, Text } from 'react-native'
import { getTextStyle } from './theme'

interface IProps {
	type?: 'primary' | 'secondary'
	onPress?: (evt: GestureResponderEvent) => void
	style?: StyleProp<ViewStyle>
	children?: string
	full?: boolean
	disabled?: boolean
}
export const UIButton = ({ type, onPress, style, children, full, disabled }: IProps) => {
	const isSecondary = type === 'secondary'
	return (
		<TouchableOpacity
			activeOpacity={0.7}
			disabled={disabled}
			style={[
				ss.button,
				isSecondary && ss.buttonSecondary,
				disabled && ss.buttonDisabled,
				full && ss.buttonFull,
				style
			]}
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
		marginHorizontal: 10,
		textAlign: 'center',
		...getTextStyle(16, 'medium'),
		color: '#fff'
	},
	buttonDisabled: {
		opacity: 0.5
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
