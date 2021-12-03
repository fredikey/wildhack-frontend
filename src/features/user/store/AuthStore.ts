import { container, singleton } from 'tsyringe'
import { makeAutoObservable } from 'mobx'
import { GoogleSignin } from '@react-native-google-signin/google-signin'
import auth from '@react-native-firebase/auth'
import { UserStore } from './UserStore'
import { IUser } from '../models/User'

GoogleSignin.configure({
	webClientId: '113325607362-m9tpocunoo52c62ikekmkgr7r2je44k4.apps.googleusercontent.com'
})

@singleton()
export class AuthStore {
	private userStore = container.resolve(UserStore)
	isInitialized = false
	isAuthenticated = false

	constructor() {
		makeAutoObservable<AuthStore, 'userStore'>(this, {
			userStore: false
		})

		auth().onAuthStateChanged(this.onAuthStateChanged)
	}

	private onAuthStateChanged = (user: IUser | null) => {
		this.userStore.setUser(user)
		this.isAuthenticated = user !== null

		if (!this.isInitialized) {
			this.isInitialized = true
		}
	}

	async googleSignIn() {
		// Get the users ID token
		const { idToken } = await GoogleSignin.signIn()

		// Create a Google credential with the token
		const googleCredential = auth.GoogleAuthProvider.credential(idToken)

		// Sign-in the user with the credential
		auth().signInWithCredential(googleCredential)
	}
}

export const useAuthStore = () => container.resolve(AuthStore)
