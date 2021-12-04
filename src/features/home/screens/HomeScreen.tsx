import React, { useEffect } from 'react'
import {  Button, Layout, Text } from '@ui-kitten/components'

import { hideSplashScreen } from '@lib/splash'
import { StyleSheet } from 'react-native'
import { Screen, useResetNavigation } from '@lib/navigation'

export const HomeScreen = () => {

	const resetNavigation = useResetNavigation()

	useEffect(() => {
		hideSplashScreen()
	}, [])
	
	const onPressHandler = () => {
		resetNavigation(Screen.SUBMISSION)
	}

	return (
		<Layout style={ss.container}>
			<Text category="p1" style={ss.title}>
				Личный кабинет волонтера
			</Text>
			<Text category="h1" style={ss.description}>
				Андрей Андреевич
			</Text>
			<Text category="p1" style={ss.title}>
				Статус
			</Text>
			<Text category="h1" style={ss.description}>
				Подача заявки
			</Text>
			<Button onPress={onPressHandler} appearance="outline" size="giant">
				Подача заявки
			</Button>
		</Layout>
	)
}

const ss = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center'
	},
	title: {
		marginTop: 5,
		marginBottom: 10
	},
	description: {
		textAlign: 'center',
		marginBottom: 30
	}
})
