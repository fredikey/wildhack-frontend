import 'core-js/proposals/reflect-metadata'
import 'react-native-gesture-handler'
import React from 'react'
import { StatusBar, View, Text } from 'react-native'
import { Screen, STACK_SCREEN_OPTIONS } from '@lib/navigation'
import { InitScreen, TabIcon, TabLabel } from '@feature/app'
import { DefaultTheme, NavigationContainer, RouteProp } from '@react-navigation/native'
import { default as theme } from './lib/ui/custom-theme.json'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { AuthScreen, ProfileScreen } from '@feature/user'
import { HomeTestScreen, FormScreen, HomeScreen } from '@feature/home'
import * as eva from '@eva-design/eva'
import { ApplicationProvider } from '@ui-kitten/components'
import { BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { FAQScreen, InfoScreen } from '@feature/info'

const Tab = createBottomTabNavigator()

type TabScreenOptions = ({ route }: { route: RouteProp<any> }) => BottomTabNavigationOptions
const tabScreenOptions: TabScreenOptions = ({ route }) => ({
	tabBarIcon: ({ focused }) => <TabIcon route={route.name as Screen} focused={focused} />,
	tabBarLabel: ({ focused }) => <TabLabel route={route.name as Screen} focused={focused} />,
	headerShown: false,
	tabBarHideOnKeyboard: true,
	tabBarStyle: {
		backgroundColor: '#fff',
		borderTopWidth: 0,
		height: 55
	}
})

const EmptyScreen = () => {
	return (
		<View>
			<Text>screen</Text>
		</View>
	)
}

const HomeStack = createNativeStackNavigator()

const HomeNavigation = () => {
	return (
		<HomeStack.Navigator screenOptions={STACK_SCREEN_OPTIONS} initialRouteName={Screen.HOME_START}>
			<HomeStack.Screen name={Screen.HOME_START} component={HomeScreen} />
			<HomeStack.Screen name={Screen.HOME_FORM} component={FormScreen} />
			<HomeStack.Screen name={Screen.HOME_QUESTIONS} component={HomeTestScreen} />
		</HomeStack.Navigator>
	)
}
const MainNavigation = () => {
	return (
		<Tab.Navigator screenOptions={tabScreenOptions} initialRouteName={Screen.TAB_HOME}>
			<Tab.Screen name={Screen.TAB_HOME} component={HomeNavigation} />
			<Tab.Screen name={Screen.TAB_INFO} component={InfoScreen} />
			<Tab.Screen name={Screen.TAB_QUESTIONS} component={FAQScreen} />
			<Tab.Screen name={Screen.TAB_PROFILE} component={ProfileScreen} />
		</Tab.Navigator>
	)
}

const appTheme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		background: '#F6FAFF'
	}
}
const Stack = createNativeStackNavigator()
const App = () => {
	return (
		<ApplicationProvider {...eva} theme={{...eva.light, ...theme}}>
			<StatusBar backgroundColor="#FFF" barStyle="dark-content" />
			<NavigationContainer theme={appTheme}>
				<Stack.Navigator screenOptions={STACK_SCREEN_OPTIONS} initialRouteName={Screen.SYSTEM_INIT}>
					<Stack.Screen name={Screen.SYSTEM_INIT} component={InitScreen} />
					<Stack.Screen name={Screen.LOGIN} component={AuthScreen} />
					<Stack.Screen name={Screen.SYSTEM_MAIN} component={MainNavigation} />
				</Stack.Navigator>
			</NavigationContainer>
		</ApplicationProvider>
	)
}

export default App
