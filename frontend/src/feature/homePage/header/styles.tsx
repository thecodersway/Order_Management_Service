
import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const createStyles = () => {
  return StyleSheet.create({
    rootComponent: {
      height: hp('6.5%'),
      width: wp('100%'),
    },
    headingCart: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: hp('1.5%'),
      paddingLeft: wp('4.3%'),
      paddingRight:wp('4.5%'),
    },
    headingstyle: {
      paddingVertical: hp('0.625%'),
      paddingRight: wp('18.1%'),
    },
    cartstyle: {
      paddingLeft:0,
      paddingRight:0,
    },
    cartText:{
      color:'#686868',
    },
    typo: {
      paddingTop: hp('0.75%'),
      paddingBottom: hp('0.5%'),
    },
    carttypo: {
      flexDirection: 'row',
      width: wp('12.5%'),
      height: hp('3.5%'),
    },
  });
};

const styles = createStyles();
export default styles;


