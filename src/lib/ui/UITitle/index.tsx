import React from 'react'
import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native'
import { getTextStyle } from '../theme'
import QuestionIcon from './questionIcon.svg'

interface IProps {
	style?: StyleProp<ViewStyle>
	children?: string
}
export const UITitle = ({ children, style }: IProps) => {
	return (
		<View style={[ss.titleContainer, style]}>
			<QuestionIcon />
			<Text style={ss.title}>{children}</Text>
		</View>
	)
}

const ss = StyleSheet.create({
	titleContainer: {
		paddingHorizontal: 28,
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 12,
		marginTop: 30
	},
	title: {
		flex: 1,
		marginLeft: 12,
		...getTextStyle(28, 'medium')
	}
})
