import React, {useEffect} from 'react';
import {
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {StackActions, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import StepOneIcon from '../../../assests/svg/Checkout/stepOneIcon';
import TickIcon from '../../../assests/svg/Checkout/tickIcon';
import UntickIcon from '../../../assests/svg/Checkout/untickIcon';
import GoBack from '../../../assests/svg/goBack';
import {RootStackParamList} from '../../../navigation';
import {Address} from '../../../redux/models/addressModel';
import {fetchShippingAddressesAsync} from '../../../redux/services/shippingAddressService';
import {AppDispatch, RootState} from '../../../redux/store';
import styles from './styles';
import {fetchCartItemsAsync} from '../../../redux/services/getCartItem';
import {setSelectedShippingAddress} from '../../../redux/reducers/shippingAddressReducer';
import { Screens } from '../../../constants/screen';
import LoadingIndicator from '../../../errorAndLoading/loading';
import ErrorMessage from '../../../errorAndLoading/error';

const ShippingAddress = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const dispatch = useDispatch<AppDispatch>();

  const cartItem = useSelector((state: RootState) => state.getCartItems);

  const {addresses, loading, error} = useSelector(
    (state: RootState) => state.shipping,
  );

  const selectedShippingAddress = useSelector(
    (state: RootState) => state.shipping.selectedAddress,
  );

  const shippingCost = 500;
  const couponApplied = true;
  const couponDiscount = 500;

  useEffect(() => {
    dispatch(fetchCartItemsAsync(1));
    dispatch(fetchShippingAddressesAsync());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const calculateTotal = () => {
    const subtotal = cartItem.items?.reduce((sum, item) => {
      const discountedPrice = Math.round(
        item.price - (item.price * item.discount) / 100,
      );
      return sum + discountedPrice * item.quantity;
    }, 0);
    return subtotal + shippingCost - (couponApplied ? couponDiscount : 0);
  };

  const renderAddressItem = ({item}: {item: Address}) => (
    <TouchableOpacity
      style={[
        styles.addressContainer,
        selectedShippingAddress === item.id.toString() && styles.selectedAddress,
      ]}
      onPress={() => setBillingAddress(item.id.toString())}>
      <View style={styles.addressContent}>
        <View style={styles.addressTextContainer}>
          <Text style={styles.addressLabel}>{item.label}</Text>
          <Text style={styles.addressText}>{item.address_line1}</Text>
          <Text style={styles.addressText}>
            {`${item.city}, ${item.state}, ${item.zip_code}, ${item.country}`}
          </Text>
        </View>
        {selectedShippingAddress === item.id.toString() ? <TickIcon /> : <UntickIcon />}
      </View>
    </TouchableOpacity>
  );

  const setBillingAddress = (id : string) => (
      dispatch(setSelectedShippingAddress(id))
  );

  console.log(selectedShippingAddress);

  const renderHeader = () => (
    <View style={styles.mainContainer}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.goBackIcon} >
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
        <TouchableOpacity onPress={()=>{navigation.dispatch(StackActions.pop(1));
           navigation.navigate(Screens.Cart);}}>
          <Text style={styles.showDetail}>Show Details</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.totalBill}>
        <Text style={styles.ruppeeSymbol}>₹ </Text>
        <Text style={styles.totalPrice}>
          {calculateTotal().toLocaleString()}
        </Text>
      </View>
    </View>
  );

  const renderShippinAddress = () => (
    <>
      <View style={styles.headerContainer}>
        <StepOneIcon />
        <Text style={styles.headerText}>Select a Shipping Address</Text>
      </View>
      <FlatList
        data={addresses}
        keyExtractor={item => item.id.toString()}
        renderItem={renderAddressItem}
        showsVerticalScrollIndicator={false}
      />
    </>
  );

  const renderFooter = () => (
    <View style={styles.footer}>
      <View style={styles.totalPriceContainer}>
        <Text style={styles.ruppeeSymbol}>₹ </Text>
        <Text style={styles.totalPrice}>
          {calculateTotal().toLocaleString()}
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate(Screens.BillingAddress)}
        style={[
          styles.continueButton,
          !selectedShippingAddress && styles.disabledButton,
        ]}
        disabled={!selectedShippingAddress}>
        <Text style={styles.continueButtonText}>CONTINUE</Text>
      </TouchableOpacity>
    </View>
  );
 console.log(error);
  return (
    <View style={styles.rootContainer}>
      {renderHeader()}
      {loading ? (
      <LoadingIndicator />
    ) : error ? (
      <ErrorMessage message={error} />
    ) : (
      <View style={styles.container}>
        {renderProductInfo()}
        {renderShippinAddress()}
      </View>)}
      {renderFooter()}
    </View>
  );
};

export default ShippingAddress;
