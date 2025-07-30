import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  mainContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 20,
    alignItems: 'center',
    borderBottomWidth: 0.2,
    borderColor: 'grey',
  },
  container: {
    paddingTop: hp('1.5%'),
    paddingHorizontal: wp('4.4%'),
  },
  goBackIcon:{
    justifyContent:'center',
    height:hp('3%'),
    width:wp('12%'),
   },
  productContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    padding: 10,
    borderRadius: 5,
  },
  imageIcon: {
    justifyContent:'center',
    alignItems:'center',
    height: hp('8%'),
    width: wp('18.6666667%'),
    backgroundColor: '#E6E6E6',
    borderRadius: 5,
  },
  itemDetails: {
    marginLeft: wp('2%'),
    width: wp('20%'),
  },
  totalBill: {
    flexDirection: 'row',
    width: hp('20%'),
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
  },
  totalItems: {
    fontFamily: 'Inter',
    fontSize: 15,
    fontWeight: '500',
    color: 'black',
  },
  showDetail: {
    color:'#686868',
    fontFamily: 'Inter',
    fontSize: 13,
    fontWeight: '400',
  },
  ruppeeSymbol: {
    color:'#686868',
    fontFamily: 'Inter',
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'right',
  },
  totalPrice: {
    fontFamily: 'Inter',
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'right',
    color: 'black',
  },
  imageContainer: {
    height: hp('62.5%'),
    marginTop: hp('2%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerImage:{
    height:hp('7%'),
    width:wp('12%'),
  },
  innerimageContainer: {
    height: hp('52%'),
    width: wp('64.5%'),
  },
  text: {
    fontSize: 22,
    marginLeft: 18,
    paddingHorizontal: 20,
    fontWeight: '400',
    color: 'black',
  },
  appreciationText: {
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: 20,
    lineHeight: 40,
    letterSpacing: -0.1,
    textAlign: 'center',
    color: 'black',
  },
  orderNumber: {
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: 20,
    lineHeight: 26,
    letterSpacing: -0.1,
    color: '#F15927',
  },
  confirmationText: {
    color:'#686868',
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: 13,
    lineHeight: 17,
    letterSpacing: -0.1,
    textAlign: 'center',
  },
  continueShopingButtom: {
    justifyContent: 'center',
    alignItems: 'center',
    height: hp('4.5%'),
    width: wp('54%'),
    marginTop: hp('5%'),
    marginHorizontal: wp('5%'),
    borderWidth: 1,
    borderColor: '#E99D84',
    borderRadius: 5,
  },
});

export default styles;
