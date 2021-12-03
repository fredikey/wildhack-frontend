import { container, singleton } from 'tsyringe'
import { makeAutoObservable } from 'mobx'
import { UserType } from '../models/User'

@singleton()
export class UserStore {
	data: UserType = null

	constructor() {
		makeAutoObservable(this)
	}

	setUser(user: UserType) {
		this.data = user
	}
}

export const useUserStore = () => container.resolve(UserStore)
