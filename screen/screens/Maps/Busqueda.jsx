import React from 'react'
import { View, Text, TouchableNativeFeedback } from 'react-native'
import { busquedaStl } from './style'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Busqueda({ruta}) {
   const navigation = useNavigation();
   
	return (
		<TouchableNativeFeedback
			onPress={async () => {
				navigation.navigate(ruta)
			}}>
			<View style={busquedaStl.container}>
				<Ionicons style={busquedaStl.icon} name="search" />
				<Text style={busquedaStl.text} >¿Qué quiere encontrar? ...</Text>
			</View>
		</TouchableNativeFeedback>
	)
}