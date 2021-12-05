import { container, singleton } from 'tsyringe'
import { makeAutoObservable } from 'mobx'
import { UserType } from '../models/User'
import AsyncStorage from '@react-native-async-storage/async-storage'

const STORAGE_IS_FORM_SENT = 'STORAGE_IS_FORM_SENT'
const STORAGE_IS_TEST_SUCCEED = 'STORAGE_IS_TEST_SUCCEED'

@singleton()
export class UserStore {
	data: UserType = null

	isFormSent = false
	isTestSucceed = false

	constructor() {
		makeAutoObservable(this)

		AsyncStorage.getItem(STORAGE_IS_FORM_SENT).then((value) => {
			if (value !== null) {
				this.setUserSentForm()
			}
		})

		AsyncStorage.getItem(STORAGE_IS_TEST_SUCCEED).then((value) => {
			if (value !== null) {
				this.setUserTestSucceed()
			}
		})
	}

	setUserTestSucceed() {
		this.isTestSucceed = true
		AsyncStorage.setItem(STORAGE_IS_TEST_SUCCEED, 'true')
	}

	setUserSentForm() {
		this.isFormSent = true
		AsyncStorage.setItem(STORAGE_IS_FORM_SENT, 'true')
	}

	setUser(user: UserType) {
		this.data = user
	}
}

export const useUserStore = () => container.resolve(UserStore)
