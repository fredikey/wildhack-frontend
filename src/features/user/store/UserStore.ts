import { container, singleton } from 'tsyringe'
import { makeAutoObservable } from 'mobx'
import { IUser } from '../models/User'

@singleton()
export class UserStore {
	data: IUser | null = null

	constructor() {
		makeAutoObservable(this)
	}

	setUser(user: IUser | null) {
		this.data = user
	}
}

export const useUserStore = () => container.resolve(UserStore)
