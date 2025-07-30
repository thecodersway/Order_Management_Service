import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const styles = () =>
  StyleSheet.create({
    rootContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginHorizontal:wp('6%')
    },
    iconContainer: {
    },
    innerImage:{
      height:hp('10%'),
      width:wp('20%'),
    },
    selectedIcon: {
      borderWidth: 0.2,
      borderRadius:3,
      borderColor: '#F15927',
      backgroundColor: '#FEF2EE',
    },
  });

export default styles;
