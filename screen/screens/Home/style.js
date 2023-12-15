import { StyleSheet, Dimensions } from 'react-native'
import atajos from '../../../style/atajos';
import { COLORS, RADIUS, SHADOWS, SIZES } from '../../../constants';

const marginTop = atajos.descargado.marginTop
const { height, width } = Dimensions.get("window");

const homeStl = StyleSheet.create({
   container: {
      marginTop: marginTop,
      width: width,
      height: height - marginTop,
      backgroundColor: COLORS.background
   }
})
const countStl = StyleSheet.create({
   shadow: {
      ...SHADOWS.medium,
      backgroundColor: COLORS.second,
      borderRadius: RADIUS.large,
   },
   count: {
      width: '100%',
      paddingHorizontal: 25,
      height: 60,


      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
   },
   text: {
      fontSize: SIZES.xxlarge,
      fontWeight: '900',
      letterSpacing: 5,
      color: COLORS.text

   },
   touch: {},
   icon: {
      color: COLORS.tertiary,
      fontSize: SIZES.xxlarge + 10
   },
})
const MunicipiosStl = StyleSheet.create({
   container: {
      height: height - (60 + marginTop) -10,
      alignItems: 'center',
      paddingTop: 25,
   },
   comp:{
      backgroundColor: COLORS.background,
      height: '85%',
      ...SHADOWS.small,
      position: 'relative',
      borderRadius: RADIUS.large,
   },
   img:{
      width: '100%',
      height:'100%',
      resizeMode: 'cover',
      borderRadius: RADIUS.large,
   },
   temp: {
      fontSize: SIZES.xxlarge,
      textAlign: 'center',
      fontWeight: 'bold',
      letterSpacing: 2.5,
      textTransform: 'uppercase',
   },
   date:{
      textTransform: 'uppercase',
      fontSize: SIZES.medium,
      textAlign: 'center',
      fontWeight: '600'
   }
})
const countScreenStl = StyleSheet.create({
   container: {
      width: '100%',
      height: height,
   },
   scroll:{
      height: '100%',
   },
   countCon:{
      width: '100%',
      height: '100%',
      position: 'relative',
      paddingBottom: .3 *  height,
   },
   contIcon:{
      position: 'absolute',
      top: marginTop + 10 ,
      left: 10,
      backgroundColor: 'white',
      width: 45,
      zIndex:4,
      height: 45,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: RADIUS.xxlarge,
   },
   icon:{
      fontSize: SIZES.xxlarge + 5,
   },
   header:{
      width: width,
      height: height * .40,
      borderBottomLeftRadius: RADIUS.xxlarge + 50,
      borderBottomRightRadius: RADIUS.xxlarge + 50,
      overflow: 'hidden',
      position: 'relative',
      backgroundColor: COLORS.blue,
   },
   headerImg:{
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
   },

   headerCount:{
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: 10,
      left: 0,
      zIndex: 3,
   },
   headerCountCont:{
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 10,
   },
   headerCountImg:{
      width: 100,
      height: 100,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 100,
   },
   headerCountTxt:{
      color: COLORS.primary,
      fontSize: SIZES.xlarge,
      letterSpacing: 2,
   },
   headerCountDes:{
      color: COLORS.primaryOpaco,
      marginTop: -15,
      fontSize: SIZES.medium,
      opacity: .7,
      letterSpacing: 1,
   },
   headerCountAdd:{
      width: .5 * width,
      textAlign: 'center',
      backgroundColor: COLORS.primaryOpaco,
      paddingVertical: 8,
      borderRadius: RADIUS.medium,
      textTransform: 'uppercase',
      fontWeight: 600,
      letterSpacing: 1,
   },
   menu:{
      width: '90%',
      marginLeft: '5%',
      marginTop: 30,
   },
   menuCat:{
      paddingBottom: 10,
      marginBottom: 15,
   },
   menuCatTit:{
      fontWeight: '900',
      letterSpacing: 3,
      fontSize: SIZES.large,
      color: COLORS.tertiary,
      textTransform: 'uppercase',
   },
   menuCatCon:{
      fontSize: SIZES.large,
   },
   menuCatConTxt:{
      backgroundColor: COLORS.primary,
      padding: 13,
      paddingHorizontal: 10,
      borderRadius: RADIUS.xlarge,
      marginTop: 4,
      fontSize: SIZES.medium,
      fontWeight: '300',
      letterSpacing: 2,
   },
})
const stlAgregarCorreo = StyleSheet.create({
   container:{
      height: '100%',
      width: '100%',
      position: 'relative',
      backgroundColor: 'red'
   },
   background:{
      width: '100%',
      height: '100%',
      resizeMode: 'cover'
   },
   imageLogo:{
      width: '100%',
      height: 60,
      // backgroundColor: 'red',
      resizeMode: 'contain',
      position: 'absolute',
      top: 0.15 * height,
   },
   isTit:{
      width: '100%',
      position: 'absolute',
      top: (0.15 * height) + 60,
      color: COLORS.black2,
      textAlign: 'center',
      fontSize: SIZES.xxlarge,
      letterSpacing: 1.5,
      fontWeight: 900,
      textTransform: 'uppercase',
   },
   loginGoogle:{
      width: 200,
      height: 200,
      position: 'absolute',
      top: .415 * height,
      left: (.5 * width)-100,
      // backgroundColor: '#fff',
      borderRadius: RADIUS.xxlarge+80,
      alignItems: 'center',
      justifyContent: 'center',
   },
   loginImg:{
      width: 130,
      height: 130,
      borderRadius: RADIUS.xxlarge+80,
      resizeMode: 'contain',
   },
   tyc:{
      width: '100%',
      position: 'absolute',
      bottom: 30,
      color: COLORS.white,
      textAlign: 'center',
   },
   isEmail:{
      width: '90%',
      position: 'absolute',
      top: .61 * height,
      left: .05 * width,
      color: COLORS.white,
      fontSize: SIZES.xlarge,
      textAlign: 'center',
      fontWeight: 900,
      letterSpacing: 2,
      textTransform: 'uppercase',
   },
})
export { countStl,homeStl,MunicipiosStl,countScreenStl,stlAgregarCorreo }