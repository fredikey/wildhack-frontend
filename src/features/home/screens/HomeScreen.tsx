import React, { useEffect } from 'react'
import { Logo } from '../components/SubmissionLogo'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { getTextStyle, UIButton } from '@lib/ui'
import { useNavigation } from '@react-navigation/core'
import { Screen } from '@lib/navigation'
import { hideSplashScreen } from '@lib/splash'
import { observer } from 'mobx-react'
import { useUserStore } from '@feature/user'
import { UITitle } from '@lib/ui/UITitle'
import { InfoItems } from '../components/InfoItems'

const FORM_SENT_ITEMS = [
	'Ваша заявка была принята, осталось только ознакомиться со всей информацией. Она пройдёт в несколько этапов.',
	'На каждом этапе вам нужно будет ответить на парочку вопросов, чтобы убедиться, что вы ознакомились с материалом'
]

const TEST_SUCCEED_ITEMS = [
	'Ты познакомился с информацией и правильно ответил на вопросы.',
	'Помни, что все сведения ты можешь найти на вкладках «Информация» и «Вопросы и ответы».',
	'Твоя заявка на рассмотрении. Мы свяжемся с тобой, когда просмотрим всю информацию.'
]
export const HomeScreen = observer(() => {
	const navigation = useNavigation()
	const userStore = useUserStore()

	useEffect(() => {
		hideSplashScreen()
	}, [])

	const goToQuestions = () => {
		navigation.navigate(Screen.HOME_QUESTIONS)
	}
	const goToForm = () => {
		navigation.navigate(Screen.HOME_FORM)
	}

	if (userStore.isTestSucceed) {
		return (
			<SafeAreaView style={ss.formSentContainer}>
				<UITitle>Молодец!</UITitle>
				<InfoItems items={TEST_SUCCEED_ITEMS} />
			</SafeAreaView>
		)
	}

	if (userStore.isFormSent) {
		return (
			<SafeAreaView style={ss.formSentContainer}>
				<View>
					<UITitle>Информация</UITitle>
					<InfoItems items={FORM_SENT_ITEMS} />
				</View>
				<UIButton style={ss.button} onPress={goToQuestions}>
					Приступить
				</UIButton>
			</SafeAreaView>
		)
	}

	return (
		<SafeAreaView style={ss.container}>
			<Logo />
			<Text style={ss.title}>Подача заявки</Text>
			<Text style={ss.description}>Вы хотите стать волонтером?{'\n'} Подайте заявку!</Text>
			<UIButton onPress={goToForm}>Стать волонтером</UIButton>
		</SafeAreaView>
	)
})

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
	},
	formSentContainer: {
		justifyContent: 'space-between'
	},
	button: {
		alignSelf: 'center'
	}
})
