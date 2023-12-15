import React, { useState, useCallback } from 'react'
import { View, Text, TouchableNativeFeedback, Image } from 'react-native'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import { stlBienvenida } from '../../../style/pages'
import MapStyle from '../../../Config/MapStyle'
import Load from '../../components/Load'
import Storage from '../../../storage/storage'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { mapaStl, minisitioStl, nomStl } from './style'
import { Entypo } from '@expo/vector-icons';
import Enlaces from '../../../Config/Enlaces'
import { FontAwesome } from '@expo/vector-icons';
import dataFunctions from '../../../Config/dataFunctions'
import { images } from '../../../constants'

const NameMunicipio = ({ name }) => {
   return (
      <View style={nomStl.nomMunicipio} >
         <Text style={nomStl.nomMunicipioTxt} >{name}</Text>
      </View>
   )
}
const ComponentDataMunicipio = ({ url, name, description, tipo, ruta, event }) => {
   const navigation = useNavigation();
   if (url && name)
      return (
         <View style={minisitioStl.container} >
            <Image
               style={minisitioStl.img}
               source={{ uri: url }}
            />
            <View style={minisitioStl.tit}>
               <Text style={minisitioStl.titTit}>{name}</Text>
               <Text style={minisitioStl.titDes}>{description}</Text>
               <Text style={minisitioStl.titTipo}>{tipo}</Text>
            </View>
            <View style={minisitioStl.iconos}>
               <TouchableNativeFeedback onPress={() => {
                  navigation.navigate(ruta)
               }}>
                  <Entypo name="chevron-right" style={minisitioStl.icon} />
               </TouchableNativeFeedback>
            </View>
            <View style={minisitioStl.close}>
               <TouchableNativeFeedback onPress={() => {
                  event({})
               }}>
                  <FontAwesome name="close" style={minisitioStl.closeIcon} />
               </TouchableNativeFeedback>
            </View>
         </View>
      )
}
const DataMarkers = ({ markers, event }) => {
   if (markers.length > 0) {
      return markers.map(m => {
         return (
            <Marker
               title={m.nombre}
               key={m.id}
               coordinate={{
                  longitude: parseFloat(m.longitud),
                  latitude: parseFloat(m.latitud),
               }}
               onPress={async () => {
                  event({
                     url: `https://xihmai.com/assets/establecimientos/logos/${m.logo}`,
                     name: m.nombre,
                     description: m.descripcion,
                     tipo: m.TipoEstablecimiento,
                     ruta: "Recomendado"
                  })
                  await dataFunctions.guardarMiniSitio(JSON.parse(await Storage.user.get()).email, m.id)
                  await Storage.estabactual.set(m.id)
                  await Storage.rutaPreviaEst.set("MapsScreen")
               }}
            >
               <Image
                  source={{ uri: m.imagen }} // Ruta de la imagen personalizada
                  style={{ width: 30, height: 30, resizeMode: "contain" }} // Establece el tamaño de la imagen según tus necesidades
               />
            </Marker>
         )
      })
   }
}

export default function Mapa({ }) {
   let [dataComMunicipio, setDataComMunicipio] = useState({ url: "", name: "", description: "", tipo: "", ruta: "" })
   let [dataMunicipio, setDataMunicipio] = useState({
      municipio: "Tlaxcala",
      id: "33",
      longitude: -98.238258,
      latitude: 19.316937,
   })
   let [markers, setMarkers] = useState([])
   let [val, setVal] = useState(false)

   const [location, setLocation] = useState({
      latitude: 19.316937,
      longitude: -98.238258,
   })

   const buscarMunicipio = async () => {
      const res = (await Storage.municipioActual.get())
      if (parseInt(res) < 0) {
         console.log('====================================');
         console.log("Entro")
         const d = new FormData();
         d.append("id", "33")
         await fetch(Enlaces.establecimientos, {
            method: 'POST',
            body: d
         }).then(r => r.text())
            .then(async res => {
               console.log('====================================');
               console.log(res);
               setMarkers(JSON.parse(res))
            })

         setDataMunicipio(dataMunicipio);
         setLocation({
            latitude: location.latitude,
            longitude: location.longitude,
         })
         // await dataFunctions.guardarMunicipio(JSON.parse(await Storage.user.get()).email, dataMunicipio.id)
         setVal(true)
         return
      }
      if (JSON.parse(res).municipio !== dataMunicipio) {
         const d = new FormData();
         d.append("id", dataMunicipio.id)
         await fetch(Enlaces.establecimientos, {
            method: 'POST',
            body: d
         }).then(r => r.text())
            .then(res => {
               setMarkers(JSON.parse(res))
            })
      }
      setDataMunicipio(JSON.parse(res));
      setLocation({
         latitude: JSON.parse(res).latitude,
         longitude: JSON.parse(res).longitude,
      })
      await dataFunctions.guardarMunicipio(JSON.parse(await Storage.user.get()).email, dataMunicipio.id)
      setVal(true)
   }

   useFocusEffect(
      useCallback(() => {
         buscarMunicipio();

         return () => { };
      }, [val])
   )
   return (
      <>
         {!val ? <Load type={"load"} /> :
            <View style={stlBienvenida.container} >
               <MapView
                  style={stlBienvenida.container}
                  provider={PROVIDER_GOOGLE}
                  customMapStyle={MapStyle}
                  region={{
                     longitude: dataMunicipio.longitude,
                     latitude: dataMunicipio.latitude,
                     latitudeDelta: 0.01,
                     longitudeDelta: 0.01,
                  }}
               >
                  <DataMarkers markers={markers} event={setDataComMunicipio} />
               </MapView>
               <NameMunicipio name={dataMunicipio.municipio} />
               <Image
                  style={mapaStl.image}
                  source={images.xihmai}
               />
               <ComponentDataMunicipio
                  url={dataComMunicipio.url}
                  name={dataComMunicipio.name}
                  description={dataComMunicipio.description}
                  tipo={dataComMunicipio.tipo}
                  ruta={dataComMunicipio.ruta}
                  event={setDataComMunicipio}
               />

            </View>
         }
      </>

   )
}