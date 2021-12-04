import React, { useEffect } from 'react'
import { Logo } from '../components/SubmissionLogo'
import { StyleSheet, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { getTextStyle, UIButton } from '@lib/ui'
import { useNavigation } from '@react-navigation/core'
import { Screen } from '@lib/navigation'
import { hideSplashScreen } from '@lib/splash'

export const HomeScreen = () => {
	const navigation = useNavigation()

	useEffect(() => {
		hideSplashScreen()
	}, [])

	const goToForm = () => {
		navigation.navigate(Screen.HOME_FORM)
	}
	return (
		<SafeAreaView style={ss.container}>
			<Logo />
			<Text style={ss.title}>Подача заявки</Text>
			<Text style={ss.description}>Вы хотите стать волонтером?{'\n'} Подайте заявку!</Text>
			<UIButton onPress={goToForm}>Стать волонтером</UIButton>
		</SafeAreaView>
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
		marginBottom: 10,
		...getTextStyle(32, 'medium')
	},
	description: {
		textAlign: 'center',
		marginBottom: 50,
		...getTextStyle(26)
	}
})
