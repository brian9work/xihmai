import React from 'react'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import { stlBienvenida } from '../../../style/pages'
import MapStyle from '../../../Config/MapStyle'

const ComponentMap = ({ longitud, latitud }) => {
   return (
      <>
         <MapView
            style={{ ...stlBienvenida.container}}
            provider={PROVIDER_GOOGLE}
            customMapStyle={MapStyle}
            region={{
               longitude: longitud || -122.4351431,
               latitude: latitud || 37.8025259,
               latitudeDelta: 0.01,
               longitudeDelta: 0.01,
            }}
         >
         </MapView>
      </>
   );
}

export default ComponentMap;
