import {StyleSheet} from 'react-native';
import {heightPercentageToDP as hp,widthPercentageToDP as wp} from 'react-native-responsive-screen';

const Styles = StyleSheet.create({
  rootComponent: {
    height: 52,
    width: '100%',
  },
  headingCart: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 12,
    paddingLeft: 5,
    paddingRight: 25,
  },
  headingstyle: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 65,
  },
  cartText:{
    color:'#686868',
  },
  goBackIcon: {
    width: wp('12%'),
    height:hp('3%'),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp('1%'),
  },
  cart: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    marginLeft: 0,
    width: 45,
    height: 28,
  },
  cartIcon: {
    paddingRight: 4,
  },
  typo: {
    paddingTop: 6,
    paddingBottom: 6,
  },
});

export default Styles;
