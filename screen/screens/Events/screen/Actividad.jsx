import React, { useCallback, useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { componentActividades } from '../style';
import { Feather } from '@expo/vector-icons';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { recomendadoStl } from '../../Maps/style';
import Enlaces from '../../../../Config/Enlaces';
import Storage from '../../../../storage/storage';
import Load from '../../../components/Load';

const Actividad = () => {
   const navigation = useNavigation();
   let [dataActividad, setDataActividad] = useState({})
   let [val, setVal] = useState(false)

   const buscarActividad= async ()=>{
      const actividad = await Storage.actividadActual.get();
      await fetch(Enlaces.actividades + `?a=${actividad}`)
         .then(r => r.json())
         .then(async res => {
            setDataActividad(res[0])
            setVal(true);
         })
   }

   useFocusEffect(
      useCallback(() => {
         buscarActividad();
         return () => { };
      }, [val])
   )
   return (
      !val ? <Load /> : 
      <>
      <View style={componentActividades.containt} key={"actividad"+dataActividad.idActividad}>
         <TouchableOpacity style={recomendadoStl.contIcon}
            onPress={() => navigation.navigate("EventsScreen")} >
            <Feather name="arrow-left" style={recomendadoStl.icon} />
         </TouchableOpacity>
         <Image
            style={{ width: '100%', height: '100%', resizeMode: 'cover' }}
            source={{ uri: dataActividad.fondo }} />
            <View style={componentActividades.contText}>
            <ScrollView style={{ height: '90%', position: 'relative' }}>
               <View style={componentActividades.contText2}>
                  <Text style={componentActividades.contTextTit}>{dataActividad.nombreActividad}</Text>
                  <Text style={componentActividades.contTextDes}>{dataActividad.descripcion}</Text>
                  <TouchableOpacity style={componentActividades.contTextBtn}>
                     <Text style={componentActividades.contTextBtnTxt}>Contactar</Text>
                  </TouchableOpacity>
               </View>
               <View style={componentActividades.carrusel}>
                  {dataActividad.imagenes.map(ima => {
                     return (
                        <View style={componentActividades.pressentacionCont}>
                           <Image
                              style={componentActividades.pressentacionImg}
                              source={{ uri: ima.src }}
                           />
                        </View>
                     )
                  })}
               </View>
            </ScrollView>
         </View>
         </View>
      </>
   )
}

export default Actividad;
