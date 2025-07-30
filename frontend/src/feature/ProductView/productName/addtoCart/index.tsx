
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput, Modal, Alert} from 'react-native';
import styles from './styles';
// import FavouriteIcon from '../../../../assests/svg/favouriteIcon';
import CartSummary from '../modal';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../../redux/store';
import { addToCartAsync } from '../../../../redux/services/addorUpdateCartItemservice';
import { CartItem } from '../../../../redux/models/cartItemModel';
import { Global } from '../../../../constants/string';
import FavFilledIcon from '../../../../assests/svg/favFilledIcon';
import FavouriteIcon from '../../../../assests/svg/favouriteIcon';

const QuantitySelector = () => {

  const dispatch = useDispatch<AppDispatch>();

  const productData = useSelector((state: RootState) => state.productsDescription.productData);


  const price = productData ? Math.round(productData?.price - (productData.discount / 100 * productData.price)) : 0;

  const [quantity, setQuantity] = useState<number>(productData?.min_order_quantity ?? 1);
  const [pricePerItem, setPricePerItem] = useState<number>(price);
  const [textInput, setTextInput] = useState(productData?.min_order_quantity.toString());
  const [icon, setIcon] = useState<boolean>(false);

  const totalValue = quantity * pricePerItem;

  useEffect(() => {
    if (productData) {
      setQuantity(productData.min_order_quantity);
      setPricePerItem(price);
      setTextInput(productData.min_order_quantity.toString());
    }
  }, [price, productData]);

  const handleIncrement = () => {
    if (productData && quantity < productData.max_order_quantity) {
      const newQuantity = quantity + 1;
      setQuantity(newQuantity);
      setTextInput(newQuantity.toString());
    }
  };

  const handleDecrement = () => {
    if (productData && quantity > productData.min_order_quantity) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      setTextInput(newQuantity.toString());
    }
  };

  const [modalVisible, setModalVisible] = useState(false);

  if (!productData) {
    return <Text>Loading product data...</Text>;
  }

  const handleAddToCart = () => {
    const item: CartItem = {
      cart_id: 1,
      product_specification_id: productData.id,
      quantity: Number(textInput),
    };
    // console.log('Dispatching item to cart:', item);
    dispatch(addToCartAsync(item));
  };


  const renderQuantityContainer = () => (
    <View style={styles.quantityContainer}>
    <Text style={styles.quantityLabel}>Quantity</Text>
    <View style={styles.quantityControls}>
      <TouchableOpacity style={styles.button} onPress={handleDecrement}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
      <TextInput
          style={styles.quantityValue}
          value={textInput}
          onChangeText={(text) => {
            setTextInput(text);
          }}
          onBlur={() => {
            const number = Number(textInput);
            if ( !isNaN(number) &&
            Number.isInteger(number) && number <= productData.max_order_quantity && number >= productData.min_order_quantity) {
              setQuantity(number);
            } else {
              Alert.alert(`Please enter a valid number between ${productData.min_order_quantity} and ${productData.max_order_quantity}`);
              setTextInput(productData.min_order_quantity.toString());
            }
          }}
        />
      <TouchableOpacity style={styles.button} onPress={handleIncrement}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.totalValueContainer}>
      <Text style={styles.totalLabel}>Total Value</Text>
      <Text style={styles.totalValue}>{Global.ruppeSymbol} {totalValue.toLocaleString()}</Text>
    </View>
  </View>
  );

  const checkCartQuantity = () => {
    if (Number(textInput) >= productData.min_order_quantity && Number(textInput) <= productData.max_order_quantity &&Number.isInteger(Number(textInput)) ) {
      handleAddToCart();
      setModalVisible(!modalVisible);
    }
  };

  const renderaddToCartButtom = () => (

    <View style={styles.addToCartContainer}>
        <TouchableOpacity onPress={() => {checkCartQuantity()} } style={styles.addToCartButton}>
          <Text style={styles.addToCartText}>ADD TO CART</Text>
        </TouchableOpacity>
        <Modal visible={modalVisible} transparent onRequestClose={() => setModalVisible(!modalVisible)} animationType="fade">
          <CartSummary quantity={quantity} modalVisible={modalVisible} setModalVisible={setModalVisible} />
        </Modal>
        <TouchableOpacity onPress={()=>setIcon(!icon)}>
        {icon ? <FavFilledIcon /> : <FavouriteIcon/>}
        </TouchableOpacity>
      </View>
  );

  return (
    <View style={styles.container}>
      {renderQuantityContainer()}
      {renderaddToCartButtom()}
    </View>
  );
};

export default QuantitySelector;

