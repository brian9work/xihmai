import { View, Text, Dimensions, TouchableNativeFeedback } from 'react-native'
import Carousel from 'react-native-snap-carousel';
import React, { useEffect, useState } from 'react'
import { MunicipiosStl } from './style'
import { Image } from 'react-native';
import Load from '../../components/Load';
import { useNavigation } from '@react-navigation/native';
import Storage from '../../../storage/storage'
import { rellenar } from '../../../functions';
import Enlaces from '../../../Config/Enlaces';


export default function Municipios() {
   const navigation = useNavigation();
   const { width } = Dimensions.get("window");

   const [dataCar, setdataCar] = useState([]);

   const carruselFetch = async () => {
      // await Storage.user.remove();
      const d = new Date()
      const lastDate = await Storage.municipioDate.get()
      const day = d.getFullYear() + "" + rellenar(d.getMonth()) + "" + rellenar(d.getDate())

      if (lastDate != -1 && (parseInt(lastDate) === parseInt(day))) {
         setdataCar(JSON.parse(await Storage.municipio.get()))
         return
      }
      await Storage.municipioDate.set(day)
      await fetch(Enlaces.municipios)
         .then(res => res.text())
         .then(r => {
            setdataCar(JSON.parse(r.replaceAll("\\", "")))
            Storage.municipio.set((r.replaceAll("\\", "")))

         })
         .catch(err => console.error(err))

   }
   useEffect(() => {
      carruselFetch();
   }, [])

   return (
      <View style={MunicipiosStl.container}>
         {(dataCar.length === 0) ? <Load /> :
            <>
               <Text style={{ textAlign: 'center', fontSize: 13, fontWeight: 300, letterSpacing: 1, marginBottom:10, textTransform:"uppercase" }}>
                  Seleccione el evento que desea visitar
                  </Text>
               <Carousel
                  layout={'default'}
                  data={dataCar}
                  sliderWidth={width}
                  itemWidth={width * .8}
                  inactiveSlideOpacity={.5}
                  useScrollView={true}
                  loop={true}
                  bouncesZoom={true}
                  focusable={true}
                  renderItem={({ item }) => {
                     const d = new Date()
                     const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]
                     return (
                        <TouchableNativeFeedback style={MunicipiosStl.comp}
                           onPress={async () => {
                              await Storage.municipioActual.set(`{
"municipio":"${item.municipio}",
"id":"${item.idMunicipio}",
"longitude":${item.longitude},
"latitude":${item.latitude}}`)
                              navigation.navigate("Maps")
                           }}
                        >
                           <View style={MunicipiosStl.comp}>
                              <Image
                                 style={MunicipiosStl.img}
                                 source={{ uri: item.imagen }} />
                              <Text style={MunicipiosStl.temp}>{item.municipio}</Text>
                              <Text style={MunicipiosStl.date}>{item.diaIni.padStart(2, "0")} {meses[item.mesIni]} - {item.diaFin.padStart(2, "0")} {meses[item.mesFin]} </Text>
                           </View>
                        </TouchableNativeFeedback>
                     )
                  }}
               />
            </>
         }
      </View>
   )
}