import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import { hideSplashScreen } from '@lib/splash'

export const HomeScreen = () => {
	useEffect(() => {
		hideSplashScreen()
	}, [])

	return (
		<View>
			<Text>HomeScreen</Text>
		</View>
	)
}
