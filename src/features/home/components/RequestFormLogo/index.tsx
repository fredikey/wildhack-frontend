import React from 'react'
import { Image, StyleSheet } from 'react-native'
import LogoSrc from './requestFormLogo.png'

export const Logo = () => {
	return <Image style={ss.container} resizeMode="contain" source={LogoSrc} />
}

const ss = StyleSheet.create({
	container: { width: 48, height: 48 }
})
