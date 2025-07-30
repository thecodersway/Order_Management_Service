import React from 'react';
import {View ,Text, TouchableOpacity } from 'react-native'
import Styles from './styles';

interface SortFilterCategoriesProps {
    setModalVisible: (visible: boolean) => void;
}

const Footer: React.FC<SortFilterCategoriesProps> = ({ setModalVisible })=>{
    const styles = Styles();
    return(
     <View style={[styles.container]}>
            <TouchableOpacity  onPress={()=>setModalVisible(false)} style={styles.sort}>
            <Text style={styles.textClose}>CLOSE</Text>
            </TouchableOpacity>
            <View style={styles.sort}>
            <Text style={styles.text}>APPLY</Text>
            </View>
     </View>
    );
};

export default Footer;
