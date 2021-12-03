import { useEffect } from 'react'
import { Screen, useResetNavigation } from '@lib/navigation'
import { useAuthStore } from '@feature/user'
import { observer } from 'mobx-react'

export const InitScreen = observer(() => {
	const authStore = useAuthStore()
	const resetNavigation = useResetNavigation()

	const goToMain = () => resetNavigation(Screen.SYSTEM_MAIN)
	const goToAuth = () => resetNavigation(Screen.LOGIN)

	useEffect(() => {
		if (!authStore.isInitialized) {
			return
		}

		if (authStore.isAuthenticated) {
			goToMain()
		} else {
			goToAuth()
		}
	}, [authStore.isInitialized])

	return null
})
