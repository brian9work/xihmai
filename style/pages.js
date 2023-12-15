import { StyleSheet, Dimensions } from 'react-native'
import atajos from './atajos';
import { COLORS, RADIUS, SIZES, SHADOWS } from '../constants';

const { height, width } = Dimensions.get("window");

const stlApp = StyleSheet.create({
	container: {
		width: width,
		height: height,
	}
})
const stlBienvenida = StyleSheet.create({
	container:{
		...StyleSheet.absoluteFillObject,
		...atajos.tamano,
      justifyContent: 'flex-end',
	  backgroundColor: '#fff',
	},
	img: {
		width: '60%',
      marginLeft: '20%',
		height: 100,
		resizeMode: 'contain',
      marginBottom: 15,
	},
	login:{
		width: '90%',
		marginLeft: '5%',
	},
	loginGoogle:{
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		height: 60,
		backgroundColor: COLORS.secondOpaco,
		borderRadius: RADIUS.xxlarge,
		paddingHorizontal: 20,
      marginTop: 20,
	},
	loginImg:{
		width: 45,
		height: 45,
		resizeMode: 'contain',
		marginLeft: 0,
	},
	loginText:{
		width: '80%',
		fontSize: SIZES.medium,
		fontWeight: 600,
		letterSpacing: 2,
	},
	countAccept:{

	},
	countAcceptTxt:{
		textAlign: 'center',
		fontSize: SIZES.xlarge,
		fontWeight: 600,
		letterSpacing: 2,
		opacity: .6,
	},
	countAcceptImg:{
		width: 100,
	    marginLeft: (width/2) - 75,
		height: 100,
		resizeMode: 'contain',
        marginBottom: 5,
		marginTop: 25,
		borderRadius: 100,
		backgroundColor: COLORS.secondOpaco,
	},
	countAcceptBtn:{
		marginTop: 25,
		marginBottom: 5,
		fontSize: SIZES.large,
		backgroundColor: COLORS.blue,
		color: COLORS.primary,
		borderRadius: RADIUS.medium,
		paddingVertical: 13,
		textAlign: 'center',
		letterSpacing: 2,
		textTransform: 'uppercase',
	},
	countAcceptBtn2:{
		marginBottom: 35,
		fontSize: SIZES.medium,
		color: COLORS.blue,
		textAlign: 'center',
		fontWeight: 600,
		textTransform: 'uppercase',
	},
	line:{
		marginTop: 10,
		backgroundColor: COLORS.tertiary,
		opacity: .1,
		height: 2,
	},
   omitir:{
      marginTop: 20,
      textAlign: 'center',
      fontSize: SIZES.large,
      letterSpacing: 2,
      textTransform: 'uppercase',
      opacity: .5,
   },
   tyc:{
      marginTop: 15,
      marginBottom: 25,
      textAlign: 'center',
   }
})
const stlVersion = StyleSheet.create({
	container:{
		// backgroundColor: COLORS.blue,
		height: "100%",
	},
	cont:{
		width: "95%",
		marginLeft: "2.5%",
		paddingHorizontal: 20,
		paddingVertical: 20,
		backgroundColor: COLORS.white,
		backgroundColor: "#FFF",
		borderRadius: RADIUS.xlarge,
		position: "absolute",
		top: .37*height,
		// ...SHADOWS.medium,
	},
	contIma:{
		width: "100%",
		height: 120,
		resizeMode: 'contain'
	},
	contTit:{
		marginTop: 10,
		textAlign: "center",
		textTransform: "uppercase",
		fontSize: SIZES.xlarge,
		fontWeight: 900,
		letterSpacing: 1,
	},
	contDes:{
		marginTop: 0,
		textAlign: "center",
		textTransform: "capitalize",
		fontSize: SIZES.medium,
		fontWeight: 300,
		letterSpacing: .5,
	},
	background:{
		width: "100%",
		height: "100%",
		position: "absolute",
		left:0,
		top: 0,
		resizeMode: 'cover',
	},
	imageAct:{
		position: "absolute",
		width: "90%",
		resizeMode: 'contain',
		top: .3 * height,
		left: '5%',
		// backgroundColor: 'red',
	},
	contBtn:{
		// backgroundColor: 'red',
		flexDirection: 'row',
		justifyContent: 'center',
		alignContent: 'center',
		gap: 10,
		marginTop: 15,
	},
	contBtnAct:{
		borderColor: COLORS.blue,
		borderStyle: 'solid',
		borderWidth: 2,
		backgroundColor: COLORS.blue,
		width: .42 * width,
		// paddingHorizontal: .12 * width,
		paddingVertical: 8,
		borderRadius: RADIUS.medium,
	},
	contBtnActText:{
		color: COLORS.white,
		fontSize: SIZES.large,
		letterSpacing: 2,
		textAlign: 'center',
		fontWeight: 900,
	},
	contBtnIgn:{
		borderColor: COLORS.blue,
		borderStyle: 'solid',
		borderWidth: 2,
		width: .42 * width,
		// paddingHorizontal: .12 * width,
		paddingVertical: 8,
		borderRadius: RADIUS.medium,
	},
	contBtnIgnText:{
		color: COLORS.blue,
		fontSize: SIZES.large,
		letterSpacing: 2,
		textAlign: 'center',
		fontWeight: 900,
	},
	imageLogo:{
		position: "absolute",
		width: "100%",
		height: 50,
		resizeMode: 'contain',
		bottom: 35,
		left: 0,
	},
	imageVersion:{
		position: "absolute",
		width: "100%",
		bottom: 23,
		left: 0,
		textAlign: 'center',
		color: COLORS.white,
		fontSize: SIZES.medium,
		letterSpacing: 3,
	},
	dataVersion:{
		position: "absolute",
		width: "100%",
		bottom: 5,
		left: 0,
		textAlign: 'center',
		color: COLORS.white,
		fontSize: SIZES.medium,
		fontWeight: 900,
		letterSpacing: 2,
	},
})
export {stlApp,stlBienvenida,stlVersion}