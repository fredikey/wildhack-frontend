import { Screen } from './Screen'

declare global {
	namespace ReactNavigation {
		interface RootParamList {
			[Screen.SYSTEM_INIT]: undefined
			[Screen.SYSTEM_MAIN]: undefined
			[Screen.Login]: undefined

			[TAB_HOME]: undefined
			[HOME_START]: undefined
			[HOME_FORM]: undefined
			[HOME_QUESTIONS]: undefined
			[TAB_QUESTIONS]: undefined
			[TAB_INFO]: undefined
			[TAB_PROFILE]: undefined
		}
	}
}
