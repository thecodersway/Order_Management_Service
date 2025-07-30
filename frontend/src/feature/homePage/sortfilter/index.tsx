/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import {View ,Text, TouchableOpacity, Modal } from 'react-native';
import styles from './styles';
import Sort from '../../../assests/svg/sort';
import Filter from '../../../assests/svg/filter';
import SortFilterCategories from '../../sortFilter';



const SortFilter: React.FunctionComponent = ()=>{

    const [modalVisible, setModalVisible] = useState(false);

    const renderSortFilter = () => (<>
        <View style={styles.sort}>
        <Sort />
        <View style={{marginLeft:8}}>
        <Text style={styles.text}>SORT</Text>
        </View>
    </View>
    <TouchableOpacity  onPress={() => setModalVisible(!modalVisible)}style={styles.sort}>
        <Filter />
        <View style={{marginLeft:8}}>
        <Text style={styles.text}>FILTER</Text>
        </View>
    </TouchableOpacity>
    </>
    );

    const modal = () => {setModalVisible(!modalVisible);};

    return(
     <View style={[styles.container]}>
        {renderSortFilter()}
        <Modal visible={modalVisible}  onRequestClose={modal}  animationType="slide" >
         <SortFilterCategories  setModalVisible={setModalVisible} />
        </Modal>
     </View>
    );
};

export default SortFilter;
