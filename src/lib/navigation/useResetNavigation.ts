import { Screen } from './Screen'
import { useNavigation } from '@react-navigation/core'

export const useResetNavigation = () => {
	const navigation = useNavigation()
	return function reset(name: Screen) {
		navigation.reset({
			index: 0,
			routes: [{ name }]
		})
	}
}
