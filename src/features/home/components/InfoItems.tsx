import React from 'react'
import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native'
import { getTextStyle } from '@lib/ui'

interface IProps {
	items: string[]
	style?: StyleProp<ViewStyle>
}
export const InfoItems = ({ items, style }: IProps) => {
	return (
		<View style={style}>
			{items.map((item, idx) => (
				<View style={ss.element} key={idx}>
					<View style={ss.dot} pointerEvents="box-none" />
					<Text style={ss.elementText}>{item}</Text>
				</View>
			))}
		</View>
	)
}

const ss = StyleSheet.create({
	element: {
		position: 'relative',
		flexDirection: 'row',
		marginBottom: 35,
		paddingHorizontal: 28
	},
	elementText: {
		...getTextStyle(24)
	},
	dot: {
		position: 'absolute',
		left: 12,
		top: 15,
		width: 8,
		height: 8,
		borderRadius: 4,
		backgroundColor: '#F4D150'
	}
})
