import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { busquedaStl, mapsStl, promotionStl, searchstl } from '../style'
import { Image } from 'react-native';
import { TouchableNativeFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Search() {
   const navigation = useNavigation();
   return (
      <View style={mapsStl.container}>
         <View style={busquedaStl.container}>
            <Ionicons style={busquedaStl.icon} name="search" />
            <TextInput
               style={busquedaStl.text}
               placeholder="¿Qué quiere encontrar? ..."
               editable
               autoComplete={"off"}
               autoCorrect={false}
               autoFocus
            />
         </View>
         <View style={promotionStl.container}>
            <View style={searchstl.container}>
               <TouchableNativeFeedback
                  onPress={async () => {
                     navigation.navigate("Recomendado")
                  }}>
                  <View style={searchstl.caja}>
                     <Image
                        style={searchstl.cajaImg}
                        source={{ uri: "https://cantodelbosque.com.mx/wp-content/uploads/2020/10/logo-mini.png" }}
                     />
                     <View style={searchstl.cajaCont}>
                        <Text style={searchstl.cajaContT}>Search</Text>
                        <Text style={searchstl.cajaContD}>scklav asacscsvc adassa ads wd cs</Text>
                        <Text style={searchstl.cajaContC}>Santuario</Text>
                     </View>
                  </View>
               </TouchableNativeFeedback>
            </View>
         </View>
      </View>
   )
}