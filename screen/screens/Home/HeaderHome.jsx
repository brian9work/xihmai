import { View, Text } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { countStl } from './style';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';

export default function HeaderHome() {
   const navigation = useNavigation();
   return (
      <View style={countStl.shadow}>
         <View style={countStl.count}>
            <Text style={countStl.text}>XIHMAI</Text>
            <TouchableOpacity
               style={countStl.touch}
               onPress={() => { navigation.navigate("Count") }}>
               <MaterialCommunityIcons name="account" style={countStl.icon} />
            </TouchableOpacity>
         </View>
      </View>
   )
}
