import { Button, Layout, Text } from '@ui-kitten/components'
import React from 'react'
import { Logo } from '../components/SubmissionLogo'
import { StyleSheet } from 'react-native'

export const SubmissionScreen = () => {

	return (
		<Layout style={ss.container}>
			<Logo />
			<Text category="h1" style={ss.title}>
				Подача заявки
			</Text>
			<Text category="p1" style={ss.description}>
				Вы хотите стать волонтером? Подайте заявку!
			</Text>
			<Button appearance="filled" size="giant">
				Стать волонтером
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
