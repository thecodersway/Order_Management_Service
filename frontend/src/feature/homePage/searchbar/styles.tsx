

import { StyleSheet} from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

const createStyles = () => 
     StyleSheet.create({
          searchContainer:{
              flexDirection:'row',
              alignItems:'center',
              borderRadius:10,
              borderColor:'#ccc',
              borderWidth:1,
              height:hp('5%'),
              width:wp('94%'),
              paddingHorizontal:wp('4.16%'),
              backgroundColor:'#fff',
             shadowOffset:{
                width:0,
                height:2,
             },
            },
            textInput:{
                flex:1,
                marginLeft:wp('2%'),
                fontSize:hp('1.8%'),
                color:'#333',
            },
            icon:{
                width:wp('2.778%'),
                height:hp('0.8%'),
            },
    });

const styles = createStyles();
export default styles;
