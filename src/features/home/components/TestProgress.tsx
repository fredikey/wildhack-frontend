import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useTestStore } from '../store/TestStore'
import { observer } from 'mobx-react'
import { deviceWidth } from '@lib/device'
import { getTextStyle } from '@lib/ui'

export const TestProgress = observer(() => {
	const testStore = useTestStore()
	const currentPage = testStore.stepIdx + 1

	const progressWidth = (currentPage / testStore.allStepsCount) * deviceWidth

	return (
		<View style={ss.container}>
			<View style={ss.info}>
				<Text style={ss.infoLabel}>
					{currentPage} / {testStore.allStepsCount}
				</Text>
			</View>
			<View style={[ss.progress, { width: progressWidth }]} />
		</View>
	)
})

const ss = StyleSheet.create({
	container: {
		position: 'relative'
	},
	progress: {
		marginBottom: 1,
		height: 3,
		backgroundColor: '#FFA800'
	},
	info: {
		position: 'absolute',
		left: 24,
		bottom: 15,
		paddingHorizontal: 6,
		height: 26,
		borderWidth: 1,
		borderColor: '#FFA800',
		backgroundColor: '#fff',
		elevation: 8,
		borderRadius: 5
	},
	infoLabel: {
		minWidth: 21,
		...getTextStyle(14)
	}
})
