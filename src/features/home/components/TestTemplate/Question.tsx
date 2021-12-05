import React, { forwardRef, Ref, useEffect, useImperativeHandle, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { getTextStyle, UIButton } from '@lib/ui'
import { IQuestion, IQuestionVariant } from '../../store/testsData'

export interface IQuestionRef {
	checkIsRight(): void
}
interface IProps {
	onChange: (value: IQuestionVariant) => void
	selected?: IQuestionVariant
	data: IQuestion
}
export const Question = forwardRef(({ onChange, selected, data }: IProps, ref: Ref<IQuestionRef>) => {
	const [isRight, setIsRight] = useState<boolean>()

	useEffect(() => {
		if (isRight !== undefined) {
			setIsRight(undefined)
		}
	}, [selected])

	useImperativeHandle(
		ref,
		() => ({
			checkIsRight() {
				setIsRight(selected !== undefined && selected.isRight)
			}
		}),
		[selected]
	)

	return (
		<View style={ss.container}>
			<Text style={ss.title}>{data.title}</Text>
			{data.variants.map((item, idx) => {
				const isSelected = selected !== undefined && item.label === selected.label
				const onPressButton = () => {
					onChange(item)
				}

				const showStatus = isSelected && isRight !== undefined
				return (
					<UIButton
						type="secondary"
						style={[ss.item, isSelected && ss.itemSelected, showStatus && (isRight ? ss.itemRight : ss.itemWrong)]}
						onPress={onPressButton}
						key={idx}
						full>
						{item.label}
					</UIButton>
				)
			})}
		</View>
	)
})

const ss = StyleSheet.create({
	container: {
		marginBottom: 50
	},
	title: {
		...getTextStyle(28, 'medium'),
		marginBottom: 18
	},
	item: {
		marginBottom: 20
	},
	itemSelected: {
		borderWidth: 3
	},
	itemWrong: {
		backgroundColor: '#FFCCCC',
		borderColor: '#FF0000'
	},
	itemRight: {
		backgroundColor: '#E6FFCC',
		borderColor: '#52FF00'
	}
})
