import { StyleSheet } from 'react-native';

const createStyles = () => {
    return StyleSheet.create({
     container:{
        flex:1,
        flexDirection:'row',
     },
     sort:{
        width:'50%',
        borderWidth:1,
        borderColor:'#E0E0E0',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
     },
     text:{
        justifyContent:'center',
        alignItems:'center',
        fontSize:15,
        color:'#F15927',
     },
    });
};

const styles = createStyles();
export default styles;
