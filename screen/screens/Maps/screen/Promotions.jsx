import { View, ScrollView, Image, TouchableNativeFeedback } from 'react-native'
import React, { useEffect, useState } from 'react'
import Busqueda from '../Busqueda'
import { promotionStl } from '../style'
import Enlaces from '../../../../Config/Enlaces'
import { useNavigation } from '@react-navigation/native'
import Load from '../../../components/Load'

export default function Promotions() {
   const navigation = useNavigation();
   const [promo, setpromo] = useState([]);

   const promos = async () => {
      await fetch(Enlaces.promociones)
         .then(res => res.json())
         .then(r => {
            setpromo(r)
         })
         .catch(err => console.log(err))
   }
   useEffect(() => {
      promos();
   }, [])
   return (
      <View>
         <Busqueda ruta={"Search"} />
         <View style={promotionStl.container}>
            { promo.length===0 ? <Load /> :
               <ScrollView style={promotionStl.scroll}>
                  <View style={promotionStl.promos}>
                     {promo.map( pro => {
                           return (
                              <TouchableNativeFeedback 
                                 key={"promo"+pro.id}
                                 onPress={async () => {
                                    navigation.navigate("Recomendado")
                                 }}
                              >
                                 <View style={promotionStl.promo} >
                                    <View style={promotionStl.promo}><Image source={{uri:pro.imagen}} style={promotionStl.img} /></View>
                                 </View>
                              </TouchableNativeFeedback>
                           )
                     })}
                  </View>
               </ScrollView>
            }
         </View>
      </View>
   )
}