import {StyleSheet} from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

const styles = () => {
  return StyleSheet.create({
    flatlist: {
      height:hp('12%'),
      borderBottomWidth: 1,
      borderBlockColor: '#d3d3d3',
      flex: 1,
    },
    rootComponent: {
      flex: 1,
      marginHorizontal:wp('2.78%'),
      alignItems: 'center',
    },
    iconPadding: {
      marginRight: wp('2.25%'),
      marginLeft: wp('2.25%'),
    },
    innerImage:{
      height:hp('5%'),
      width:wp('12.5%'),
    },
    text: {
      color:'#686868',
      marginTop: hp('0.5%'),
      maxWidth: wp('21%'),
      height: hp('4%'),
      fontFamily: 'Inter',
      fontSize: hp('1.4%'),
      fontWeight: '400',
      lineHeight: hp('1.8%'),
      letterSpacing: -0.09,
      textAlign: 'center',
      flexWrap: 'wrap',
      width: '100%',
    },
  });
};
export default styles;
