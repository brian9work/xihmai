import React from "react";
import { View } from "react-native";
import HeaderHome from "./screens/Home/HeaderHome";
import { homeStl } from "./screens/Home/style";
import Municipios from "./screens/Home/Municipios";

const Home = () => {
   return (
      <View style={homeStl.container}>
         <HeaderHome />
         <Municipios />
      </View>
   )
}
export default Home;