import { StyleSheet } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

const styles =  StyleSheet.create({
  rootComponent: {
    height: hp('6.5%'),
    width: '100%',
  },
  headingCart: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: hp('1.5%'),
     paddingLeft: wp('0.4%'),
    paddingRight: wp('10%'),
  },
  headingstyle: {
    flexDirection: 'row',
    paddingTop: hp('0.625%'),
    paddingBottom: hp('0.625%'),
  },
  goBackIcon: {
    width: '15%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartText:{
    color:'#686868',
  },
  categoryItems: {
    marginTop: '4%',
    marginLeft: '5%',
    width: '70%',
    height: hp('5.6%'),
  },
  categoryText: {
    fontFamily: 'Inter',
    fontSize: hp('2.1%'),
    fontWeight: '600',
    lineHeight: 20,
    letterSpacing: -0.1,
    textAlign: 'left',
    color:'#1D1D1D',
  },
  categoryNumber: {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: hp('1.5%'),
    lineHeight: 15.6,
    textAlign: 'left',
    color:'#686868',
  },
  carttypo: {
    marginTop: hp('1.5%'),
    flexDirection: 'row',
    width: wp('7%'),
    height: hp('3.5%'),
  },
  cartstyle: {
    marginRight: wp('0.5%'),
  },
  typo: {
    paddingTop: hp('0.75%'),
    paddingBottom: hp('0.75%'),
  },
});

export default styles;
