import React from 'react'
import { TestTemplate } from '../components/TestTemplate'
import { observer } from 'mobx-react'
import { useTestStore } from '../store/TestStore'
import { TestProgress } from '../components/TestProgress'

export const HomeTestScreen = observer(() => {
	const testStore = useTestStore()

	const stepData = testStore.currentTest
	return (
		<>
			<TestTemplate title={stepData.title} info={stepData.info} questions={stepData.questions} />
			<TestProgress />
		</>
	)
})
