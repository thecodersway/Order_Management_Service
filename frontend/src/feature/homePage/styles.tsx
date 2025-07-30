import { StyleSheet } from 'react-native';
import { heightPercentageToDP as hp , widthPercentageToDP as wp} from 'react-native-responsive-screen';

const createStyles = () => {
return  StyleSheet.create({
    rootComponent: {
      flex: 1,
      backgroundColor:'white',
    },
    SearchBar: {
      width: wp('100%'),
      height: hp('5.5%'),
      alignItems:'center',
    },
    header: {
      width: wp('100%'),
      height: hp('6.5%'),
      marginVertical:hp('0.25%'),
    },
    noProductstyle:{
      height:hp('71.4%'),
      alignItems: 'center',
      marginTop: 20,
    },
    noProductMessage:{
      fontSize: 16,
       color: '#888',
    },
    heading: {
      height: hp('12%'),
      width: '100%',
    },
    category: {
      height: hp('12.5%'),
    },
    products: {
      height: hp('62%'),
    },
    sortFilter: {
      height: hp('5.5%'),
      marginBottom:'auto',
    },
  });
};

const styles = createStyles();
export default styles;
