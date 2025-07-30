import { StyleSheet } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
const createStyles = () => {
    return StyleSheet.create({
      rootComponent: {
        flexDirection: 'column',
        flex: 1,
        backgroundColor:'white',
      },
      header: {
        width: '100%',
        height: hp('6.5%'),
        marginVertical:hp('0.25%'),
      },
      SearchBar: {
        width: '98%',
        height: hp('5.5%'),
        marginTop:hp('0.25%'),
        marginLeft:13,
        marginBottom:hp('0.6%'),
      },
     productItem:{
      height: hp('73.5%'),
     },
     sortFilter:{
        height: hp('5.5%'),
     },
     flatListContent: {
      paddingTop: 12,
      paddingHorizontal: 15,
    },
    });
};

const styles = createStyles();
export default styles;
