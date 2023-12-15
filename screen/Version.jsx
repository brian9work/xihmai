import React, { useEffect, useState } from 'react';
import { View, Text, TouchableNativeFeedback, Linking, Image } from 'react-native';
import Storage from '../storage/storage';
import { expo } from "../app.json";
import { stlVersion } from '../style/pages';
import { images } from '../constants';
import { BlurView } from 'expo-blur';

const Version = ({ versionData, set }) => {
   const [loadBtn, setloadBtn] = useState(null);
   const [lastVersion, setlastVersion] = useState(null);
   const loadBtnFunction = async () => {
      setloadBtn(await Storage.versionSave.get());
      setlastVersion(await Storage.lastVersion.get());
   }
   const ComponentBtn = () => {
      if (versionData.priority === 3 && loadBtn > 0 && lastVersion >= versionData.versionCode) return set(true)
      const Act = () => {
         return (
            <TouchableNativeFeedback style={stlVersion.contBtnAct}
               onPress={() => {
                  Linking.openURL("https://play.google.com/store/")
               }}
            >
               <View style={stlVersion.contBtnAct}>
                  <Text style={stlVersion.contBtnActText}>ACTUALIZAR</Text>
               </View>
            </TouchableNativeFeedback>
         )
      }
      return (
         <View style={stlVersion.contBtn}>
            {versionData.priority !== 1 ?
               <TouchableNativeFeedback style={stlVersion.contBtnIgn}
                  onPress={async () => {
                     if (versionData.priority === 3) {
                        await Storage.versionSave.set("1")
                        await Storage.lastVersion.set(versionData.versionCode + "")
                        set(true);
                     } else if (versionData.priority === 2) {
                        set(true);
                     }
                  }}
               >
                  <View style={stlVersion.contBtnIgn}>
                     <Text style={stlVersion.contBtnIgnText}>OMITIR</Text>
                  </View>
               </TouchableNativeFeedback> : <></>
            }
            <Act />
         </View>
      )
   }

   useEffect(() => {
      loadBtnFunction()
   }, [setloadBtn])

   if (versionData.versionCode === 1) {
      return (
         <View style={stlVersion.container}>
            <Image style={stlVersion.background} source={{ uri: "https://xihmai.com/media/4.png" }} />
            <Image style={stlVersion.imageLogo} source={images.xihmai} />
            <Text style={stlVersion.imageVersion}>Version: {expo.version}</Text>
            <Text style={stlVersion.dataVersion}>Obteniendo datos de la version ... </Text>
         </View>
      )
   }
   return (
      <View style={stlVersion.container}>
         <Image style={stlVersion.background} source={{ uri: "https://xihmai.com/media/4.png" }} />
         <Image style={stlVersion.imageAct} source={images.actualizacionDisponible} />
         <BlurView intensity={300} style={stlVersion.cont}>
            <Image style={stlVersion.contIma} source={{ uri: versionData.data.image }} />
            <Text style={stlVersion.contTit}>{versionData.data.tittle}</Text>
            <Text style={stlVersion.contDes}>{versionData.data.description}</Text>
            <ComponentBtn />
         </BlurView>
         <Image style={stlVersion.imageLogo} source={images.xihmai} />
         <Text style={stlVersion.imageVersion}>Version: {expo.version}</Text>
      </View>
   );
}

export default Version;
