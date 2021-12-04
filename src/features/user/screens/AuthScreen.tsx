import { Button, Icon, Layout, Text } from '@ui-kitten/components'
import React, { useEffect } from 'react'
import { Logo } from '../components/Logo'
import { StyleSheet, ToastAndroid } from 'react-native'
import { useAuthStore } from '../store/AuthStore'
import { Screen, useResetNavigation } from '@lib/navigation'
import { hideSplashScreen } from '@lib/splash'

export const AuthScreen = () => {
	const authStore = useAuthStore()
	const resetNavigation = useResetNavigation()

	useEffect(() => {
		hideSplashScreen()
	}, [])

	const onGoogleButtonPress = () => {
		authStore
			.googleSignIn()
			.then(() => {
				resetNavigation(Screen.HOME)
			})
			.catch((err) => {
				if (err.message) {
					ToastAndroid.show(err.message, ToastAndroid.LONG)
				}
			})
	}
	return (
		<Layout style={ss.container}>
			<Logo />
			<Text category="h1" style={ss.title}>
				Для волонтеров
			</Text>
			<Text category="p1" style={ss.description}>
				Приложение для коммуникации с волонтерами, еще какой-нибудь текст...
			</Text>
			<Button onPress={onGoogleButtonPress} accessoryLeft={<Icon name="google" />} appearance="outline" size="giant">
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
