import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, Linking, TouchableNativeFeedback } from "react-native";
import images from "../../../../constants/images";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import { useNavigation } from "@react-navigation/native";
import { Feather } from '@expo/vector-icons';
import { countScreenStl, stlAgregarCorreo } from "../style";

WebBrowser.maybeCompleteAuthSession();

export default function AgregarCorreo({ }) {
   const navigation = useNavigation();
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
      <View style={stlAgregarCorreo.container}>
         <TouchableOpacity style={countScreenStl.contIcon}
            onPress={() => navigation.navigate("Count")}>
            <Feather name="arrow-left" style={countScreenStl.icon} />
         </TouchableOpacity>
         <Image style={stlAgregarCorreo.background} source={{ uri: "https://xihmai.com/media/6.png" }} />
         <Image style={stlAgregarCorreo.imageLogo} source={images.xihmai} />
         {(!userInfo || userInfo < 0) ?
            <>
               <Text style={stlAgregarCorreo.isTit}>Iniciar Sesion Es Gratis</Text>
               <TouchableNativeFeedback onPress={() => { prompAsync(); }} >
                  <View style={{
                     backgroundColor:'#fffb',
                     ...stlAgregarCorreo.loginGoogle}}>
                     <Image style={stlAgregarCorreo.loginImg} source={images.loginGoogle2} />
                  </View>
               </TouchableNativeFeedback>
               <TouchableOpacity onPress={() => { Linking.openURL("https://xihmai/tyc") }} >
                  <Text style={stlAgregarCorreo.tyc}>
                     Al continuar, estas aceptando los terminos y condiciones.
                  </Text>
               </TouchableOpacity>
            </>
            : <>
               <Text style={stlAgregarCorreo.isTit}>Bienvenid@</Text>
               <TouchableNativeFeedback >
                  <View style={stlAgregarCorreo.loginGoogle}>
                     <Image style={stlAgregarCorreo.loginImg} source={{uri: userInfo.picture}} />
                  </View>
               </TouchableNativeFeedback>
               <Text style={stlAgregarCorreo.isEmail}>
                  {userInfo.given_name} {'\n'} {userInfo.family_name} 
               </Text>
            </>
         }
      </View>
   )
   // return (
   //    <View style={stlBienvenida.container}>
   //       <TouchableOpacity style={countScreenStl.contIcon}
   //          onPress={() => navigation.navigate("Count")}>
   //          <Feather name="arrow-left" style={countScreenStl.icon} />
   //       </TouchableOpacity>
   //       <Image style={stlBienvenida.img} source={images.xihmai} />
   //       {(!userInfo || userInfo < 0) ?
   //          <View style={stlBienvenida.login}>
   //             <Text style={TITULOS.tit1}>Un Gusto Conocerte</Text>
   //             <Text style={TITULOS.tit2}>Registrate es Gratis</Text>
   //             <TouchableOpacity onPress={() => { prompAsync(); }} >
   //                <View style={stlBienvenida.loginGoogle}>
   //                   <Image style={stlBienvenida.loginImg} source={images.loginGoogle} />
   //                   <Text style={stlBienvenida.loginText}>Continuar Con Google</Text>
   //                </View>
   //             </TouchableOpacity>
   //             <View style={stlBienvenida.line}></View>
   //             <TouchableOpacity onPress={() => { Linking.openURL("https://xihmai/tyc") }} >
   //                <Text style={stlBienvenida.tyc}>
   //                   Al continuar, estas aceptando los terminos y condiciones.
   //                </Text>
   //             </TouchableOpacity>
   //          </View>
   //          :
   //          <View style={stlBienvenida.countAccept}>
   //             <View style={stlBienvenida.login}>
   //                <Text style={TITULOS.tit1}>Bienvenid@</Text>
   //                <Image style={stlBienvenida.countAcceptImg} source={{ uri: userInfo.picture }} />
   //                <Text style={stlBienvenida.countAcceptTxt}>{userInfo.email}</Text>
   //                <TouchableOpacity
   //                   onPress={async () => {
   //                      // Storage.open.set("1");
   //                      // setOpen(1);
   //                      navigation.navigate("Count")
   //                   }}
   //                >
   //                   <Text style={stlBienvenida.countAcceptBtn}>Continuar</Text>
   //                   <Text style={stlBienvenida.countAcceptBtn2}>Por favor reinicie la App</Text>
   //                </TouchableOpacity>
   //             </View>
   //          </View>
   //       }
   //    </View>
   // );
}

