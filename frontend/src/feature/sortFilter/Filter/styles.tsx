import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Styles = () => StyleSheet.create({
  rootComponent: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
  },
  brand: {
    flex: 4,
    backgroundColor: '#F6F6F6',
    borderRightWidth:1,
    borderColor:'#E0E0E0',
  },
  optionList: {
    flex: 6,
  },
  categoryType: {
    color: 'black',
    marginLeft: wp('6%'),
    fontSize:16,
  },
  categoryTextContainer: {
    height: hp('6%'),
    borderBottomWidth: 1,
    borderColor:'#E0E0E0',
    justifyContent: 'center',
  },
  selectCategory: {
    backgroundColor: '#FEF2EE',
    fontWeight:'600',
  },
  valueContainer: {
    height: hp('6%'), 
    // justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    flexDirection:'row',
  },
  valueType:{
    marginLeft:wp('6%'),
    color: 'black',
    fontSize:16,
  },
  checkIcon:{
    marginLeft:wp('4%'),
  }
});

export default Styles;

