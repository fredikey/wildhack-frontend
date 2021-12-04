import React from 'react'
import { Image, StyleSheet } from 'react-native'
import LogoSrc from './app-logo.png'

export const Logo = () => {
	return <Image style={ss.container} resizeMode="contain" source={LogoSrc} />
}

const ss = StyleSheet.create({
	container: { width: 155, height: 155 }
})
