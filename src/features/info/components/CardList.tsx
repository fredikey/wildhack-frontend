import React, { useMemo, useState } from 'react'
import { ScrollView, StyleSheet, Text } from 'react-native'
import { IInfo } from '../models/Info'
import { UITitle } from '@lib/ui/UITitle'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Card } from './Card'
import { SearchInput } from './SearchInput'
import { getTextStyle } from '@lib/ui'

interface IProps {
	items: IInfo[]
	title: string
}
export const CardList = ({ title, items }: IProps) => {
	const [searchValue, setSearchValue] = useState('')

	const filteredItems = useMemo(() => {
		if (searchValue === '') {
			return items
		}
		const formattedSearchValue = searchValue.trim().toLowerCase()
		return items.filter((item) => {
			return item.title.toLowerCase().includes(formattedSearchValue)
		})
	}, [searchValue])
	return (
		<SafeAreaView>
			<ScrollView>
				<UITitle>{title}</UITitle>
				<SearchInput onChange={setSearchValue} />
				{filteredItems.map((item, idx) => (
					<Card key={idx} text={item.text} title={item.title} short={item.short} />
				))}
				{filteredItems.length === 0 && <Text style={ss.empty}>Ничего не найдено</Text>}
			</ScrollView>
		</SafeAreaView>
	)
}

const ss = StyleSheet.create({
	empty: {
		...getTextStyle(20, 'medium'),
		marginTop: 25,
		textAlign: 'center'
	}
})
