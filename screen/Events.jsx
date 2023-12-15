import React from "react";
import { View, ScrollView } from "react-native";
import { eveStl } from "./screens/Events/style";
import Evento from "./screens/Events/screen/Evento";
import Actividades from "./screens/Events/screen/Actividades";

const Events = () => {
   return (
      <View style={eveStl.container}>
         <ScrollView>
            <Evento />
            <Actividades />
         </ScrollView>
      </View>
   )
}
export default Events;