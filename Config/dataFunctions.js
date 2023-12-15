import Enlaces from "./Enlaces";

const dataFunctions = {
   guardarCorreo: async (co) => {
      const data = new FormData();
      data.append("email", co.email)
      data.append("nombre", co.given_name)
      data.append("apellido", co.family_name)
      data.append("picture", co.picture)
      data.append("lenguaje", co.locale)

      await fetch(Enlaces.sistemAgregarCorreo, {
         method: "POST",
         body: data
      }).then(r => r.text())
         .then(async res => {
            if (res) {
               await Storage.userSave.set("1");
            }
         })
         .catch(err => console.error("error: " + err))
   },
   guardarMunicipio: async (email, idMunicipio) => {
      const data = new FormData();
      data.append("email", email || "sin correo")
      data.append("idMunicipio", idMunicipio)

      await fetch(Enlaces.sistemDataMunicipio, {
         method: "POST",
         body: data
      }).then(r => r.text())
         .then(res => {
            if (res === "1") { return console.log("Municipio Guardado"); }
            console.log("Error al guardar: " + res)
         })
         .catch(err => console.error("error: " + err))

   },
   guardarMiniSitio: async (email, idEst) => {
      const data = new FormData();
      data.append("email", email || "sin correo")
      data.append("idEst", idEst.replace("estab", ""))

      await fetch(Enlaces.sistemAgregarMiniSitio, {
         method: "POST",
         body: data
      }).then(r => r.text())
         .then(res => {
            if (res === "1") { return console.log("MiniSitio Guardado"); }
            console.log("Error al guardar: " + res)
         })
         .catch(err => console.error("error: " + err))

   },
   guardarSitio: async (email, idEst) => {
      const data = new FormData();
      data.append("email", email || "sin correo")
      data.append("idEst", idEst)

      await fetch(Enlaces.sistemAgregarSitio, {
         method: "POST",
         body: data
      }).then(r => r.text())
         .then(res => {
            if (res === "1") { return console.log("Sitio Guardado"); }
            console.log("Error al guardar: " + res)
         })
         .catch(err => console.error("error: " + err))

   },
   guardar: async () => { },
}
export default dataFunctions