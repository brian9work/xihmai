import React, { useEffect, useState } from 'react';
import Navigation from './Navigation';
import Welcome from './screen/Welcome';
import Storage from './storage/storage';
import Load from './screen/components/Load';

export default function App() {
   let [open, setOpen] = useState(0)
   let [val, setVal] = useState(false)

   const openF = async () => {
      // await Storage.municipioActual.re()
      // await Storage.open.remove()
      // await Storage.municipio.remove()
      // await Storage.municipioActual.remove()
      // await Storage.municipioDate.remove()
      // await Storage.user.remove()
      // await Storage.version.remove()
      // await Storage.versionSave.remove()
      // await Storage.lastVersion.remove()
      // await Storage.userSave.remove()
      // await Storage.estabactual.remove()
      // await Storage.rutaPreviaEst.remove()
      // await Storage.saveEst.remove()
      // await Storage.dataActividades.remove()
      // await Storage.actividadActual.remove()
      Storage.open.get()
         .then(res => {
            setOpen(res)
            setVal(true)
         })
   }

   useEffect( () => {
      openF()
   }, [])

   return (
      <>
      {  (!val) ? <Load /> :   
         (open<=0 ) ? <Welcome setOpen={setOpen} /> : <Navigation />}
      </>
   );
}

