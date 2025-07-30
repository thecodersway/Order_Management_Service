import {StyleSheet} from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
const Styles = StyleSheet.create({
  flatlist: {
    flex: 1,
    borderWidth:0.2,
    paddingHorizontal: wp('2.78%'),
    borderTopColor: '#E0E0E0',
  },
  topContainer: {
    marginVertical: 15,
    marginHorizontal:wp('1.4%'),
    width: wp('44.5%'),
  },
  image: {
    height: hp('24%'),
    width: '100%',
    backgroundColor: '#F6F6F6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerImage:{
    width: wp('42%'),
    height: hp('16%'),
  },
  textDesc: {
    marginVertical:hp('0.625%'),
    marginHorizontal:hp('0.625%'),
  },
  text: {
    fontSize: hp('1.7%'),
    marginTop: 5,
    marginLeft: 15,
    color: '#686868',
    maxWidth: '100%',
  },
  container: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: hp('1.25%'),
    marginBottom: hp('0.4%'),
  },
  actualPrice: {
    fontSize:hp('2%'),
    lineHeight:25.12,
    fontWeight:'500',
    color: 'black',
  },
  headingText: {
    marginLeft: 25,
    fontFamily: 'Inter',
    fontSize: 17,
    fontWeight: '600',
    lineHeight: 20,
    letterSpacing: -0.1,
    color: '#000000',
    marginBottom: 12,
  },
  productDetail: {
    height: 64,
  },
  price: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ruppeSymbol:{
    color:'#686868',
  },
  originalPrice: {
    color:'#686868',
    textDecorationLine: 'line-through',
  },
  discountPercent: {
    backgroundColor: '#db441a',
    color: 'white',
    width: 'auto',
    height: 'auto',
    paddingHorizontal: 5,
    fontWeight:'700',
    borderRadius: 5,
  },
});

export default Styles;
