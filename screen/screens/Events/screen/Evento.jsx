import { View, Text } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';
import { eventoStl } from '../style';

export default function Evento() {
    return (
        <View style={eventoStl.container}>
            <View style={eventoStl.cont}>
                <Entypo style={eventoStl.icon} name="signal" />
                <Text style={eventoStl.text}>Por el momento no hay Eventos</Text>
            </View>
        </View>
    )
}