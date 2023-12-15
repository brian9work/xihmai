import React from 'react';
import { View, Text } from 'react-native'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import { stlBienvenida } from '../style/pages';
import MapStyle from '../Config/MapStyle';
import { nomStl } from '../screen/screens/Maps/style';

export default function Map({ }) {
   return (
      <View style={stlBienvenida.container} >
         <MapView
            style={stlBienvenida.container}
            provider={PROVIDER_GOOGLE}
            customMapStyle={MapStyle}
            region={{
               latitude: 19.316937,
               longitude: -98.238258,
               latitudeDelta: 0.01,
               longitudeDelta: 0.01,
            }}
         >
            <Marker title={"marca 1 "}
               coordinate={{ latitude: 19.316937, longitude: -98.238258}}
            >
            </Marker>
         </MapView>
         <View style={nomStl.nomMunicipio} >
            <Text style={nomStl.nomMunicipioTxt} >My location</Text>
         </View>
      </View>
   )
}