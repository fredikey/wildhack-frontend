import 'core-js/proposals/reflect-metadata'
import 'react-native-gesture-handler'
import React from 'react'
import { StatusBar } from 'react-native'
import { Screen, STACK_SCREEN_OPTIONS } from '@lib/navigation'
import { InitScreen } from '@feature/app'
import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { AuthScreen } from '@feature/user'
import { HomeScreen } from '@feature/home'
import { SubmissionScreen } from '@feature/submission'
import * as eva from '@eva-design/eva'
import { EvaIconsPack } from '@ui-kitten/eva-icons'
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components'

const MainStack = createNativeStackNavigator()
const MainNavigation = () => {
	return (
		<MainStack.Navigator screenOptions={STACK_SCREEN_OPTIONS} initialRouteName={Screen.HOME}>
			<MainStack.Screen name={Screen.HOME} component={HomeScreen} />
			<MainStack.Screen name={Screen.SUBMISSION} component={SubmissionScreen} />
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
			<IconRegistry icons={EvaIconsPack} />
			<ApplicationProvider {...eva} theme={eva.light}>
				<StatusBar backgroundColor="#FFF" barStyle="dark-content" />
				<NavigationContainer theme={appTheme}>
					<Stack.Navigator screenOptions={STACK_SCREEN_OPTIONS} initialRouteName={Screen.SYSTEM_INIT}>
						<Stack.Screen name={Screen.SYSTEM_INIT} component={InitScreen} />
						<Stack.Screen name={Screen.LOGIN} component={AuthScreen} />
						<Stack.Screen name={Screen.SYSTEM_MAIN} component={MainNavigation} />
					</Stack.Navigator>
				</NavigationContainer>
			</ApplicationProvider>
		</>
	)
}

export default App
