import { CalendarRange, Text } from '@ui-kitten/components'
import React from 'react'
import { TextInput, StyleProp, StyleSheet, ViewStyle, View, KeyboardTypeOptions } from 'react-native'
import { getTextStyle } from './theme'

interface IProps {
    name: string
    value?: string
    label?: string
    placeholder?: string
    keyboardType?: KeyboardTypeOptions
    inputStyle?: StyleProp<ViewStyle>
	labelStyle?: StyleProp<ViewStyle>
    textarea?: boolean
    onChange: (name: string, value: string) => void
}
export const UIInput = ({ name, value, label, placeholder, keyboardType, inputStyle, labelStyle, textarea, onChange }: IProps) => {
	return (
        <View style={ss.container}>
            <Text style={[ss.label, labelStyle]}>{label}</Text>
            <TextInput
                style={[ss.input, textarea && ss.textarea, inputStyle]}
                placeholder={placeholder}
                onChangeText={(value) => onChange(name, value)}
                keyboardType={keyboardType}
                multiline={textarea}
                value={value}
                numberOfLines={textarea ? 4 : 1}
            />
        </View>
	)
}

const ss = StyleSheet.create({
	container: {
		marginBottom: 30
    },
    input: {
        borderWidth: 1,
        borderColor: '#F4D150',
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '#fff',
    },
    textarea: {
        textAlignVertical: 'top'
    },
    label: {
        ...getTextStyle(18),
        marginBottom: 10
    }
})
