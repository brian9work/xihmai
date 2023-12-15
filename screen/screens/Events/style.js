import { StyleSheet, Dimensions } from 'react-native'
import atajos from '../../../style/atajos';
import { COLORS, RADIUS, SHADOWS, SIZES } from '../../../constants';

const { height, width } = Dimensions.get("window");

const eveStl = StyleSheet.create({
   container: {
      width: width,
      height: height,
      position: 'relative',
      marginBottom: .3 * height,
   }
})
const eventoStl = StyleSheet.create({
   container: {
      width: width,
      height: .4 * height,
      marginTop: atajos.descargado.marginTop,
   },
   cont: {
      width: '90%',
      height: '100%',
      marginLeft: '5%',
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 25,
      gap: 10,
   },
   icon:{
      fontSize: SIZES.xxlarge+ 130,
      color: '#3494E6',
      opacity: 0.6,
   },
   text:{
      fontSize: SIZES.medium,
      fontWeight: 'bold',
      letterSpacing: 2,
      color: '#3494E6',
      textTransform: 'uppercase',
   },
})
const actividadesStl = StyleSheet.create({
   contActividades:{
      marginBottom: .3 * height,
   },
   actividades:{
      marginBottom: 35,
   },
   tit:{
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: SIZES.large,
      letterSpacing: 1,
      textTransform: 'uppercase',
      color: COLORS.tertiary,
      marginBottom: 5,
   },
   cont:{
      height: .3 * height,
   },
   act:{
      width: .65* width,
      height: .3 * height,
      marginHorizontal: 5,
      height: '100%',
      backgroundColor: COLORS.primary,
      ...SHADOWS.small,
      borderRadius: RADIUS.xlarge,
      overflow: 'hidden',
      position: 'relative',
   },
   actBlur:{
      width: '100%',
      position: 'absolute',
      bottom: 0,
      left: 0,
      paddingHorizontal: 15,
   },
   actImg:{
      width: '100%',
      height: '100%',
      resizeMode: 'cover'
   },
   actTit:{
      paddingVertical: 2,
      fontWeight: '900',
      letterSpacing: 2,
      textTransform: 'uppercase',
      fontSize: SIZES.medium,
   },
})
const componentActividades = StyleSheet.create({
   containt: {
      position: 'relative',
   },
   contText:{
      position: 'absolute',
      top: 0,
      left: 0,
      width: width,
      height: height,
      backgroundColor: '#0008',
   },
   contText2:{
      width: width,
      height: .9 * height,
   },
   contTextTit:{
      width: .7 * width,
      marginLeft: .05 * width,
      marginTop: .125 * height,
      color: COLORS.primary,
      fontSize: SIZES.xxlarge,
      fontWeight: 900,
      letterSpacing: 2,
   },
   contTextDes:{
      width: .8 * width,
      marginLeft: .05 * width,
      color: COLORS.primaryOpaco,
      fontSize: SIZES.medium,
      letterSpacing: 0,
   },
   contTextBtn:{
      position: 'absolute',
      top: height - .2 * height,
      left: 0,
      width: .7 * width, 
      marginLeft: .15 * width,
      backgroundColor: '#FFF',
      paddingVertical: 10,
      borderRadius: RADIUS.xlarge,
      justifyContent: 'center',
      alignContent: 'center',
      ...SHADOWS.small,
   },
   contTextBtnTxt:{
      textAlign: 'center',
      color: COLORS.tertiary,
      fontSize: SIZES.large,
      fontWeight: 900,
      letterSpacing: 3,
      textTransform: 'uppercase',
   },
   carrusel:{
      marginBottom: .5 * height,
   },
   pressentacionCont:{
      marginBottom: 20,
   },
   pressentacionImg:{
      width: .95 * width,
      height: .30 * height,
      resizeMode: 'cover',
      marginLeft: .025 * width,
      borderRadius: RADIUS.xxlarge + 0,
   },
})


export { eveStl, eventoStl,actividadesStl,componentActividades }