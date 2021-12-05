import { Layout, Text } from '@ui-kitten/components'
import React, { useEffect } from 'react'
import { Logo } from '../components/Logo'
import { StyleSheet, ToastAndroid } from 'react-native'
import { useAuthStore } from '../store/AuthStore'
import { Screen, useResetNavigation } from '@lib/navigation'
import { hideSplashScreen } from '@lib/splash'
import { deviceWidth } from '@lib/device'
import { getTextStyle, UIButton } from '@lib/ui'

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
				resetNavigation(Screen.SYSTEM_MAIN)
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
			<Text style={ss.title}>Для волонтёров</Text>
			<Text style={ss.description}>Привет, будущий волонтер!{'\n'} Хочешь помогать природе? Все в твоих руках.</Text>
			<UIButton onPress={onGoogleButtonPress}>Войти с помощю Google</UIButton>
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
		...getTextStyle(32, 'medium'),
		marginTop: 23,
		marginBottom: 15
	},
	description: {
		...getTextStyle(24),
		textAlign: 'center',
		marginBottom: 92,
		maxWidth: deviceWidth - 100
	}
})
