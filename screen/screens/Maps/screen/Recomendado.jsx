import { View, Text, ScrollView, TouchableOpacity, TouchableNativeFeedback, Linking } from 'react-native'
import { BlurView } from 'expo-blur';
import React, { useCallback, useState } from 'react'
import { recomendadoStl } from '../style'
import { Image } from 'react-native'
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import Storage from '../../../../storage/storage';
import Enlaces from '../../../../Config/Enlaces';
import Load from '../../../components/Load';
import { AntDesign } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import dataFunctions from '../../../../Config/dataFunctions';

const ComponentContact = ({ tipo, contact }) => {
   const linksAndIcon = [
      {
         tipo: "whatsapp",
         link: "https://api.whatsapp.com/send?phone=+52" + contact + "&text=Hola%20te%20vi%20en%20Xihmai",
         icon: <FontAwesome name="whatsapp" style={recomendadoStl.redesImg} />
      },
      {
         tipo: "telefono",
         link: "tel:+52" + contact,
         icon: <Feather name="phone" style={recomendadoStl.redesImg} />
      },
      {
         tipo: "mensaje",
         link: "sms:+52" + contact,
         icon: <AntDesign name="message1" style={recomendadoStl.redesImg} />
      },
      {
         tipo: "email",
         link: "mailto:" + contact,
         icon: <Entypo name="email" style={recomendadoStl.contactIcon} />
      },
      {
         tipo: "facebook",
         link: contact,
         icon: <MaterialCommunityIcons name="facebook" style={recomendadoStl.redesImg} />
      },
      {
         tipo: "instagram",
         link: contact,
         icon: <Entypo name="instagram" style={recomendadoStl.redesImg} />
      },
      {
         tipo: "twitter",
         link: contact,
         icon: <Feather name="twitter" style={recomendadoStl.redesImg} />
      },
      {
         tipo: "red",
         link: contact,
         icon: <Fontisto name="world-o" style={recomendadoStl.redesImg} />
      }
   ]
   let i = linksAndIcon.findIndex(e => e.tipo === tipo.toLowerCase());
   if (i < 0) i = linksAndIcon.length - 1;
   const DataContacto = linksAndIcon[i];
   return (
      <View style={recomendadoStl.redesCont} key={contact}>
         <TouchableOpacity onPress={() => {
            Linking.openURL(DataContacto.link)
         }}>
            {DataContacto.icon}
            <Text style={recomendadoStl.redesText}>{
               (i === 0) ?
                  "+52 " + contact.toString().replace(/(\d{3})(\d{3})(\d{4})/, "$1 $2 $3")
                  : contact
            }</Text>
         </TouchableOpacity>
      </View>
   )
}

export default function Recomendado() {
   const navigation = useNavigation();
   let [dataMunicipio, setDataMunicipio] = useState({})
   let [rutaPreviaEst, setrutaPreviaEst] = useState("MapsScreen")
   let [val, setVal] = useState(false)

   const buscarEstablecimiento = async () => {
      setrutaPreviaEst(await Storage.rutaPreviaEst.get())
      const res = (await Storage.estabactual.get()).replace("estab", "")
      await fetch(Enlaces.establecimiento + `?id=${res}`)
         .then(r => r.text())
         .then(async res => {
            setDataMunicipio(JSON.parse(res))
         })
      await dataFunctions.guardarSitio(JSON.parse(await Storage.user.get()).email, res)
      setVal(true)
   }
   useFocusEffect(
      useCallback(() => {
         buscarEstablecimiento();
         return () => { };
      }, [val])
   )
   return (
      (!val) ? <Load /> : (
         <View style={recomendadoStl.container} key={"estab" + dataMunicipio.establecimiento.id} >
            <ScrollView style={recomendadoStl.scroll}>
               <View style={recomendadoStl.recomendado} >
                  <TouchableOpacity style={recomendadoStl.contIcon}
                     onPress={() => {
                        navigation.navigate(rutaPreviaEst)
                     }}
                  >
                     <Feather name="arrow-left" style={recomendadoStl.icon} />
                  </TouchableOpacity>
                  <View style={recomendadoStl.header} >
                     <Image
                        style={recomendadoStl.headerImg}
                        source={{ uri: dataMunicipio.establecimiento.portada }}
                     />
                     <Text style={recomendadoStl.headertext}>{dataMunicipio.establecimiento.nombre}</Text>
                  </View>
                  <View style={recomendadoStl.logo} >
                     <Image
                        style={recomendadoStl.logoImg}
                        source={{ uri: dataMunicipio.establecimiento.logo }}
                     />
                     <Text style={recomendadoStl.logotext}>{dataMunicipio.establecimiento.nombre}</Text>
                  </View>
                  <View style={recomendadoStl.desc} >
                     <Text style={recomendadoStl.desctext}>{dataMunicipio.establecimiento.descripcion}</Text>
                  </View>
                  <View style={recomendadoStl.pressentacion}>
                     {dataMunicipio.imagenes.map(i => {
                        return (
                           <View style={recomendadoStl.pressentacionCont}>
                              <Image
                                 style={recomendadoStl.pressentacionImg}
                                 source={{ uri: "https://xihmai.com/assets/establecimientos/imagenes/" + i.url }}
                              />
                              {i.descripcion ?? <Text style={recomendadoStl.pressentacionText}>{i.descripcion}</Text>}
                           </View>
                        )
                     })}
                  </View>
                  <View style={recomendadoStl.redes}>
                     {dataMunicipio.contacto.map(c => {
                        return <ComponentContact tipo={c.tipo} contact={c.contacto} />
                     })}
                  </View>
               </View>
            </ScrollView>
            <BlurView intensity={220} style={recomendadoStl.contact}>
               <TouchableNativeFeedback style={recomendadoStl.contactPh} onPress={() => {
                  Linking.openURL("tel:+52" + dataMunicipio.establecimiento.telefono)
               }}>
                  <View style={recomendadoStl.contactPh}>
                     <Feather name="phone" style={{ ...recomendadoStl.contactIcon, ...recomendadoStl.contactIconP }} />
                     <Text style={recomendadoStl.contactIconTxt}>Marcar</Text>
                  </View>
               </TouchableNativeFeedback>
               <TouchableNativeFeedback style={recomendadoStl.contactMap} onPress={() => {
                  Linking.openURL(`https://www.google.com.mx/maps/search/${dataMunicipio.establecimiento.latitud},+${dataMunicipio.establecimiento.longitud}?entry=ttu`)
               }}>
                  <View style={recomendadoStl.contactMap}>
                     <FontAwesome5 name="map" style={recomendadoStl.contactIcon} />
                  </View>
               </TouchableNativeFeedback>
            </BlurView>
         </View>
      )
   )
}