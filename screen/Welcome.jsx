import { View, Text, TouchableOpacity,Linking } from "react-native";
import React, { useEffect, useState } from "react";
import { Image } from "react-native";
import images from "../constants/images";
import { stlBienvenida } from "../style/pages";
import { TITULOS } from "../constants";
import Storage from "../storage/storage";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";

WebBrowser.maybeCompleteAuthSession();

export default function Welcome({ setOpen }) {
   const [userInfo, setuserInfo] = useState(null);
   const [request, response, prompAsync] = Google.useAuthRequest({
      androidClientId:
         "665336594134-0rnc36dgv45vba6tradfnj47161bfvvk.apps.googleusercontent.com",
      expoClientId: "665336594134-otbs0ribcljnsoebkeklm7qhci20pt7i.apps.googleusercontent.com",
   });

   useEffect(() => {
      handleSignWithGoogle();
   }, [response]);

   async function handleSignWithGoogle() {
      const user = await getLocalUser();
      if (!user) {
         if (response.type === "success") {
            getUserInfo(response.authentication.accessToken);
         }
      } else {
         setuserInfo(user);
      }
   }

   const getLocalUser = async () => {
      const data = await AsyncStorage.getItem("@user");
      if (!data) return null;
      return JSON.parse(data);
   };
   const getUserInfo = async (token) => {
      if (!token) return null;
      try {
         const response = await fetch(
            "https://www.googleapis.com/userinfo/v2/me",
            {
               headers: { Authorization: "Bearer " + token },
            }
         );
         const user = await response.json();
         await AsyncStorage.setItem("@user", JSON.stringify(user));
         setuserInfo(user);
      } catch (e) {
         console.log(e);
      }
   };
   return (
      <View style={stlBienvenida.container}>
         <Image style={stlBienvenida.img} source={images.xihmai} />
         {(!userInfo || userInfo < 0) ?
            <View style={stlBienvenida.login}>
               <Text style={TITULOS.tit1}>Bienvenid@</Text>
               <Text style={TITULOS.tit2}>Registrate es Gratis</Text>
               <TouchableOpacity onPress={() => { prompAsync(); }} >
                  <View style={stlBienvenida.loginGoogle}>
                     <Image style={stlBienvenida.loginImg} source={images.loginGoogle} />
                     <Text style={stlBienvenida.loginText}>Continuar Con Google</Text>
                  </View>
               </TouchableOpacity>
               <View style={stlBienvenida.line}></View>
               <TouchableOpacity
                  onPress={async () => {
                     Storage.open.set("1");
                     setOpen(1);
                  }}
               >
                  <Text style={stlBienvenida.omitir}>Omitir</Text>
               </TouchableOpacity>
               <TouchableOpacity onPress={() => { Linking.openURL("https://xihmai/tyc") }} >
                  <Text style={stlBienvenida.tyc}>
                     Al continuar, estas aceptando los terminos y condiciones.{" "}
                  </Text>
               </TouchableOpacity>
            </View>
            :
            <View style={stlBienvenida.countAccept}>
            <View style={stlBienvenida.login}>
               <Text style={TITULOS.tit1}>Bienvenid@</Text>
               <Image style={stlBienvenida.countAcceptImg} source={{uri:userInfo.picture}} />
               <Text style={stlBienvenida.countAcceptTxt}>{userInfo.email}</Text>
               
               <TouchableOpacity
                  onPress={async () => {
                     Storage.open.set("1");
                     setOpen(1);
                  }}
               >
                  <Text style={stlBienvenida.countAcceptBtn}>Continuar</Text>
               </TouchableOpacity>
            </View>
            </View>
         }
      </View>
   );
}

