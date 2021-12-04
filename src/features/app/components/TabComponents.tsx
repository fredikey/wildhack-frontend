import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { Screen } from '@lib/navigation'
import { getTextStyle } from '@lib/ui'
import Icon from 'react-native-vector-icons/Ionicons'

// @ts-expect-error
const TAB_ITEMS: Record<Screen, { icon: string; label: string }> = {
	[Screen.TAB_HOME]: {
		icon: 'home-outline',
		label: 'Главная'
	},
	[Screen.TAB_INFO]: {
		icon: 'newspaper-outline',
		label: 'Информация'
	},
	[Screen.TAB_QUESTIONS]: {
		icon: 'help-outline',
		label: 'Вопросы'
	},
	[Screen.TAB_PROFILE]: {
		icon: 'person-outline',
		label: 'Профиль'
	}
}

interface ITabItemProps {
	route: Screen
	focused: boolean
}
export const TabIcon = ({ route, focused }: ITabItemProps) => (
	<Icon name={TAB_ITEMS[route].icon} style={[ss.icon, focused && ss.iconActive]} />
)

export const TabLabel = ({ route, focused }: ITabItemProps) => (
	<Text style={[ss.text, focused && ss.textActive]}>{TAB_ITEMS[route].label}</Text>
)

const ss = StyleSheet.create({
	icon: {
		fontSize: 24,
		color: '#B4B4B4'
	},
	iconActive: {
		color: '#FFA800'
	},
	text: {
		...getTextStyle(13),
		color: '#B4B4B4',
		marginBottom: 5
	},
	textActive: {
		color: '#000'
	}
})
