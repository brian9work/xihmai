import AsyncStorage from '@react-native-async-storage/async-storage';

const Storage = {
    open:{
        set: async(value)=>{try {await AsyncStorage.setItem('@open', value)}catch (e) {console.warn("Error al almacenar"); console.log(e);}},
        get: async()=> (await AsyncStorage.getItem('@open')) || -1,
        remove: async()=> (await AsyncStorage.removeItem('@open')),
    },
    municipio:{
        set: async(value)=>{try {await AsyncStorage.setItem('@municipio', value)}catch (e) {console.warn("Error al almacenar"); console.log(e);}},
        get: async()=> (await AsyncStorage.getItem('@municipio')) || -1,
        remove: async()=> (await AsyncStorage.removeItem('@municipio')),
    },
    municipioActual:{
        set: async(value)=>{try {await AsyncStorage.setItem('@municipioActual', value)}catch (e) {console.warn("Error al almacenar"); console.log(e);}},
        get: async()=> (await AsyncStorage.getItem('@municipioActual')) || -1,
        remove: async()=> (await AsyncStorage.removeItem('@municipioActual')),
    },
    municipioDate:{
        set: async(value)=>{try {await AsyncStorage.setItem('@municipioDate', value)}catch (e) {console.warn("Error al almacenar"); console.log(e);}},
        get: async()=> (await AsyncStorage.getItem('@municipioDate')) || -1,
        remove: async()=> (await AsyncStorage.removeItem('@municipioDate')),
    },
    user:{
        set: async(value)=>{try {await AsyncStorage.setItem('@user', value)}catch (e) {console.warn("Error al almacenar"); console.log(e);}},
        get: async()=> (await AsyncStorage.getItem('@user')) || -1,
        remove: async()=> (await AsyncStorage.removeItem('@user')),
    },
    version:{
        set: async(value)=>{try {await AsyncStorage.setItem('@version', value)}catch (e) {console.warn("Error al almacenar"); console.log(e);}},
        get: async()=> (await AsyncStorage.getItem('@version')) || -1,
        remove: async()=> (await AsyncStorage.removeItem('@version')),
    },
    versionSave:{
        set: async(value)=>{try {await AsyncStorage.setItem('@versionSave', value)}catch (e) {console.warn("Error al almacenar"); console.log(e);}},
        get: async()=> (await AsyncStorage.getItem('@versionSave')) || -1,
        remove: async()=> (await AsyncStorage.removeItem('@versionSave')),
    },
    lastVersion:{
        set: async(value)=>{try {await AsyncStorage.setItem('@lastVersion', value)}catch (e) {console.warn("Error al almacenar"); console.log(e);}},
        get: async()=> (await AsyncStorage.getItem('@lastVersion')) || -1,
        remove: async()=> (await AsyncStorage.removeItem('@lastVersion')),
    },
    userSave:{
        set: async(value)=>{try {await AsyncStorage.setItem('@countSave', value)}catch (e) {console.warn("Error al almacenar"); console.log(e);}},
        get: async()=> (await AsyncStorage.getItem('@countSave')) || -1,
        remove: async()=> (await AsyncStorage.removeItem('@countSave')),
    },
    estabactual:{
        set: async(value)=>{try {await AsyncStorage.setItem('@estabactual', value)}catch (e) {console.warn("Error al almacenar"); console.log(e);}},
        get: async()=> (await AsyncStorage.getItem('@estabactual')) || -1,
        remove: async()=> (await AsyncStorage.removeItem('@estabactual')),
    },
    rutaPreviaEst:{
        set: async(value)=>{try {await AsyncStorage.setItem('@rutaPreviaEst', value)}catch (e) {console.warn("Error al almacenar"); console.log(e);}},
        get: async()=> (await AsyncStorage.getItem('@rutaPreviaEst')) || -1,
        remove: async()=> (await AsyncStorage.removeItem('@rutaPreviaEst')),
    },
    saveEst:{
        set: async(value)=>{try {await AsyncStorage.setItem('@saveEst', value)}catch (e) {console.warn("Error al almacenar"); console.log(e);}},
        get: async()=> (await AsyncStorage.getItem('@saveEst')) || -1,
        remove: async()=> (await AsyncStorage.removeItem('@saveEst')),
    },
    dataActividades:{
        set: async(value)=>{try {await AsyncStorage.setItem('@dataActividades', value)}catch (e) {console.warn("Error al almacenar"); console.log(e);}},
        get: async()=> (await AsyncStorage.getItem('@dataActividades')) || -1,
        remove: async()=> (await AsyncStorage.removeItem('@dataActividades')),
    },
    actividadActual:{
        set: async(value)=>{try {await AsyncStorage.setItem('@actividadActual', value)}catch (e) {console.warn("Error al almacenar"); console.log(e);}},
        get: async()=> (await AsyncStorage.getItem('@actividadActual')) || -1,
        remove: async()=> (await AsyncStorage.removeItem('@actividadActual')),
    },


    season:{
        set: async(value)=>{try {await AsyncStorage.setItem('season', value)}catch (e) {console.log(e);}},
        get: async()=> (await AsyncStorage.getItem('season')) || -1,
    },
    red:{
        set: async(value)=>{try {await AsyncStorage.setItem('red', value)}catch (e) {console.log(e);}},
        get: async()=> (await AsyncStorage.getItem('red')) || -1,
    },
    mode:{
        set: async(value)=>{try {await AsyncStorage.setItem('mode', value)}catch (e) {console.log(e);}},
        get: async()=> (await AsyncStorage.getItem('mode')) || -1,
    },
    language:{
        set: async(value)=>{try {await AsyncStorage.setItem('lenguage', value)}catch (e) {console.log(e);}},
        get: async()=> (await AsyncStorage.getItem('lenguage')) || -1,
    },
    data:{
        set: async(value)=>{try {await AsyncStorage.setItem('data', value)}catch (e) {console.log(e);}},
        get: async()=> (await AsyncStorage.getItem('data')) || -1,
    },
    count:{
        set: async(value)=>{try {await AsyncStorage.setItem('count', value)}catch (e) {console.log(e);}},
        get: async()=> (await AsyncStorage.getItem('count')) || -1,
    },
    countImg:{
        set: async(value)=>{try {await AsyncStorage.setItem('countImg', value)}catch (e) {console.log(e);}},
        get: async()=> (await AsyncStorage.getItem('countImg')) || -1,
    }
}

export default Storage;