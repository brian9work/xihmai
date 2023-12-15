import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { actividadesStl } from '../style';
import { useNavigation } from '@react-navigation/native';
import Enlaces from '../../../../Config/Enlaces';
import Load from '../../../components/Load';
import { TouchableNativeFeedback } from 'react-native';
import { BlurView } from 'expo-blur';
import Storage from '../../../../storage/storage';

const Actividades = () => {
   const navigation = useNavigation();
   const [dataAct, setdataAct] = useState([]);
   const traerActividades = async () => {
      await Storage.actividadActual.remove()
      await fetch(Enlaces.actividades)
         .then(res => res.json())
         .then(r => {
            setdataAct(r)

         })
         .catch(err => console.error(err))
   }

   useEffect(() => {
      traerActividades();
   }, [])
   return (
      <>
         {dataAct.length < 1 ? <Load /> :
            <View style={actividadesStl.contActividades}>
               {dataAct.map(data => {
                  return (
                     <View key={"categoria" + (data.idCategoria || data.actividades[0].idActividad)} style={actividadesStl.actividades}>
                        <Text style={actividadesStl.tit}>{data.nombreCategoria}</Text>
                        <ScrollView horizontal style={actividadesStl.cont}>
                           {data.actividades.map(d => {
                              return (<TouchableNativeFeedback key={"actividad" + d.idActividad}
                                 onPress={async () => {
                                    await Storage.actividadActual.set("" + d.idActividad);
                                    navigation.navigate("Actividad")
                                 }}>
                                 <View style={actividadesStl.act}>
                                    <Image style={actividadesStl.actImg} source={{ uri: d.imagen }} />
                                    <BlurView intensity={200} style={actividadesStl.actBlur}>
                                       <Text style={actividadesStl.actTit}>{d.nombreActividad}</Text>
                                    </BlurView>
                                 </View>
                              </TouchableNativeFeedback>
                              )
                           })}
                        </ScrollView>
                     </View>
                  )
               })}
            </View>
         }
      </>
   );
}

export default Actividades;
