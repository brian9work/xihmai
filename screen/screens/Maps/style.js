import { StyleSheet, Dimensions } from 'react-native'
import atajos from '../../../style/atajos';
import { COLORS, RADIUS, SHADOWS, SIZES } from '../../../constants';

const marginTop = atajos.descargado.marginTop
const { height, width } = Dimensions.get("window");

const mapsStl = StyleSheet.create({
   container: {
      width: width,
      height: height,
      position: 'relative',
   }
})
const busquedaStl = StyleSheet.create({
   container: {
      position: 'absolute',
      width: '95%',
      left: '2.5%',
      top: marginTop + (.005 * height),
      height: 50,
      ...SHADOWS.medium,
      backgroundColor: COLORS.second,
      borderRadius: RADIUS.xxlarge,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 15,
      zIndex: 10,
   },
   icon: {
      color: COLORS.tertiary,
      fontSize: SIZES.xxlarge,
   },
   text: {
      width: '90%',
      fontSize: SIZES.medium,
      opacity: 0.6,
   },
})
const mapaStl = StyleSheet.create({
   container: {
      width: width,
      height: height,
   },
   image:{
      position:'absolute',
      bottom: atajos.descargado.bottom,
      width: '35%',
      height: 45,
      left: (.5 * width) - (.175 * width),
      resizeMode: 'contain',
   },
})
const promotionStl = StyleSheet.create({
   container: {
      marginTop: marginTop + 60,
      width: '100%',
      height: '100%',
      height: height - (marginTop + 70),
   },
   scroll: {
      width: '100%',
      height: height,
   },
   promos: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'flex-start',
      justifyContent: 'space-around',
      rowGap: .01 * width,
      height: '100%',
      paddingBottom: 100,
   },
   promo: {
      width: .495 * width,
      height: .39 * height,
      borderRadius: RADIUS.medium,
      overflow: 'hidden',
   },
   img: {
      height: '100%',
      width: '100%',
      resizeMode: 'cover'
   }
})
const minisitioStl = StyleSheet.create({
   container:{
      position:'absolute',
      width: '95%',
      height: '12%',
      bottom: atajos.descargado.bottom + 7,
      left: .025 * width,
      backgroundColor: COLORS.primary,
      borderRadius: RADIUS.xlarge,
      ...SHADOWS.small,
      flexDirection: 'row',
      paddingVertical: 15,
      paddingHorizontal: 15,
   },
   img:{
      width: '35%',
      height: '100%',
      resizeMode: 'cover',
   },
   tit:{
      width: '50%',
      alignContent: 'center',
      paddingLeft: 10,
   },
   titTit:{
      fontSize: SIZES.medium,
      textTransform: 'uppercase',
      fontWeight: 'bold',
      letterSpacing: 2,
   },
   titDes:{
      fontSize: SIZES.small,
      maxHeight: .055 * height,
   },
   titTipo:{
      fontSize: SIZES.small,
      fontWeight: 700,
      letterSpacing: 1,
      textTransform: 'uppercase',
   },
   iconos:{
      width: '15%',
      alignContent: 'center',
      justifyContent: 'center',
   },
   icon:{
      textAlign: 'center',
      fontSize: SIZES.xxlarge+ 20,
      color: COLORS.blue,
   },
   close:{
      position: 'absolute',
      top: -15,
      right: 0,
   },
   closeIcon:{
      fontSize: SIZES.xlarge,
      color:COLORS.red,
   },
})
const nomStl = StyleSheet.create({
   nomMunicipio:{
      position: 'absolute',
      top: atajos.descargado.marginTop + 60,
      right: 0,
      backgroundColor: COLORS.blue,
      ...SHADOWS.small,
      borderBottomLeftRadius: RADIUS.xlarge,
      
      borderTopLeftRadius: RADIUS.xlarge,
      
   },
   nomMunicipioTxt:{
      fontSize: SIZES.medium,
      paddingHorizontal: 25,
      paddingVertical: 8,
      color: COLORS.primary
   },
})
const recomendadoStl = StyleSheet.create({
   container: {
      width: '100%',
      height: height,
      position: 'relative',
   },
   scroll: {
      height: '90%',
   },
   contact: {
      position: 'absolute',
      bottom: atajos.descargado.bottom,
      backgroundColor: 'red',
      width: '100%',
      height: .07 * height,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      paddingHorizontal: 10,
   },
   contactPh: {
      width: '80%',
      height: '80%',
      backgroundColor: COLORS.blue,
      borderRadius: RADIUS.medium,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 10,
      ...SHADOWS.small,
   },
   contactMap: {
      width: '19%',
      height: '80%',
      backgroundColor: COLORS.primary,
      borderRadius: RADIUS.medium,
      alignItems: 'center',
      justifyContent: 'center',
      ...SHADOWS.small,
   },
   contactIcon: {
      fontSize: SIZES.xxlarge + 5,
   },
   contactIconP: {
      color: COLORS.primary,
   },
   contactIconTxt: {
      color: COLORS.primary,
      fontSize: SIZES.large,
      fontWeight: 'bold',
      letterSpacing: 2,
      textTransform: 'uppercase',
   },
   recomendado: {
      width: '100%',
      height: '100%',
      position: 'relative',
      paddingBottom: .3 * height,
   },
   contIcon: {
      position: 'absolute',
      top: marginTop + 10,
      left: 10,
      backgroundColor: COLORS.primaryOpaco,
      zIndex: 3,
      width: 45,
      height: 45,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: RADIUS.xxlarge,
   },
   icon: {
      fontSize: SIZES.xxlarge + 5,
   },
   save:{
      position: 'absolute',
      top: marginTop + 10,
      right: 10,
      backgroundColor: COLORS.primaryOpaco,
      zIndex: 3,
      width: 45,
      height: 45,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: RADIUS.xxlarge,
   },
   iconSave: {
      fontSize: SIZES.xxlarge,
      color: COLORS.blue,
   },
   header: {
      width: width,
      height: height * .65,
      borderBottomLeftRadius: RADIUS.xxlarge + 10,
      borderBottomRightRadius: RADIUS.xxlarge + 10,
      overflow: 'hidden',
      position: 'relative',
   },
   headertext: {
      backgroundColor: 'rgba(0,0,0,0.3)',
      fontSize: SIZES.xxlarge + 5,
      fontWeight: 'bold',
      letterSpacing: 2,
      width: width * .9,
      position: 'absolute',
      bottom: 15,
      left: .05 * width,
      textAlign: 'center',
      color: COLORS.primary,
      borderRadius: RADIUS.xxlarge,
      paddingVertical: 5,
      paddingHorizontal: 10,
      textTransform: 'uppercase',
   },
   headerImg: {
      top: 0,
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
   },
   logo: {
      width: '100%',
      marginTop: 40,
   },
   logoImg: {
      width: '60%',
      height: .15 * height,
      marginLeft: '20%',
      resizeMode: 'contain',
   },
   logotext: {
      textAlign: 'center',
      color: COLORS.tertiary,
      fontSize: SIZES.medium,
      opacity: 0.7,
   },
   desc: {
      width: '90%',
      marginLeft: '5%',
      marginTop: 5,
   },
   desctext: {
      color: COLORS.tertiary,
      textAlign: 'center',
      fontSize: SIZES.medium,
   },
   redes: {
      marginTop: 60,
      width: '80%',
      marginLeft: '10%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
   },
   redesCont: {
      width: '33%',
      flexDirection: 'column',
      marginBottom: 20,
   },
   redesImg: {
      textAlign: 'center',
      fontSize: SIZES.xxlarge + 25,
      color: COLORS.tertiary,
      opacity: 0.7,
   },
   redesText: {
      textAlign: 'center',
      color: COLORS.tertiary,
      fontSize: SIZES.small,
      opacity: 0.7,
      fontWeight: 600,
      textTransform: 'uppercase',
   },
   imagenes: {
      marginTop: 40,
      flexDirection: 'row',
      flexWrap: 'wrap',
      width: '95%',
      marginLeft: '2.5%',
      gap: 6,
   },
   imagenesCont: {
      width: '49%',
      borderRadius: RADIUS.large,
      overflow: 'hidden',
   },
   imagenesImg: {
      width: '100%',
      height: 150,
      resizeMode: 'cover',
   },
   imagenesText: {
      display: 'none'
   },
   pressentacion: {
      marginTop: 30,
      flexDirection: 'column',
   },
   pressentacionCont: {
      width: '95%',
      marginLeft: '2.5%',
      position: 'relative',
      marginBottom: 10,
      backgroundColor: '#fff',
      ...SHADOWS.medium,
      borderRadius: RADIUS.xxlarge,
   },
   pressentacionImg: {
      width: '100%',
      height: .3 * height,
      borderRadius: RADIUS.xxlarge,
   },
   pressentacionText: {
      width: '100%',
      position: 'absolute',
      bottom: 0,
      left: 0,
      backgroundColor: '#FFFFFFaa',
      paddingHorizontal: 15,
      fontSize: SIZES.large,
      letterSpacing: 1,
   },
   paquetes: {
      marginTop: 20,
   },
   paquetesCont: {
      width: '99%',
      marginLeft: '.5%',
      height: .9 * height,
   },
   paquetesImg: {
      width: '100%',
      height: '100%',
      resizeMode: 'contain',
   },
   menu: {
      marginTop: 30,
   },
   menuTit: {
      fontSize: SIZES.xxlarge,
      textAlign: 'center',
      fontWeight: 600,
      letterSpacing: 2,
   },
   menuCon: {
      position: 'relative',
      height: 800,
   },
   menuBg: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      resizeMode: 'contain',
   },
   menuConTxt: {
      width: '90%',
      height: '100%',
      marginLeft: '5%',
      paddingTop: 250,
      gap: 3,
   },
   menuTxt: {
      fontSize: SIZES.xxlarge,
      fontWeight: 'bold',
      color: COLORS.primary,
      letterSpacing: 2,
   },
})
const tipCatStl = StyleSheet.create({
   container: {
      width: '100%',
      position: 'absolute',
      bottom: 10,
      backgroundColor: COLORS.second,
      paddingTop: 5,
      paddingHorizontal: 15,
   },
   scroll: {
      paddingBottom: 10,
   },
   cont: {
      paddingHorizontal: 15,
      paddingVertical: 5,
      backgroundColor: '#fff',
      borderRadius: RADIUS.medium,
      marginHorizontal: 2,
      opacity: 0.5,
   },
   txt: {
      fontSize: SIZES.medium,
      textTransform: 'uppercase',
      color: COLORS.tertiary
   },
})
const searchstl = StyleSheet.create({
   container: {
      paddingTop: 10,
   },
   caja: {
      flexDirection: 'row',
      width: '95%',
      marginLeft: '2.5%',
      height: 80,
      marginBottom: 10,
      paddingVertical: 10,
      borderRadius: RADIUS.xlarge,
      backgroundColor: COLORS.primary,

      shadowColor: '#999',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 3,
      elevation: 5,
   },
   cajaImg: {
      width: .23 * width,
      height: '100%',
      resizeMode: 'contain',
   },
   cajaCont: {
      height: '100%',
      justifyContent: 'center',
   },
   cajaContT: {
      fontSize: SIZES.large,
      lineHeight: 20,
      color: COLORS.tertiary,
      fontWeight: 'bold',
      letterSpacing: 2,
      textTransform: 'uppercase',
   },
   cajaContD: {
      fontSize: SIZES.medium,
      color: COLORS.tertiary,
      opacity: 0.8,
   },
   cajaContC: {
      fontSize: SIZES.small,
      fontWeight: 'bold',
      letterSpacing: 1,
      color: COLORS.tertiary,
   },
})

export { mapsStl, busquedaStl, mapaStl, promotionStl, recomendadoStl, tipCatStl, searchstl,nomStl,minisitioStl }