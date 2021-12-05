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
    textarea?: boolean,
    required?: boolean,
    onChange: (name: string, value: string) => void
}
export const UIInput = ({ name, value, label, placeholder, keyboardType, inputStyle, labelStyle, textarea, required, onChange }: IProps) => {
	return (
        <View style={ss.container}>
            <View style={[ss.label, labelStyle]}>
                {required && <Text style={[ss.requiredMark]}>*</Text>}
                <Text style={[ss.label, labelStyle]}>{label}</Text>
            </View>
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
        marginBottom: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    requiredMark: {
        marginRight: 5,
        ...getTextStyle(18, 'regular', 'red'),
    }
})
