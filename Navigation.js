import React, { useEffect, useState } from "react";
import { expo } from "./app.json";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import { Ionicons } from '@expo/vector-icons';
import { COLORS } from "./constants";

import Home from "./screen/Home";
import Map from "./screen/Map";
import Events from "./screen/Events";
import Actividades from "./screen/screens/Events/screen/Actividades";

import Count from "./screen/screens/Home/screen/Count";
import AgregarCorreo from "./screen/screens/Home/screen/AgregarCorreo";

import Promotions from "./screen/screens/Maps/screen/Promotions";
import Search from "./screen/screens/Maps/screen/Search";
import Recomendado from "./screen/screens/Maps/screen/Recomendado";
import Actividad from "./screen/screens/Events/screen/Actividad";
import Enlaces from "./Config/Enlaces";

import Version from "./screen/Version";

const HomeStackNavigator = createNativeStackNavigator();
function MyStackHome() {
   return (
      <HomeStackNavigator.Navigator
         initialRouteName="HomeScreen"
      >
         <HomeStackNavigator.Screen
            name="HomeScreen"
            component={Home}
            options={{
               headerShown: false,
            }}
         />
         <HomeStackNavigator.Screen
            name="Count"
            component={Count}
            options={{
               headerShown: false,
            }}
         />
         <HomeStackNavigator.Screen
            name="AddCount"
            component={AgregarCorreo}
            options={{
               headerShown: false,
            }}
         />
      </HomeStackNavigator.Navigator>
   )
}

const SearchStackNavigator = createNativeStackNavigator();
function MyStackMaps() {
   return (
      <SearchStackNavigator.Navigator
         initialRouteName="MapsScreen"
      // initialRouteName="Recomendado"
      >
         <SearchStackNavigator.Screen
            name="MapsScreen"
            component={Map}
            options={{
               headerShown: false,
            }}
         />
         <SearchStackNavigator.Screen
            name="Promotions"
            component={Promotions}
            options={{
               headerShown: false,
            }}
         />
         <SearchStackNavigator.Screen
            name="Search"
            component={Search}
            options={{
               headerShown: false,
            }}
         />
         <SearchStackNavigator.Screen
            name="Recomendado"
            component={Recomendado}
            options={{
               headerShown: false,
            }}
         />
      </SearchStackNavigator.Navigator>
   )
}
const EventStackNavigator = createNativeStackNavigator();
function MyStackEvent() {
   return (
      <EventStackNavigator.Navigator
         initialRouteName="EventsScreen"
      >
         <EventStackNavigator.Screen
            name="EventsScreen"
            component={Events}
            options={{
               headerShown: false,
            }}
         />
         <EventStackNavigator.Screen
            name="Actividades"
            component={Actividades}
            options={{
               headerShown: false,
            }}
         />
         <EventStackNavigator.Screen
            name="Actividad"
            component={Actividad}
            options={{
               headerShown: false,
            }}
         />
      </EventStackNavigator.Navigator>
   )
}


const Tab = createBottomTabNavigator();
function MyTabs() {
   const tamano = 30;
   return (
      <Tab.Navigator
         // initialRouteName="Home"
         initialRouteName="Maps"
         // initialRouteName="Events"
         screenOptions={{
            tabBarActiveTintColor: COLORS.blue,

            tabBarInactiveTintColor: '#999',
            tabBarActiveBackgroundColor: '#f6f6f6',
         }}
      >
         <Tab.Screen
            name="Home"
            component={MyStackHome}
            options={{
               tabBarLabel: 'feed',
               tabBarIcon: ({ color, size }) => (
                  <Ionicons name="home" size={tamano} color={color} />
               ),
               tabBarBadge: 10,
               headerShown: false,
               tabBarShowLabel: false,
            }}
         />
         <Tab.Screen
            name="Maps"
            component={MyStackMaps}
            options={{
               tabBarLabel: 'Maps',
               tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="google-maps" size={tamano} color={color} />
               ),
               headerShown: false,
               tabBarShowLabel: false,
            }}
         />
         <Tab.Screen
            name="Events"
            component={MyStackEvent}
            options={{
               tabBarLabel: 'Events',
               tabBarIcon: ({ color, size }) => (
                  <MaterialIcons name="event" size={tamano} color={color} />
               ),
               tabBarBadge: 1,
               headerShown: false,
               tabBarShowLabel: false,
            }}
         />
      </Tab.Navigator>
   )
}

export default function Navigation() {
   const [val, setVal] = useState(false);
   const [versionData, setVersionData] = useState({
      versionCode: 1,
      priority: 2,
      data: {
         tittle: "Obteniendo datos de la version",
         description: "Espere por favor, este proceso es rapido, solo queremos brindarle el mejor servicio",
         image: "https:/hixmai/media/1.png"
      }
   });

   const version = async () => {
      await fetch(Enlaces.version,{
         cache: "no-cache"
      })
         .then((response) => response.json())
         .then(r => {
            if (expo.android.versionCode === r.versionCode) return setVal(true)
            if (r.priority === 4) return setVal(true)

            setVersionData(r)
         })
   }

   useEffect(() => {
      version()
   }, [])

   // return <Version versionData={versionData} set={setVal} />

   return !val ? <Version versionData={versionData} set={setVal} /> : (
      <NavigationContainer>
         <MyTabs />
      </NavigationContainer>
   )
}










