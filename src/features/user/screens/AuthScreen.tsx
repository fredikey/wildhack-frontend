import { Layout, Text } from '@ui-kitten/components'
import React, { useEffect } from 'react'
import { Logo } from '../components/Logo'
import { StyleSheet, ToastAndroid } from 'react-native'
import { useAuthStore } from '../store/AuthStore'
import { Screen, useResetNavigation } from '@lib/navigation'
import { hideSplashScreen } from '@lib/splash'
import { deviceHeight, deviceWidth } from '@lib/device'
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
			<Text style={ss.description}>Здесь должна быть дополнительная поясняющая информация</Text>
			<UIButton onPress={onGoogleButtonPress}>Войти с помощю Google</UIButton>
		</Layout>
	)
}
console.log(deviceWidth, deviceHeight)
const ss = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center'
	},
	title: {
		...getTextStyle(32, 'medium'),
		marginTop: 17,
		marginBottom: 9
	},
	description: {
		...getTextStyle(18),
		textAlign: 'center',
		marginBottom: 50,
		maxWidth: deviceWidth - 100
	}
})
