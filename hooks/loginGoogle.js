import React, { useEffect, useState } from "react";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import Storage from "../storage/storage";

WebBrowser.maybeCompleteAuthSession();

const LoginGoogle = () => {
   const [userInfo, setuserInfo] = useState(null);
   const [request, response, prompAsync] = Google.useAuthRequest({
      androidClientId:
         "665336594134-0rnc36dgv45vba6tradfnj47161bfvvk.apps.googleusercontent.com",
      expoClientId:
         "665336594134-otbs0ribcljnsoebkeklm7qhci20pt7i.apps.googleusercontent.com",
   });


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
      const data = await Storage.user.get();
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
         await Storage.user.set(JSON.stringify(user))
         setuserInfo(user);
      } catch (e) {
         console.log(e);
      }
   };

   return [handleSignWithGoogle,response,prompAsync];
};

export default LoginGoogle;
