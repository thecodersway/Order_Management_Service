import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
   container: {
     paddingTop:24,
     paddingBottom:16,
     paddingRight:16,
     paddingLeft:16,
     backgroundColor: '#fff',
   },
    descriptionContainer:{
       justifyContent:'center',
    },
   description: {
     fontSize: 14,
     fontWeight:'400',
     marginBottom: 20,
     color: '#333',
     flexWrap:'wrap',
     lineHeight:19.2,
   },
   specsContainer: {
     flexDirection: 'row',
     justifyContent:'space-between',
     marginBottom: 10,
     marginRight:wp('5%'),
   },
   specTitle: {
    color:'#686868',
     fontSize: 14,
     fontWeight: 'bold',
   },
   specValue: {
     fontSize: 14,
     color: '#555',
   },
 });

export default styles;
