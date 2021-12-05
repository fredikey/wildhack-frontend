import React, { useState } from 'react'
import { Logo } from '../components/RequestFormLogo'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { getTextStyle, UIButton, UIDatePicker, UIInput } from '@lib/ui'
import { useNavigation } from '@react-navigation/core'
import { CalendarRange } from '@ui-kitten/components'
import { Screen } from '@lib/navigation'
import { useUserStore } from '@feature/user'

export const FormScreen = () => {
	const navigation = useNavigation()
	const userStore = useUserStore()

	const onSubmit = () => {
		userStore.setUserSentForm()
		navigation.navigate(Screen.HOME_START)
	}

	const [formData, setFormData] = useState({
		fullname: '',
		mail: '',
		birthday: '',
		phone: '',
		education: '',
		area: '',
		date: {},
		languages: '',
		experience: '',
		skills: '',
		recommendations: '',
		links: '',
		about: ''
	})

	const handleChange = (name: string, value: string) => {
		setFormData({
			...formData,
			[name]: value
		})
	}

	const handleChangeRange = (value: CalendarRange<Date>) => {
		setFormData({
			...formData,
			date: value
		})
	}

	const formItems = [
		{ id: 0, name: 'fullname', label: 'ФИО', placeholder: 'Введите ФИО', value: formData.fullname },
		{
			id: 1,
			name: 'mail',
			label: 'Email',
			placeholder: 'Введите Email',
			value: formData.mail,
			keyboardType: 'email-address'
		},
		{ id: 2, name: 'birthday', label: 'Год рождения', placeholder: 'Введите год рождения', value: formData.birthday },
		{ id: 3, name: 'phone', label: 'Телефон', placeholder: 'Введите телефон', value: formData.phone },
		{
			id: 4,
			name: 'education',
			label: 'Образование',
			placeholder: 'Введите ваше образование',
			value: formData.education
		},
		{ id: 5, name: 'area', label: 'Желаемая территория', placeholder: 'Введите территорию', value: formData.area },
		{ id: 6, name: 'date', label: 'Дата заезда / выезда', placeholder: 'Выберите даты', value: formData.date },
		{ id: 7, name: 'languages', label: 'Знание языков', placeholder: 'Введите языки', value: formData.languages },
		{
			id: 8,
			name: 'experience',
			label: 'Опыт в волонтерстве',
			placeholder: 'Введите ваш опыт',
			value: formData.experience
		},
		{ id: 9, name: 'skills', label: 'Навыки', placeholder: 'Введите ваши навыки', value: formData.skills },
		{
			id: 10,
			name: 'recommendations',
			label: 'Почему именно ты?',
			placeholder: 'Введите текст',
			value: formData.recommendations
		},
		{ id: 11, name: 'links', label: 'Ссылка на видео о себе', placeholder: 'Вставьте ссылку', value: formData.links },
		{
			id: 12,
			name: 'about',
			label: 'Комментарий',
			placeholder: 'Введите комментарий',
			value: formData.about,
			textarea: true
		}
	]

	return (
		<ScrollView>
			<SafeAreaView style={ss.container}>
				<View style={ss.titleContainer}>
					<Logo />
					<Text style={ss.title}>Подача заявки</Text>
				</View>
				<Text style={ss.description}>Заполните первую анкету для дальнейших действий</Text>

				{formItems.map((item) => {
					if (item.id === 6) {
						return (
							<UIDatePicker
								key={item.id}
								name={item.name}
								value={item.value}
								label={item?.label}
								placeholder={item?.placeholder}
								onChange={handleChangeRange}
							/>
						)
					}
					return (
						<UIInput
							key={item.id}
							name={item.name}
							value={item.value.toString()}
							label={item?.label}
							placeholder={item?.placeholder}
							textarea={item?.textarea}
							onChange={handleChange}
						/>
					)
				})}
				<View style={ss.button}>
					<UIButton onPress={onSubmit}>Отправить анкету</UIButton>
				</View>
			</SafeAreaView>
		</ScrollView>
	)
}

const ss = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		padding: 30
	},
	titleContainer: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 15
	},
	title: {
		...getTextStyle(22, 'medium'),
		marginLeft: 12
	},
	description: {
		marginBottom: 18,
		...getTextStyle(18, 'regular', '#757575')
	},
	button: {
		display: 'flex',
		alignItems: 'center'
	}
})
