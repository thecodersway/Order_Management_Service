import React, {FC, useState} from 'react';
import {TouchableOpacity, View,Image} from 'react-native';
import styles from './styles';
import { RootState } from '../../../redux/store';
import { useSelector } from 'react-redux';

const ShortView: FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | 1>(1);
  const style = styles();

  const productData = useSelector(
    (state: RootState) => state.productsDescription.description,
  );

  const handlePress = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <View style={style.rootContainer}>
      {[0, 1, 2].map((index) => (
        <TouchableOpacity
          key={index}
          style={index === selectedIndex ? style.selectedIcon : style.iconContainer}
          onPress={() => handlePress(index)}
        >
      <View>
       {productData[0]?.image_url &&
        <Image
            //  source={{ uri: `data:image/png;base64,${productData[0]?.image_url}` }}
            source={{uri: productData[0]?.image_url}}
            style={style.innerImage}
            resizeMode="contain"
          />}

       </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default ShortView;
