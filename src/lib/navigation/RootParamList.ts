import { Screen } from './Screen'

declare global {
	namespace ReactNavigation {
		interface RootParamList {
			[Screen.SYSTEM_INIT]: undefined
			[Screen.SYSTEM_MAIN]: undefined
			[Screen.LOGIN]: undefined

			[Screen.TAB_HOME]: undefined
			[Screen.HOME_START]: undefined
			[Screen.HOME_FORM]: undefined
			[Screen.HOME_QUESTIONS]: undefined
			[Screen.TAB_QUESTIONS]: undefined
			[Screen.TAB_INFO]: undefined
			[Screen.TAB_PROFILE]: undefined
		}
	}
}
