import React, { useEffect, useRef, useState } from 'react'
import { ScrollView, StyleSheet, Text, ToastAndroid, View } from 'react-native'
import QuestionIcon from './questionIcon.svg'
import { getTextStyle, UIButton } from '@lib/ui'
import { InfoItems } from '../InfoItems'
import { IQuestionVariant, ITestInfo } from '../../store/testsData'
import { IQuestionRef, Question } from './Question'
import { useTestStore } from '../../store/TestStore'
import { observer } from 'mobx-react'
import { useNavigation } from '@react-navigation/core'
import { Screen } from '@lib/navigation'

interface IProps extends ITestInfo {}
export const TestTemplate = observer(({ title, info, questions }: IProps) => {
	const navigation = useNavigation()
	const testStore = useTestStore()
	const scrollRef = useRef<ScrollView>(null)
	const questionsRef = useRef<(IQuestionRef | null)[]>([])
	const [answer, setAnswer] = useState<(IQuestionVariant | undefined)[]>(questions.map(() => undefined))

	const onChangeAnswer = (idx: number, value: IQuestionVariant) => {
		const newArr = [...answer]
		newArr[idx] = value
		setAnswer(newArr)
	}

	// On next step
	useEffect(() => {
		setAnswer(questions.map(() => undefined))
	}, [questions])

	const onSubmit = () => {
		if (answer.every((item) => item !== undefined && item.isRight)) {
			// all answers are correct
			testStore.goToNextStep()

			if (testStore.isLastStep) {
				navigation.navigate(Screen.HOME_START)
			} else {
				scrollRef.current?.scrollTo({ x: 0, y: 0, animated: true })
			}
		} else {
			// else show errors
			questionsRef.current.forEach((item) => {
				item?.checkIsRight()
			})
			ToastAndroid.show('При прохождении теста была произведена ошибка, повторите попытку.', ToastAndroid.LONG)
		}
	}
	const isButtonDisabled = answer.some((item) => item === undefined)
	return (
		<ScrollView style={ss.container} ref={scrollRef}>
			<View style={[ss.content, ss.titleContainer]}>
				<QuestionIcon />
				<Text style={ss.title}>{title}</Text>
			</View>

			<InfoItems items={info} style={ss.mb25} />
			<View style={ss.content}>
				{questions.map((item, idx) => {
					return (
						<Question
							ref={(ref) => {
								questionsRef.current[idx] = ref
							}}
							selected={answer[idx]}
							onChange={(val) => onChangeAnswer(idx, val)}
							key={idx}
							data={item}
						/>
					)
				})}
				<UIButton onPress={onSubmit} disabled={isButtonDisabled} style={ss.mb25} full>
					{testStore.isLastStep ? 'Завершать' : 'Далее'}
				</UIButton>
			</View>
		</ScrollView>
	)
})

const ss = StyleSheet.create({
	container: {
		flex: 1
	},
	content: {
		paddingHorizontal: 28
	},
	titleContainer: {
		paddingHorizontal: 28,
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 10,
		marginTop: 30
	},
	title: {
		flex: 1,
		marginLeft: 12,
		...getTextStyle(28, 'medium')
	},
	mb25: {
		marginBottom: 25
	}
})
