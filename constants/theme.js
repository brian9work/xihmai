const COLORS = {
   // primary: '#313131',
   // second: '#515151',
   // secondOpaco: '#51515155',
   // tertiary: '#f8f9fa',
   // text: '#e1e1e1',
   // background: '#212121',

   primary: '#f8f9fa',
   second: '#f5f5f5',
   secondOpaco: '#e9ecef55',
   tertiary: '#313131',
   tertiary2: '#515151',
   text: '#212121',
   background: '#fff',

   primaryOpaco: '#f8f9faee',

   gray: "#83829A",
   gray2: "#C1C0C8",

   white: "#F3F4F8",
   modal: "#333333aa",

   lightWhite: "#FAFAFC",
   black: '#2a2a2a',
   black2: '#3a3a3a',
   blue: '#4235ff',
   red: 'rgba(255, 53, 66, 1)',
};
const TEXTS = {
   original: '#7A3E65',
   white: '#F6E1C3',
   black: '#313131'
}
const FONT = {
   regular: "DMRegular",
   medium: "DMMedium",
   bold: "DMBold",
};

const SIZES = {
   xsmall: 10,
   small: 12,
   medium: 15,
   large: 18,
   xlarge: 22,
   xxlarge: 24,
};
const RADIUS = {
   none: 0,
   xsmall: 5,
   small: 10,
   medium: 15,
   large: 20,
   xlarge: 25,
   xxlarge: 30,

}
const SHADOWS = {
   top:{
      shadowColor: "#f00",
      shadowOffset: {
         width: 2,
         height: -10,
      },
      shadowOpacity: 0.9,
      shadowRadius: 3.84,
      elevation: 2,
   },
   small: {
      shadowColor: "#666",
      shadowOffset: {
         width: 2,
         height: 2,
      },
      shadowOpacity: 0.9,
      shadowRadius: 3.84,
      elevation: 2,
   },
   medium: {
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 5.84,
      elevation: 5,
   },
};
const TITULOS = {
   tit1:{
      fontSize: SIZES.xxlarge,
		fontWeight: 'bold',
		letterSpacing: 3,
		textAlign: 'center',
		textTransform: 'uppercase',
   },
   tit2:{
      fontSize: SIZES.xlarge,
		fontWeight: 600,
		letterSpacing: 1,
		textAlign: 'center',
		textTransform: 'uppercase',
   },
   tit3:{
      fontSize: SIZES.large,
		fontWeight: 600,
		letterSpacing: 2,
   }
}
export { COLORS, TEXTS, FONT, SIZES, SHADOWS,RADIUS,TITULOS };
