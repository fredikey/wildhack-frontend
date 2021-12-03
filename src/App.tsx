import 'reflect-metadata'
import 'react-native-gesture-handler'
import React from 'react'
import { StatusBar } from 'react-native'
import { Screen, STACK_SCREEN_OPTIONS } from '@lib/navigation'
import { InitScreen } from '@feature/app'
import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { AuthScreen } from './features/user/screens/AuthScreen'
import { HomeScreen } from '@feature/home'

const MainStack = createNativeStackNavigator()
const MainNavigation = () => {
	return (
		<MainStack.Navigator screenOptions={STACK_SCREEN_OPTIONS} initialRouteName={Screen.SYSTEM_MAIN}>
			<MainStack.Screen name={Screen.HOME} component={HomeScreen} />
		</MainStack.Navigator>
	)
}

const appTheme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		background: '#FFF'
	}
}
const Stack = createNativeStackNavigator()
const App = () => {
	return (
		<>
			<StatusBar backgroundColor="#FFF" barStyle="dark-content" />
			<NavigationContainer theme={appTheme}>
				<Stack.Navigator screenOptions={STACK_SCREEN_OPTIONS} initialRouteName={Screen.SYSTEM_INIT}>
					<Stack.Screen name={Screen.SYSTEM_INIT} component={InitScreen} />
					<Stack.Screen name={Screen.LOGIN} component={AuthScreen} />
					<Stack.Screen name={Screen.SYSTEM_MAIN} component={MainNavigation} />
				</Stack.Navigator>
			</NavigationContainer>
		</>
	)
}

export default App
