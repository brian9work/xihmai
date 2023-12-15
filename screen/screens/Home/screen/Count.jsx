import { View, Text, ScrollView, Image, TouchableOpacity, Linking } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { countScreenStl } from '../style';
import { icons } from '../../../../constants';
import Storage from '../../../../storage/storage';

export default function Count() {
   const [info, setinfo] = useState(null);
   const [charge, setcharge] = useState(false);

   const user = () => {
      Storage.user.get()
         .then(r => {
            console.log('====================================');
            console.log(r);
            console.log('====================================');
            setinfo(JSON.parse(r))
            setcharge(JSON.parse(r).email.length>0)
            // try {
            // } catch (error) {
            //    setcharge(false)
            // }
         })
   }

   useEffect(() => {
      user();
   }, [])

   const navigation = useNavigation();
   return (
      <View style={{ position: 'relative' }}>
         <View style={countScreenStl.container} >
            <ScrollView style={countScreenStl.scroll}>
               <View style={countScreenStl.countCon} >
                  <TouchableOpacity style={countScreenStl.contIcon}
                     onPress={()=> navigation.navigate("HomeScreen")}>
                     <Feather name="arrow-left" style={countScreenStl.icon} />
                  </TouchableOpacity>
                  {(charge) ? (
                     <View style={countScreenStl.header} >
                        <Image style={countScreenStl.headerImg} />
                        <View style={countScreenStl.headerCount}>
                           <View style={countScreenStl.headerCountCont}>
                              <Image style={countScreenStl.headerCountImg} source={{ uri: info.picture }} />
                              <Text style={countScreenStl.headerCountTxt}>{info.given_name}</Text>
                              <Text style={countScreenStl.headerCountDes}>{info.email}</Text>
                              {/* <TouchableOpacity
                                 onPress={()=>{
                                    navigation.navigate("AddCount")
                                 }}
                              >
                                 <Text style={countScreenStl.headerCountAdd}>Agregar Cuenta</Text>
                              </TouchableOpacity> */}
                           </View>
                        </View>
                     </View>
                  ) : (
                     <View style={countScreenStl.header} >
                        <Image style={countScreenStl.headerImg} />
                        <View style={countScreenStl.headerCount}>
                           <View style={countScreenStl.headerCountCont}>
                              <Image style={countScreenStl.headerCountImg} source={icons.user} />
                              <Text style={countScreenStl.headerCountTxt}>Sin correo</Text>
                              <Text style={countScreenStl.headerCountDes}>user6532423213224</Text>
                              <TouchableOpacity
                                 onPress={()=>{
                                    navigation.navigate("AddCount")
                                 }}
                              >
                                 <Text style={countScreenStl.headerCountAdd}>Agregar Cuenta</Text>
                              </TouchableOpacity>
                           </View>
                        </View>
                     </View>
                  )}
                  <View style={countScreenStl.menu}>
                     <View style={countScreenStl.menuCat}>
                        <Text style={countScreenStl.menuCatTit}>Cuenta</Text>
                        <View style={countScreenStl.menuCatCon}>
                           <TouchableOpacity>
                              <Text style={countScreenStl.menuCatConTxt}>Informacion de mi cuenta</Text>
                           </TouchableOpacity>
                        </View>
                     </View>
                     <View style={countScreenStl.menuCat}>
                        <Text style={countScreenStl.menuCatTit}>Contacto</Text>
                        <View style={countScreenStl.menuCatCon}>
                           <TouchableOpacity>
                              <Text style={countScreenStl.menuCatConTxt}>Correo 1</Text>
                           </TouchableOpacity>
                           <TouchableOpacity>
                              <Text style={countScreenStl.menuCatConTxt}>Correo 2</Text>
                           </TouchableOpacity>
                           <TouchableOpacity>
                              <Text style={countScreenStl.menuCatConTxt}>Correo 3</Text>
                           </TouchableOpacity>
                           <TouchableOpacity>
                              <Text style={countScreenStl.menuCatConTxt}>Facebook</Text>
                           </TouchableOpacity>
                           <TouchableOpacity>
                              <Text style={countScreenStl.menuCatConTxt}>Instagram</Text>
                           </TouchableOpacity>
                        </View>
                     </View>
                     <View style={countScreenStl.menuCat}>
                        <Text style={countScreenStl.menuCatTit}>Sobre la App</Text>
                        <View style={countScreenStl.menuCatCon}>
                           <TouchableOpacity onPress={()=>{Linking.openURL("https://xihmai.com")}}>
                              <Text style={countScreenStl.menuCatConTxt}>Pagina Principal</Text>
                           </TouchableOpacity>
                           <TouchableOpacity onPress={()=>{Linking.openURL("https://play.google.com/store/apps/details?id=com.xanthe.xantheGP")}}>
                              <Text style={countScreenStl.menuCatConTxt}>Ver en Google Play</Text>
                           </TouchableOpacity>
                           <TouchableOpacity onPress={()=>{Linking.openURL("https://xihmai.com/tyc")}}>
                              <Text style={countScreenStl.menuCatConTxt}>Terminos y Condiciones</Text>
                           </TouchableOpacity>
                        </View>
                     </View>
                     <View style={countScreenStl.menuCat}>
                        <Text style={countScreenStl.menuCatTit}>Reportes</Text>
                        <View style={countScreenStl.menuCatCon}>
                           <TouchableOpacity>
                              <Text style={countScreenStl.menuCatConTxt}>Reportar Errores</Text>
                           </TouchableOpacity>
                           <TouchableOpacity>
                              <Text style={countScreenStl.menuCatConTxt}>Sugerencias</Text>
                           </TouchableOpacity>
                        </View>
                     </View>
                  </View>
               </View>
            </ScrollView>
         </View>
      </View>
   )
}