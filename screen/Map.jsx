import React, { useState, useEffect } from "react";
import { View } from "react-native";
import Mapa from "./screens/Maps/Mapa";
import Busqueda from "./screens/Maps/Busqueda";
import { mapaStl, mapsStl } from "./screens/Maps/style";
import Storage from "../storage/storage";
import dataFunctions from "../Config/dataFunctions";
import { images } from "../constants";
import { Image } from "react-native";

const Map = () => {
   const [count, setcount] = useState("vacio")
   const Count = async () => {
      setcount(await Storage.user.get())
      const co = JSON.parse(await Storage.user.get());

      if(co.email.length>0) {
         if(await Storage.userSave.get() <0){
            await dataFunctions.guardarCorreo(co)
         }
      }
   }
   useEffect(() => {
      Count()
   }, [count]);
   return (
      <View style={mapsStl.container}>
         <Mapa />
         <Busqueda ruta={"Promotions"} />
      </View>
   )
}
export default Map;