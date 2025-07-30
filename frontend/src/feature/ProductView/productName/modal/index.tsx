/* eslint-disable no-sequences */
/* eslint-disable eol-last */
/* eslint-disable react-native/no-inline-styles */
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { RootStackParamList } from '../../../../navigation';
import styles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../../redux/store';
import { Screens } from '../../../../constants/screen';
import { Global } from '../../../../constants/string';
import { fetchCartItemsAsync } from '../../../../redux/services/getCartItem';

interface AddToCartProps {
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
 quantity:number
}
 const CartSummary :React.FC<AddToCartProps> = ({ modalVisible, setModalVisible, quantity }) => {

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const productData = useSelector((state: RootState) => state.productsDescription.productData);


  const price = productData ? Math.round(productData?.price - (productData.discount / 100 * productData.price)) : 0;
  const totalPrice = quantity * price;

    const dispatch = useDispatch<AppDispatch>();
    useFocusEffect(()=>{
    dispatch(fetchCartItemsAsync(1));
    },);


  const navigateToCart = () => (
    navigation.navigate(Screens.Cart),
    setModalVisible(!modalVisible)
  );

  const navigateToShippingAddress = () => (
    navigation.navigate(Screens.ShippingAddress),
    setModalVisible(!modalVisible)
  );

  const renderHeading = () => (
    <View style={styles.headerContainer}>
    <Text style={styles.header}>{quantity} items added to cart</Text>
    <TouchableOpacity onPress={()=>(setModalVisible(!modalVisible))}>
    <Text style={[styles.header,{color:'#686868'}]}>x</Text></TouchableOpacity>
  </View>
  );

  const renderCartDetails = () => (
    <View style={styles.itemContainer}>
        <View style={styles.image}>
        <Image
            // source={{ uri: `data:image/png;base64,${productData?.image_url}` }}
            source={{uri: productData?.image_url}}
            style={styles.innerImage}
        />
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.itemTitle}>{productData?.product_name} {productData?.grade} Grade - {productData?.net_weight} Kg</Text>
          <Text style={[styles.itemTitle,{color:'#686868'}]}>{quantity} x {Global.ruppeSymbol} {price}</Text>
        </View>
        <Text style={styles.totalPrice}>{Global.ruppeSymbol} {totalPrice}</Text>
      </View>
  );

  const renderButtoms = () => (
    <View style={styles.buttonContainer}>
        <TouchableOpacity  onPress={navigateToCart}
           style={styles.viewCartButton}>
          <Text style={[styles.buttonText,{color:'#F15927'}]}>VIEW CART</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateToShippingAddress}
         style={styles.checkoutButton}>
          <Text style={[styles.buttonText,{color:'white'}]}>CHECKOUT</Text>
        </TouchableOpacity>
      </View>
  );

  return (
    <View style={styles.rootContainer}>
    <View style={styles.container}>
      {renderHeading()}
      {renderCartDetails()}
      {renderButtoms()}
    </View>
   </View>
  );
};
export default CartSummary;