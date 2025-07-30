import { View, Text, TouchableOpacity} from 'react-native';
import React, { useState } from 'react';
import styles from './styles';
import Footer from './footer';
import Filter from './Filter';


interface SortFilterCategoriesProps {
  setModalVisible: (visible: boolean) => void;
}

const SortFilterPage: React.FC<SortFilterCategoriesProps> = ({  setModalVisible }) => {
    const [selectedCategory, setSelectedCategory] = useState<string | null>('Brand');
    const [selectedCategoryValues, setSelectedCategoryValues] = useState< Map<string, Set<string | number>>>(new Map());
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.filterText}>Filters</Text>
        <TouchableOpacity onPress={()=> {setSelectedCategory('Brand') ,setSelectedCategoryValues(new Map())}}>
        <Text style={styles.clearText}>CLEAR ALL</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.filter}>
         <Filter selectedCategory={selectedCategory} selectedCategoryValues={selectedCategoryValues} setSelectedCategory={setSelectedCategory } setSelectedCategoryValues={setSelectedCategoryValues} />
      </View>
      <View style={styles.sort_filter}>
        <Footer  setModalVisible={setModalVisible}/>
      </View>
    </View>
  );
};

export default SortFilterPage;