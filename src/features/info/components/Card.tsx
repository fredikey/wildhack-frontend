import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { getTextStyle } from '@lib/ui'
import Icon from 'react-native-vector-icons/Ionicons'
import Modal from 'react-native-modal'

const useModal = () => {
	const [visible, setVisible] = useState(false)
	return {
		visible,
		close() {
			setVisible(false)
		},
		open() {
			setVisible(true)
		}
	}
}

interface IProps {
	title: string
	text: string
	short?: boolean
}
export const Card = ({ title, text, short }: IProps) => {
	const modal = useModal()
	const isNotShort = !short
	return (
		<>
			<View style={ss.container}>
				<Text style={ss.title}>{title}</Text>
				<Text style={ss.text} numberOfLines={isNotShort ? 3 : undefined}>
					{text}
				</Text>
				{isNotShort && (
					<TouchableOpacity style={ss.button} activeOpacity={0.7} onPress={modal.open}>
						<Text style={ss.buttonText}>Больше информации</Text>
						<Icon name="chevron-forward-outline" color="#979797" size={20} />
					</TouchableOpacity>
				)}
			</View>
			{isNotShort && (
				<Modal
					isVisible={modal.visible}
					onBackdropPress={modal.close}
					onBackButtonPress={modal.close}
					useNativeDriver
					hideModalContentWhileAnimating
					backdropOpacity={0.3}
					useNativeDriverForBackdrop>
					<View style={ss.modal}>
						<TouchableOpacity style={ss.closeIcon} activeOpacity={0.7} onPress={modal.close}>
							<Icon name="close-outline" size={36} color="#000" />
						</TouchableOpacity>
						<Text style={[ss.title, ss.modalContent]}>{title}</Text>
						<ScrollView style={[ss.modalContent, ss.modalScroll]}>
							<Text style={ss.text}>{text}</Text>
						</ScrollView>
					</View>
				</Modal>
			)}
		</>
	)
}

const ss = StyleSheet.create({
	container: {
		paddingTop: 10,
		paddingHorizontal: 15,
		paddingBottom: 15,
		marginBottom: 20,
		backgroundColor: '#FFF',
		borderRadius: 10,
		elevation: 10,
		marginHorizontal: 28
	},
	title: {
		...getTextStyle(26, 'medium'),
		marginBottom: 2
	},
	text: {
		...getTextStyle(19)
	},
	button: {
		marginTop: 2,
		flexDirection: 'row',
		alignItems: 'center'
	},
	buttonText: {
		marginRight: 3,
		...getTextStyle(19),
		color: '#979797'
	},
	modal: {
		paddingTop: 25,
		paddingBottom: 30,
		backgroundColor: '#fff',
		borderRadius: 10,
		position: 'relative',
		flex: 1
	},
	modalScroll: {
		marginRight: 3
	},
	modalContent: {
		paddingHorizontal: 30
	},
	closeIcon: {
		position: 'absolute',
		zIndex: 20,
		top: 5,
		right: 5,
		padding: 5
	}
})
