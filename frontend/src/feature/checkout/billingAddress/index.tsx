import React, {useEffect} from 'react';
import {
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {StackActions, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useDispatch, useSelector} from 'react-redux';
import StepTwoIcon from '../../../assests/svg/Checkout/steptwoIcon';
import TickIcon from '../../../assests/svg/Checkout/tickIcon';
import UntickIcon from '../../../assests/svg/Checkout/untickIcon';
import GoBack from '../../../assests/svg/goBack';
import {RootStackParamList} from '../../../navigation';
import {fetchBillingAddressesAsync} from '../../../redux/services/billingAddressService';
import {AppDispatch, RootState} from '../../../redux/store';
import styles from './styles';
import { setSelectedBillingAddress } from '../../../redux/reducers/billingAddressReducer';
import { Screens } from '../../../constants/screen';
import LoadingIndicator from '../../../errorAndLoading/loading';
import ErrorMessage from '../../../errorAndLoading/error';
import { Global } from '../../../constants/string';

const BillingAddress = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const cartItem = useSelector((state: RootState) => state.getCartItems);
  const {addresses, loading, error} = useSelector((state: RootState) => state.billing);
  const selectedBillingAddress = useSelector(
    (state: RootState) => state.billing.selectedAddress,
  );

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchBillingAddressesAsync());
  }, [dispatch]);

  const shippingCost = 500;
  const couponApplied = true;
  const couponDiscount = 500;


  const renderHeader = () => (
    <View style={styles.mainContainer}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.goBackIcon} >
        <GoBack />
      </TouchableOpacity>
      <Text style={styles.text}>Checkout</Text>
    </View>
  );

  const calculateTotal = () => {
    const subTotal = cartItem.items?.reduce((sum, item) => {
      const discountedPrice = Math.round(
        item.price - (item.price * item.discount) / 100,
      );
      return sum + discountedPrice * item.quantity;
    }, 0);

    return subTotal + shippingCost - (couponApplied ? couponDiscount : 0);
  };



  const renderAddressItem = ({
    item,
  }: {
    item: {
      id: any;
      address_type: string;
      city: string;
      state: string;
      zip_code: string;
      country: string;
      created_at: string;
      updated_at: string;
      label: string;
      address_line1: string;
    };
  }) => (
    <TouchableOpacity
      style={[
        styles.addressContainer,
        selectedBillingAddress === item.id && styles.selectedAddress,
      ]}
      onPress={() => setBillingAddress(item.id)}>
      <View style={styles.addressContent}>
        <View style={styles.addressTextContainer}>
          <Text style={styles.addressLabel}>{item.label}</Text>
          <Text style={styles.addressText}>{item.address_line1}</Text>
          <Text style={styles.addressText}>
            {`${item.city}, ${item.state}, ${item.zip_code}, ${item.country}`}
          </Text>
        </View>
        {selectedBillingAddress === item.id ? <TickIcon /> : <UntickIcon />}
      </View>
    </TouchableOpacity>
  );

  const setBillingAddress = (id : string) => (
    dispatch(setSelectedBillingAddress(id))
);

  const renderItemsInfo = () => (
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
        <TouchableOpacity onPress={()=>{navigation.dispatch(StackActions.pop(2));
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

  const renderBillingAddress = () => (
    <>
      <View style={styles.headerContainer}>
        <StepTwoIcon />
        <Text style={styles.headerText}>Select a Billing Address</Text>
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
        <Text style={styles.totalPrice}>{calculateTotal().toLocaleString()}</Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate(Screens.PaymentMethod)}
        style={[
          styles.continueButton,
          !selectedBillingAddress && styles.disabledButton,
        ]}
        disabled={!selectedBillingAddress}>
        <Text style={styles.continueButtonText}>CONTINUE</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.rootContainer}>
      {renderHeader()}
      {loading ? (
      <LoadingIndicator />
    ) : error ? (
      <ErrorMessage message={error} />
    ) : (
      <View style={styles.container}>
        {renderItemsInfo()}
        {renderBillingAddress()}
      </View>)}
      {renderFooter()}
    </View>
  );
};

export default BillingAddress;
