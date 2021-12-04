import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useAuthStore } from '../store/AuthStore'
import { Screen, useResetNavigation } from '@lib/navigation'
import { hideSplashScreen } from '@lib/splash'
import { getTextStyle, UIButton } from '@lib/ui'
import { useUserStore } from '../store/UserStore'

export const ProfileScreen = () => {
	const authStore = useAuthStore()
	const userStore = useUserStore()
	const resetNavigation = useResetNavigation()

	useEffect(() => {
		hideSplashScreen()
	}, [])

	const onLogout = () => {
		authStore.logout().then(() => {
			resetNavigation(Screen.LOGIN)
		})
	}
	return (
		<View style={ss.container}>
			<View>
				<Text style={ss.title}>Личный кабинет волонтёра</Text>
				<Text style={ss.name}>{userStore.data?.displayName}</Text>
				<Text style={ss.email}>{userStore.data?.email}</Text>
			</View>
			<UIButton style={ss.button} onPress={onLogout} full>
				Выйти из аккаунта
			</UIButton>
		</View>
	)
}

const ss = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		paddingHorizontal: 28,
		paddingTop: 30,
		justifyContent: 'space-between'
	},
	title: {
		...getTextStyle(26),
		marginBottom: 20
	},
	name: {
		...getTextStyle(32, 'medium')
	},
	email: {
		...getTextStyle(24)
	},
	button: {
		marginBottom: 20
	}
})
