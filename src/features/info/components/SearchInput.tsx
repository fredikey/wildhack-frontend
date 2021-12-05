import React, { useEffect, useState } from 'react'
import { StyleProp, StyleSheet, TextStyle } from 'react-native'
import { Input } from '@ui-kitten/components'
import Icon from 'react-native-vector-icons/Ionicons'
import { getTextStyle } from '@lib/ui'

function useDebounceValue(value: string, delay: number) {
	// State and setters for debounced value
	const [debouncedValue, setDebouncedValue] = useState(value)

	useEffect(
		() => {
			// Update debounced value after delay
			const handler = setTimeout(() => {
				setDebouncedValue(value)
			}, delay)

			// Cancel the timeout if value changes (also on delay change or unmount)
			// This is how we prevent debounced value from updating if value is changed ...
			// .. within the delay period. Timeout gets cleared and restarted.
			return () => {
				clearTimeout(handler)
			}
		},
		[value, delay] // Only re-call effect if value or delay changes
	)

	return debouncedValue
}
interface IProps {
	onChange: (val: string) => void
	style?: StyleProp<TextStyle>
}
export const SearchInput = ({ onChange, style }: IProps) => {
	const [inputValue, setInputValue] = useState('')
	const debouncedInputValue = useDebounceValue(inputValue, 250)

	// use debounce onChange to reduce count of request to realm and optimize SearchList
	useEffect(() => {
		onChange(debouncedInputValue)
	}, [debouncedInputValue])

	return (
		<Input
			style={[ss.input, style]}
			value={inputValue}
			onChangeText={setInputValue}
			placeholder="Введите ваш вопрос"
			textStyle={ss.inputText}
			accessoryRight={<Icon name="search-outline" size={20} color="#F4D150" />}
		/>
	)
}

const ss = StyleSheet.create({
	input: {
		flex: 1,
		marginHorizontal: 28,
		height: 44,
		borderWidth: 1,
		borderColor: '#F4D150',
		marginBottom: 20,
		borderRadius: 10,
		backgroundColor: '#fff'
	},
	inputText: {
		...getTextStyle(14, 'medium')
		// color: '#D2D2D2'
	}
})
