/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './styles';
import GoBack from '../../../assests/svg/goBack';
import OrderplacedIcon from '../../../assests/svg/Checkout/orderplaced';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../navigation';
import {useNavigation} from '@react-navigation/native';
import { useSelector} from 'react-redux';
import { RootState} from '../../../redux/store';

import { Global } from '../../../constants/string';


const SuccessfulOrder = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const orderSuccessState = useSelector((state: RootState) => state.placeOrder);
  const cartItem = useSelector((state: RootState) => state.getCartItems);

  console.log(orderSuccessState);

  const shippingCost = 500;
  const couponApplied = true;
  const couponDiscount = 500;




  const calculateTotal = () => {
    const subTotal = cartItem.items?.reduce((sum, item) => {
      const discountedPrice = Math.round(
        item.price - (item.price * item.discount) / 100,
      );
      return sum + discountedPrice * item.quantity;
    }, 0);

    return subTotal + shippingCost - (couponApplied ? couponDiscount : 0);
  };

  const navigateHome = () => (
    navigation.popToTop()
  );

  const renderHeader = () => (
    <View style={styles.mainContainer}>
      <TouchableOpacity onPress={navigateHome} style={styles.goBackIcon}>
        <GoBack />
      </TouchableOpacity>
      <Text style={styles.text}> </Text>
    </View>
  );

  const renderProductInfo = () => (
    <View style={styles.container}>
      <View style={styles.productContainer}>
        <View style={styles.imageIcon}>
        {cartItem.items &&
      <Image
            //  source={{ uri: `data:image/png;base64,${cartItem.items[0]?.image_url}` }}
            source={{uri: cartItem.items[0]?.image_url}}
            style={styles.innerImage}
            resizeMode="contain"
          />}
        </View>
        <View style={styles.itemDetails}>
          <Text style={styles.totalItems}>
            {cartItem.items !== null ? cartItem.items.length : 0} Items
          </Text>
          <TouchableOpacity>
            <Text style={styles.showDetail}>On Your Way!</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.totalBill}>
          <Text style={styles.ruppeeSymbol}>{Global.ruppeSymbol} </Text>
          <Text style={styles.totalPrice}>{calculateTotal().toLocaleString()}</Text>
        </View>
      </View>
    </View>
  );

  const rednerImage = () => (
    <View style={styles.imageContainer}>
      <View style={styles.innerimageContainer}>
        <OrderplacedIcon />
        <Text style={styles.appreciationText}>Thank You Siddhant!</Text>
        <Text style={styles.appreciationText}>
          Your Order number is <Text style={styles.orderNumber}>{orderSuccessState.order.latest_order_id}</Text>
        </Text>
        <Text style={styles.confirmationText}>
          We have received your order. We will send you an email once it's
          confirmed.
        </Text>
        <TouchableOpacity
          onPress={navigateHome}
          style={styles.continueShopingButtom}>
          <Text style={[{color: '#F15927'}, {fontWeight: '700'}]}>
            CONTINUE SHOPING
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.rootContainer}>
      {renderHeader()}
      {renderProductInfo()}
      {rednerImage()}
    </View>
  );
};

export default SuccessfulOrder;
