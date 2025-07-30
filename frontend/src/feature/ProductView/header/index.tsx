import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import Cart from '../../../assests/svg/cart';
import GoBack from '../../../assests/svg/goBack';
import {RootStackParamList} from '../../../navigation';

import styles from './styles';
import { Screens } from '../../../constants/screen';

import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';


const ProductViewHeader: React.FC = () => {

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const cartItem = useSelector((state: RootState) => state.getCartItems);
  const navigateToCart = () => navigation.navigate(Screens.Cart);
  const navigateBack = () => navigation.goBack();

  const renderHeader = () => (
    <View style={styles.headingstyle}>
      <TouchableOpacity onPress={navigateBack} style={styles.goBackIcon}>
        <GoBack />
      </TouchableOpacity>
    </View>
  );

  const renderCart = () => (
    <TouchableOpacity onPress={navigateToCart} style={styles.cart}>
      <View style={styles.cartIcon}>
        <Cart />
      </View>
      <View style={styles.typo}>
        <Text style={styles.cartText}>({cartItem.items !== null ? cartItem.items.length : 0 })</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={[styles.rootComponent, styles.headingCart]}>
      {renderHeader()}
      {renderCart()}
    </View>
  );
};

export default ProductViewHeader;


