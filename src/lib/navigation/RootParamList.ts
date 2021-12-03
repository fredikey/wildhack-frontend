import { Screen } from './Screen'

declare global {
	namespace ReactNavigation {
		interface RootParamList {
			[Screen.SYSTEM_INIT]: undefined
			[Screen.SYSTEM_MAIN]: undefined

			[Screen.LOGIN]: undefined

			[Screen.HOME]: undefined
		}
	}
}
