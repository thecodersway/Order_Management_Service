import {StyleSheet} from 'react-native';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
const styles = () =>
  StyleSheet.create({
    productName: {
      marginHorizontal: wp('0.5%'),
      height: hp('13%'),
      justifyContent: 'space-between',
      marginVertical:hp('1%'),
      paddingTop:hp('0.5%'),
    },
    id: {
      flexDirection: 'row',
      height: hp('4.5%'),
      marginRight: wp('25%'),
      justifyContent: 'space-between',
    },
    skuIdBrandName: {
      color:'#686868',
      fontSize: 13,
      width: wp('30%'),
      flexDirection: 'row',
      alignItems: 'center',
    },
    skuId: {
      color:'#686868',
      fontFamily: 'Inter',
      fontSize: 13,
      fontWeight: '400',
      lineHeight: 17,
      textAlign: 'left',
    },
    brandName: {
      color:'#686868',
      fontSize: 15,
      fontWeight: '500',
      lineHeight: 17,
      textAlign: 'left',
      paddingLeft: wp('3%'),
    },
    name: {
      height: hp('4.5%'),
    },
    nameOfproduct: {
      fontFamily: 'Inter',
      fontSize: 25,
      fontWeight: '600',
      lineHeight: 29,
      letterSpacing: -0.1,
      textAlign: 'left',
      color: 'black',
    },
    specifications:{
      marginVertical:hp('1%'),
      },
    rating: {
      height: hp('2.5%'),
      flexDirection: 'row',
      alignItems: 'center',
    },
    ratingNumber:{
      fontWeight: '600',
    },
    reviews: {
      color:'#686868',
      marginLeft:wp('2%'),
      fontWeight: '400',
    },
    writeReview: {
      marginLeft:wp('4%'),
      fontSize:18,
      fontWeight: '600',
      color: '#F15927',
    },
    price: {
      marginHorizontal: wp('1%'),
      height: hp('9%'),
      flexDirection: 'row',
      alignItems: 'center',
      borderBottomWidth: 1,
      borderBottomColor: '#E3E3E3',
      paddingBottom:hp('1%'),
    },
    rupeeSymbol: {
      fontSize: 32,
      fontWeight: '400',
      color: 'grey',
    },
    actualPrice: {
      fontSize: 32,
      fontWeight: '400',
      color: 'black',
      marginLeft: wp('2.5%'),
    },
    originalPrice: {
      color:'#686868',
      fontSize: 22,
      textDecorationLine: 'line-through',
      marginLeft: wp('2.5%'),
    },
    discountPercent: {
      backgroundColor: '#db441a',
      color: 'white',
      width: 'auto',
      height: 'auto',
      fontSize: 15,
      fontWeight:'600',
      paddingHorizontal: 5,
      borderRadius: 5,
      marginLeft: wp('2.5%'),
    },
    productInfo: {
      height: hp('22%'),
      backgroundColor: 'grey',
      marginHorizontal: wp('2%'),
      borderBottomWidth: 1,
      borderBottomColor: '#E3E3E3',
    },
    elementContainer: {
      flexDirection: 'row',
      alignItems: 'flex-start',
    },
    specsContainer: {
      width: wp('24%'),
      justifyContent: 'flex-start',
    },
    specsTypeTopContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      flex: 1,
    },
    specsTypesContainer: {
      marginRight: wp('2%'),
      height: hp('4.5%'),
      width: wp('18%'),
      marginTop: hp('2%'),
      borderRadius: 8,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5F5F5',
      borderWidth: 1,
    },
    selectedCategory: {
      borderColor: '#F15927',
      backgroundColor: '#FFFFFF',
    },
    defaultCategory: {
      borderColor: '#FFFFFF',
      backgroundColor: '#F5F5F5',
    },
    categoryText: {
      fontSize: 14,
      color: 'black',
      fontWeight: '500',
    },
    elementText: {
      color:'#686868',
      fontWeight: '400',
      fontSize: 14,
      marginTop: hp('3%'),
      height: hp('5%'),
    },
    stockContainer: {
      height: hp('10%'),
      justifyContent: 'center',
      marginVertical: hp('1%'),
      borderTopWidth: 1,
      borderTopColor: '#E3E3E3',
      borderBottomWidth: 1,
      borderBottomColor: '#E3E3E3',
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    item: {
      alignContent: 'flex-start',
      justifyContent: 'flex-start',
    },
    stockProps: {
      fontSize: 14,
      color: 'black',
    },
    quantity: {
      fontSize: 16,
      alignItems: 'flex-start',
      color: 'black',
    },
    ratingIcon: {
      flexDirection: 'row',
    },
  });

export default styles;
