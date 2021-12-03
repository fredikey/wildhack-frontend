import { FirebaseAuthTypes } from '@react-native-firebase/auth'

export interface IUserData extends FirebaseAuthTypes.User {}

export type UserType = IUserData | null
