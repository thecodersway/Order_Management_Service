/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Alert, Image, Text, TouchableOpacity, View} from 'react-native';
import FalsePaymentOption from '../../../assests/svg/Checkout/falsePaymentOption';
import StepThreeIcon from '../../../assests/svg/Checkout/stepThreeIcon';
import TruePaymentOption from '../../../assests/svg/Checkout/truePaymentOption';
import GoBack from '../../../assests/svg/goBack';
import styles from './styles';
import {StackActions, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../navigation';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../../redux/store';
import { createOrderAsync } from '../../../redux/services/postOrderService';
import { Order } from '../../../redux/models/postOrder';
import { Screens } from '../../../constants/screen';
import { Global } from '../../../constants/string';

const PaymentMethod = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [selectedPayment, setSelectedPayment] = useState<string | null>(null);

  const dispatch = useDispatch<AppDispatch>();

  const cartItem = useSelector((state: RootState) => state.getCartItems);
  const selectedShippingAddress = useSelector((state: RootState) => state.shipping.selectedAddress);
  const selectedBillingAddress = useSelector((state: RootState) => state.billing.selectedAddress);
  const { error } = useSelector((state: RootState) => state.placeOrder);


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

  const renderHeader = () => (
    <View style={styles.mainContainer}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.goBackIcon}>
        <GoBack />
      </TouchableOpacity>
      <Text style={styles.text}>Checkout</Text>
    </View>
  );

  const renderProductInfo = () => (
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
        <TouchableOpacity onPress={()=>{navigation.dispatch(StackActions.pop(3));
           navigation.navigate(Screens.Cart);}}>
          <Text style={styles.showDetail}>Show Details</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.totalBill}>
        <Text style={styles.ruppeeSymbol}>{Global.ruppeSymbol} </Text>
        <Text style={styles.totalPrice}>{calculateTotal().toLocaleString()}</Text>
      </View>
    </View>
  );

  const renderPaymentsOptions = () => (
    <>
      <View style={styles.headerContainer}>
        <StepThreeIcon />
        <Text style={styles.headerText}>Select a Payment Mode</Text>
      </View>

      <TouchableOpacity
        style={[
          styles.addressContainer,
          selectedPayment === 'Credit' && styles.selectedAddress,
        ]}
        onPress={() => setSelectedPayment('Credit')}>
        <View style={styles.addressContent}>
          {selectedPayment === 'Credit' ? (
            <TruePaymentOption />
          ) : (
            <FalsePaymentOption />
          )}
          <View style={styles.addressTextContainer}>
            <Text style={styles.addressLabel}>Credit</Text>
          </View>
          <View style={{alignItems: 'flex-end'}}>
            <Text>Available Credit</Text>
            <Text>₹ 78767</Text>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.addressContainer,
          selectedPayment === 'Cash on Delivery' && styles.selectedAddress,
        ]}
        onPress={() => setSelectedPayment('Cash on Delivery')}>
        <View style={styles.addressContent}>
          {selectedPayment === 'Cash on Delivery' ? (
            <TruePaymentOption />
          ) : (
            <FalsePaymentOption />
          )}
          <View style={styles.addressTextContainer}>
            <Text style={styles.addressLabel}>Cash on Delivery</Text>
          </View>
        </View>
      </TouchableOpacity>
    </>
  );

    const handlePlaceOrder = () => {
      const orderData :Order = {
        cart_id: 1,
        user_id: 1,
        payment_method: selectedPayment?.toString(),
        shipping_address: selectedShippingAddress?.toString(),
        billing_address: selectedBillingAddress?.toString(),
        total_price: calculateTotal(),
      };
      dispatch(createOrderAsync(orderData));
      if(!error){
      navigation.navigate(Screens.SuccessfulOrder);
      }
      if(error){
        Alert.alert('Order not Placed');
      }
    };


  const renderFooter = () => (
    <View style={styles.footer}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text style={styles.ruppeeSymbol}>₹ </Text>
        <Text style={styles.totalPrice}>{calculateTotal().toLocaleString()}</Text>
      </View>
      <TouchableOpacity
        onPress={handlePlaceOrder}
        style={[
          styles.continueButton,
          !selectedPayment && styles.disabledButton,
        ]}
        disabled={!selectedPayment}>
        <Text style={styles.continueButtonText}>PLACE ORDER</Text>
      </TouchableOpacity>
    </View>
  );
  return (
    <View style={styles.rootContainer}>
      {renderHeader()}
      <View style={styles.container}>
        {renderProductInfo()}
        {renderPaymentsOptions()}
      </View>
      {renderFooter()}
    </View>
  );
};

export default PaymentMethod;
