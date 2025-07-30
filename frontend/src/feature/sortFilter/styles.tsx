import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
const createStyles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
    header: {
      height: hp('5.5%'),
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottomWidth: 1,
      borderBottomColor: '#E0E0E0',
    },
    filterText: {
      marginLeft: wp('6%'),
      fontFamily: 'Inter',
      fontSize: 16,
      fontWeight: '600',
      lineHeight: 21,
      letterSpacing: -0.1,
      color:'#686868',
    },
    clearText: {
      marginRight: wp('10%'),
      fontFamily: 'Inter',
      fontSize: 18,
      fontWeight: '700',
      lineHeight: 24,
      letterSpacing: 0.21,
      textAlign: 'left',
      color:'#F15927',
    },
    filter:{
        flex:1,
    },
    sort_filter: {
        height: hp('5.5%'),
        marginBottom:'auto',
    },
  });

const styles = createStyles();
export default styles;
