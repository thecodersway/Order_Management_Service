import React, {useCallback, useEffect, useState} from 'react';
import {
  Alert,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import GoBack from '../../assests/svg/goBack';
import {RootStackParamList} from '../../navigation';
import {addToCartAsync} from '../../redux/services/addorUpdateCartItemservice';
import {deleteCartItem} from '../../redux/services/deleteCartItems';
import {fetchCartItemsAsync} from '../../redux/services/getCartItem';
import {AppDispatch, RootState} from '../../redux/store';
import styles from './styles';
import {Screens} from '../../constants/screen';
import EmptyCartIcon from '../../assests/svg/cart/emptyCart';
import LoadingIndicator from '../../errorAndLoading/loading';
import ErrorMessage from '../../errorAndLoading/error';

import { Global } from '../../constants/string';

const CartIndex = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [couponApplied, setCouponApplied] = useState(true);

  const dispatch = useDispatch<AppDispatch>();
  const InitialcartItem = useSelector((state: RootState) => state.getCartItems);

  const [cartItem, setCartItem] = useState(InitialcartItem);

  const couponDiscount = 500;
  const shippingCost = 500;
  const emptyCart = cartItem.items === null;
  console.log('this is the cart page', emptyCart);

  useFocusEffect(
    useCallback(() => {
      const fetchItems = async () => {
        await dispatch(fetchCartItemsAsync(1));
      };
      fetchItems();
    }, [dispatch]),
  );

  useEffect(() => {
    setCartItem(InitialcartItem);
  }, [InitialcartItem]);

  const handleQuantityChange = async (id: string, increment: boolean) => {
    const updatedItem = cartItem.items.find(item => item.id === id);
    if (!updatedItem) {
      return;
    }
    const newQuantity = increment
      ? updatedItem.quantity + 1
      : Math.max(updatedItem.quantity - 1, 1);
    const item = {
      cart_id: 1,
      product_specification_id: updatedItem?.product_specification_id,
      quantity: increment ? 1 : updatedItem.quantity > 1 ? -1 : 0,
    };
    try {
      await dispatch(addToCartAsync(item));
      setCartItem(prevCart => ({
        ...prevCart,
        items: prevCart.items.map(item =>
          item.id === id ? {...item, quantity: newQuantity} : item,
        ),
      }));
    } catch (error) {
      console.error('Error updating quantity:', error);
    }
  };

  const handleRemoveItem = async (id: string) => {
    try {
      await deleteCartItem(id);
      Alert.alert('Item removed from Cart');
      dispatch(fetchCartItemsAsync(1));
    } catch (error) {
      console.error('Error deleting cart item:', error);
    }
  };

  const navigateToBack = () => {
    navigation.goBack();
    dispatch(fetchCartItemsAsync(1));
  };

  const renderHeader = () => (
    <View style={styles.mainContainer}>
      <TouchableOpacity onPress={navigateToBack} style={styles.goBackIcon}>
        <GoBack />
      </TouchableOpacity>
      <Text style={styles.text}>Your Cart</Text>
    </View>
  );

  const renderCartImage = () => <EmptyCartIcon />;

  const renderCartItems = () => (
    <FlatList
      data={cartItem?.items}
      keyExtractor={item => item.id.toString()}
      renderItem={renderCartItem}
      ListFooterComponent={renderFooter}
    />
  );

  const renderFooter = () => (
    <>
      {!emptyCart && renderCoupan()}
      {!emptyCart && renderPriceSummary()}
    </>
  );

  const renderCoupan = useCallback(
    () => (
      <View style={styles.couponContainer}>
        <View style={styles.coupanDetails}>
          <Text style={styles.coupanName}>WELCOME20</Text>
          <Text style={styles.InnerCoupanText}>
            {couponApplied
              ? 'Coupon applied on the bill'
              : 'Apply Coupon on the bill'}
          </Text>
        </View>
        <TouchableOpacity onPress={() => setCouponApplied(!couponApplied)}>
          <Text style={styles.removeText}>
            {couponApplied ? 'REMOVE' : 'APPLY'}
          </Text>
        </TouchableOpacity>
      </View>
    ),
    [couponApplied],
  );

  const renderPriceSummary = () => (
    <View style={styles.summaryContainer}>
      <View style={styles.summaryText}>
        <Text style={styles.subTotaltext}>Sub Total</Text>
        <Text style={styles.subTotaltext}>
          ₹{' '}
          {cartItem.items !== null
            ? couponApplied
              ? calculateTotal().toLocaleString()
              : (calculateTotal() - 500).toLocaleString()
            : 0}
        </Text>
      </View>
      <View style={styles.summaryText}>
        <Text style={styles.shipingText}>Shipping</Text>
        <Text style={styles.shipingText}>
          ₹ {cartItem.items !== null ? shippingCost : 0}
        </Text>
      </View>
      <View style={styles.summaryText}>
        <Text style={styles.shipingText}>Coupon Discount</Text>
        <Text style={styles.shipingText}>
          ₹ {couponApplied ? couponDiscount : 0}
        </Text>
      </View>
      <View style={[styles.summaryText, styles.summaryTextBorder]}>
        <Text style={styles.totalAmount}>Total Amount</Text>
        <Text style={styles.totalAmount}>
          ₹ {cartItem.items !== null ? calculateTotal().toLocaleString() : 0}
        </Text>
      </View>
    </View>
  );

  const navigateToShippingAddress = () =>
    cartItem.items !== null
      ? navigation.navigate(Screens.ShippingAddress)
      : Alert.alert('No Items Added to the Cart');

  const renderCheckout = () => (
    <View style={styles.checkout}>
      <Text style={styles.payingAmount}>
        ₹ {cartItem.items !== null ? calculateTotal().toLocaleString() : 0}
      </Text>
      <TouchableOpacity
        disabled={cartItem.items === null}
        onPress={navigateToShippingAddress}
        style={[styles.checkoutButton ,cartItem.items === null && styles.disabledButton ]}>
        <Text style={styles.checkoutText}>CHECKOUT</Text>
      </TouchableOpacity>
    </View>
  );

  const renderCartItem = ({item}: {item: any}) => {
    const discountedPrice = Math.round(
      item.price - (item.price * item.discount) / 100,
    );
    return (
      <View style={styles.cartItem}>
        <View style={styles.InnerCartItem}>
          <View style={styles.imageIcon}>
            <Image source={{uri: item?.image_url}}
            // {{ uri: `data:image/png;base64,${item.image_url}` }} 
            style={styles.innerImage}
            resizeMode="contain" />
          </View>
          <View style={styles.ItemNameContainer}>
            <Text style={styles.itemName}>
              {item.name} {item.grade} - {+item.bag_size} kg
            </Text>
            <Text style={styles.itemPrice}>{Global.ruppeSymbol} {discountedPrice}</Text>
          </View>
        </View>
        <View style={styles.quantityTotal}>
          <View style={styles.quantityControl}>
            <TouchableOpacity
              style={styles.quantityButton}
              onPress={() => handleQuantityChange(item.id, false)}>
              <Text style={styles.quantityButtonText}>-</Text>
            </TouchableOpacity>
            <View style={styles.quantityshow}>
              <Text style={styles.quantityText}>{item.quantity}</Text>
            </View>
            <TouchableOpacity
              style={styles.quantityButton}
              onPress={() => handleQuantityChange(item.id, true)}>
              <Text style={styles.quantityButtonText}>+</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.itemTotal}>
            <Text style={styles.itemTotaltext}> Total </Text>
            <Text style={styles.totalItemPrice}>
              ₹ {(discountedPrice * item.quantity).toLocaleString()}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => handleRemoveItem(item.id)}
            style={styles.removeItemView}>
            <Text style={styles.removeButton}>X</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const calculateTotal = () => {
    const subtotal = cartItem.items?.reduce((sum, item) => {
      const discountedPrice = Math.round(
        item.price - (item.price * item.discount) / 100,
      );
      return sum + discountedPrice * item.quantity;
    }, 0);
    return subtotal + shippingCost - (couponApplied ? couponDiscount : 0);
  };

  return (
    <View style={styles.rootContainer}>
      {renderHeader()}
      {cartItem.loading ? (
        <LoadingIndicator />
      ) : cartItem.error ? (
        <ErrorMessage message={cartItem.error} />
      ) : (
        <>
          {!emptyCart && renderCartItems()}
          {emptyCart && renderCartImage()}
        </>
      )}
      {renderCheckout()}
    </View>
  );
};

export default CartIndex;
