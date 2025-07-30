
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Styles from './styles';
import TrueCheckIcon from '../../../assests/svg/checkIcon/true';
import FalseCheckIcon from '../../../assests/svg/checkIcon/false';

interface FilterProps {
  selectedCategory: string | null;
  selectedCategoryValues: Map<string, Set<string | number>>;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string | null>>;
  setSelectedCategoryValues: React.Dispatch<React.SetStateAction<Map<string, Set<string | number>>>>;
}

const Filter = ({selectedCategory, selectedCategoryValues, setSelectedCategory, setSelectedCategoryValues}: FilterProps) => {
  const styles = Styles();

  const availabefilterOptions: { [key: string]: (string | number)[] } = {
    Brand: ['Infra Market', 'UltraTech', 'Bharti', 'ACC', 'Sagar', 'Birla'],
    Grade: ['A', 'B', 'C', 'D'],
    Weight: [50, 30, 20, 10],
    Price: ['Above 2000', 'Above 1500', 'Above 1000', 'Below 500'],
    Rating: [5, 4, 3, 2, 1],
  };

  const handleSelectCategory = (category: string) => {
    setSelectedCategory(selectedCategory === category ? null : category);
  };

  const handleSelectValue = (key: string, value: string | number) => {
    const updatedSelectedValues = new Map<string, Set<string | number>>(selectedCategoryValues);
    if (updatedSelectedValues.has(key)) {
      const values = updatedSelectedValues.get(key)!;
      if (values.has(value)) {
        values.delete(value);
      } else {
        values.add(value);
      }
    } else {
      updatedSelectedValues.set(key, new Set([value]));
    }

    setSelectedCategoryValues(updatedSelectedValues);
  };

  console.log(selectedCategoryValues);

  return (
    <View style={styles.rootComponent}>
      <View style={styles.brand}>
        {Object.keys(availabefilterOptions).map(category => (
          <TouchableOpacity
            key={category}
            style={[
              styles.categoryTextContainer,
              selectedCategory === category && styles.selectCategory,
            ]}
            onPress={() => handleSelectCategory(category)}>
            <Text
              style={[
                styles.categoryType,
                selectedCategory === category ? styles.selectCategory : null,
              ]}>
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.optionList}>
        {selectedCategory && (
          <View>
            {availabefilterOptions[selectedCategory].map((value, index) => (
              <TouchableOpacity
                key={index}
                style={[styles.valueContainer]}
                onPress={() => handleSelectValue(selectedCategory, value)}>
                <View style={styles.checkIcon}>
                  {selectedCategoryValues.get(selectedCategory)?.has(value) ? <TrueCheckIcon /> : <FalseCheckIcon />}
                </View>
                <Text style={[styles.valueType]}>
                  {value}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </View>
    </View>
  );
};

export default Filter;

