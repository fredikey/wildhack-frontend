import {singleton, container} from 'tsyringe'
import { makeAutoObservable } from "mobx";

@singleton()
export class AuthStore {
  isAuthenticated = false
  
  constructor() {
    makeAutoObservable(this)
  }
  
  async checkIsAuthenticated () {
    ///
  }
  
}

export const useAuthStore = () => container.resolve(AuthStore)
