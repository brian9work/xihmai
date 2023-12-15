import { Dimensions } from 'react-native'
import { RADIUS } from '../constants';
import Constants from 'expo-constants'

const atajos = {
    center: {
        alignContent: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },
    button:{
        padding: 15,
        paddingLeft:30,
        paddingRight:30,
        backgroundColor: '#f000',
        marginTop: 20,
        borderRadius: RADIUS.medium,
    },
    tamano:{
        flex:1,
        width:'100%',
        height:'100%',
    },
    margin: {
		marginLeft: 'auto',
		marginRight: 'auto'
    },
    descargado: {
        // marginTop: Constants.statusBarHeight,
        // bottom: 10,
        marginTop: 0,
        bottom: .055 * Dimensions.get("window").height,
    }
}
export default atajos