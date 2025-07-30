import React, { useCallback, useMemo } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useDispatch, useSelector } from 'react-redux';
import Cart from '../../../assests/svg/cart';
import InfraMarket from '../../../assests/svg/infraMarket';
import { RootStackParamList } from '../../../navigation';
import { AppDispatch, RootState } from '../../../redux/store';
import styles from './styles';
import { fetchCartItemsAsync } from '../../../redux/services/getCartItem';
import { Screens } from '../../../constants/screen';

const HomeHeader: React.FC = () =>{

const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

const navigateToCart = useCallback(() => {
  navigation.navigate(Screens.Cart);
}, [navigation]);

const dispatch = useDispatch<AppDispatch>();
useFocusEffect(
  React.useCallback(()=>{
    dispatch(fetchCartItemsAsync(1));
  },[dispatch])
);

const cartItem = useSelector((state : RootState) => state.getCartItems);


const cartItemCount = useMemo(() => cartItem.items?.length ?? 0, [cartItem.items]);

  const renderCartItems = useMemo(() => (
    <TouchableOpacity onPress={navigateToCart} style={styles.carttypo}>
      <View style={styles.cartstyle}>
        <Cart />
      </View>
      <View style={styles.typo}>
        <Text style={styles.cartText}> ({cartItemCount}) </Text>
      </View>
    </TouchableOpacity>
  ), [navigateToCart, cartItemCount]);


  return (
        <View style={[styles.rootComponent,styles.headingCart]}>
          <View style={styles.headingstyle}>
            <InfraMarket />
          </View>
          {renderCartItems}
        </View>
  );
};

export default HomeHeader;
