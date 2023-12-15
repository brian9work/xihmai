import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { tipCatStl } from './style'

const Categorias = ({c})=>{
   let [act, setact] = useState(false);
   return (
      <TouchableOpacity
         onPress={()=>{setact(!act);}}
      >
      <View style={{...tipCatStl.cont, opacity: act ? 1 : 0.5}}>
         <Text style={tipCatStl.txt}>{c}</Text>
      </View>
   </TouchableOpacity>
   )
}

export default function TipCat() {
   const cat = ["Todo", "Restaurantes", "Hoteles", "Avistamientos", "Artesanias", "Haciendas", "Pulquerias", "Demas"];
   let co=0;
   return (
      <View style={tipCatStl.container}>
         <ScrollView horizontal={true} style={tipCatStl.scroll} >
            {cat.map(c => {co++; return <Categorias key={co} c={c} />})}
         </ScrollView>
      </View>
   )
}