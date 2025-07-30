import { StyleSheet } from 'react-native';
//import { widthPercentageToDP as wp } from "react-native-responsive-screen";
const Styles = () =>
    StyleSheet.create({
     container:{
        flex:1,
        flexDirection:'row',
     },
     sort:{
        width:'50%',
        borderWidth:1,
        borderColor:'#E0E0E0',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
     },
     text:{
      fontFamily: 'Inter',
      fontSize: 18,
      fontWeight: '700',
      lineHeight: 24,
      letterSpacing: 0.21,
      color:'#F15927',
      alignItems:'center',
      justifyContent:'center',
     },
     textClose:{
        fontFamily: 'Inter',
        fontSize: 18,
        fontWeight: '700',
        lineHeight: 24,
        letterSpacing: 0.21,
        borderColor:'#E0E0E0',
        alignItems:'center',
      justifyContent:'center',
      color:'#686868',
     },
    });

export default Styles;
