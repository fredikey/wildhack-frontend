import { Button, Icon, Layout, Text } from '@ui-kitten/components'
import React from 'react'
import { Logo } from '../components/Logo'
import { StyleSheet } from 'react-native'

export const AuthScreen = () => {
	return (
		<Layout style={ss.container}>
			<Logo />
			<Text category="h1" style={ss.title}>
				Для волонтеров
			</Text>
			<Text category="p1" style={ss.description}>
				Приложение для коммуникации с волонтерами, еще какой-нибудь текст...
			</Text>
			<Button accessoryLeft={<Icon name="google" />} appearance="outline" size="giant">
				Войти через Google
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
