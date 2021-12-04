import { TextStyle } from 'react-native'

type FontWeightType = 'bold' | 'light' | 'medium' | 'regular' | 'semibold' | 'thin'
export const FONT_WEIGHT_MAP: Record<FontWeightType, string> = {
	bold: 'Jost-Bold',
	light: 'Jost-Light',
	medium: 'Jost-Medium',
	regular: 'Jost-Regular',
	semibold: 'Jost-SemiBold',
	thin: 'Jost-Thin'
}

export const getTextStyle = (
	fontSize: number,
	weight: FontWeightType = 'regular'
): Pick<TextStyle, 'fontSize' | 'fontFamily' | 'color'> => {
	return {
		color: '#000',
		fontSize,
		fontFamily: FONT_WEIGHT_MAP[weight] || 'Jost-Regular'
	}
}
