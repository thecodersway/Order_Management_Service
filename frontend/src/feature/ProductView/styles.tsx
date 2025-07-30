import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
const styles = () =>
  StyleSheet.create({
    topContainer: {
      flex: 1,
      backgroundColor: 'white',
    },
    header: {
      width: '100%',
      height: hp('6.5%'),
      marginVertical: hp('0.7%'),
      borderBottomWidth: 1,
      borderBottomColor: '#E3E3E3',
    },
    product: {
      height: hp('60%'),
      marginHorizontal: wp('2%'),
    },
    image: {
      paddingVertical: hp('4%'),
      paddingHorizontal: wp('5%'),
      alignItems: 'center',
    },
    innerImage:{
     height:hp('50%'),
     width:wp('80%'),
    },
    smallView: {
      height: hp('14%'),
      marginTop:hp('2%'),
      marginHorizontal: wp('0.8%'),
    },
    aboutProduct: {
      height: hp('76%'),
      marginTop:hp('14%'),
      marginHorizontal: wp('2%'),
    },
    description: {
      height: hp('44%'),
      backgroundColor: 'grey',
    },
  });

export default styles;
