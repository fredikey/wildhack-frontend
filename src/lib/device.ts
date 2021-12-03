import { Dimensions, Platform } from 'react-native'

export const deviceWidth = Dimensions.get('window').width
export const deviceHeight = Dimensions.get('window').height
export const isSmallScreen = deviceWidth < 375

export const isAndroid = Platform.OS === 'android'
export const isIOS = Platform.OS === 'ios'
