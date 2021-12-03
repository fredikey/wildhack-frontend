import { useEffect } from 'react'
import { Screen, useResetNavigation } from '@lib/navigation'
import { useAuthStore } from '@feature/user'

export const InitScreen = () => {
	const authStore = useAuthStore()
	const resetNavigation = useResetNavigation()

	const goToMain = () => resetNavigation(Screen.SYSTEM_MAIN)
	const goToAuth = () => resetNavigation(Screen.LOGIN)

	useEffect(() => {
		const init = async () => {
			try {
				await authStore.checkIsAuthenticated()
				if (authStore.isAuthenticated) {
					goToMain()
				} else {
					goToAuth()
				}
			} catch (e) {
				goToAuth()
			}
		}
		init()
	}, [])

	return null
}
