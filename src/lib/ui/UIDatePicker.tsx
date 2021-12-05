import { CalendarRange, Text } from '@ui-kitten/components'
import React, { useState } from 'react'
import { StyleSheet, View, } from 'react-native'
import { NativeDateService, RangeDatepicker } from '@ui-kitten/components'
import { getTextStyle } from './theme'

interface IProps {
    name: string
    value?: {} | CalendarRange<Date>
    label?: string
    placeholder?: string
    required?: boolean,
    onChange: (value: CalendarRange<Date>) => void
}
export const UIDatePicker = ({ name, value, label, placeholder, required, onChange }: IProps) => {

    const [range, setRange] = useState({});

    // const useDatepickerState = () => {
    //     return { range, onSelect: setRange };
    // };

    const i18n: any = {
        dayNames: {
            short: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
            long: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
        },
        monthNames: {
            short: ['Янв', 'Фев', 'Март', 'Апр', 'Май', 'Июнь', 'Июль', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
            long: [
            'Январь',
            'Февраль',
            'Март',
            'Апрель',
            'Май',
            'Июнь',
            'Июль',
            'Август',
            'Сентябрь',
            'Октябрь',
            'Ноябрь',
            'Декабрь',
            ],
        },
    }

    const localeDateService = new NativeDateService('ru', { i18n, startDayOfWeek: 1 });

	return (
        <View style={ss.container}>
            <View style={ss.label}>
                {required && <Text style={[ss.requiredMark]}>*</Text>}
                <Text style={ss.label}>{label}</Text>
            </View>
            <RangeDatepicker
                style={{ borderRadius: 50 }}
                placeholder={placeholder}
                dateService={localeDateService}
                range={value}
                onSelect={(value) => onChange(value)}
            />
        </View>
	)
}

const ss = StyleSheet.create({
	container: {
		marginBottom: 30
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
