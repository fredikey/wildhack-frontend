import { tests } from './testsData'
import { makeAutoObservable } from 'mobx'
import { container, singleton } from 'tsyringe'

@singleton()
export class TestStore {
	tests = tests
	stepIdx = 0

	constructor() {
		makeAutoObservable(this, {
			tests: false,
			allStepsCount: false
		})
	}

	get allStepsCount() {
		return tests.length
	}

	get isLastStep() {
		return tests.length - 1 === this.stepIdx
	}

	get currentTest() {
		return tests[this.stepIdx]
	}

	goToNextStep() {
		if (!this.isLastStep) {
			this.stepIdx += 1
		}
	}
}

export const useTestStore = () => container.resolve(TestStore)
