import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Cart from '../../../assests/svg/cart';
import GoBack from '../../../assests/svg/goBack';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../navigation';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {RootState} from '../../../redux/store';
import { Screens } from '../../../constants/screen';
import styles from './styles';



interface IItem {
  category_name: string;
  total_products: number;
}

interface CartProps {
  data: IItem;
}
const ProductListHeader: React.FC<CartProps> = ({data}) => {
  // const styles = UseStyles();
  // console.log("header data",data)

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const navigateToCart = () => navigation.navigate(Screens.Cart);

  const cartItem = useSelector((state: RootState) => state.getCartItems);

  const renderHeader = () => (
    <View style={styles.headingstyle}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.goBackIcon}>
        <GoBack />
      </TouchableOpacity>
      <View style={styles.categoryItems}>
        <Text style={styles.categoryText} numberOfLines={1}>
          {data.category_name}
        </Text>
        <Text style={styles.categoryNumber}>{data.total_products} items</Text>
      </View>
    </View>
  );

  const renderCartItems = () => (
    <TouchableOpacity onPress={navigateToCart} style={styles.carttypo}>
      <View style={styles.cartstyle}>
        <Cart />
      </View>
      <View style={styles.typo}>
        <Text style={styles.cartText}>({cartItem.items !== null ? cartItem.items.length : 0})</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={[styles.rootComponent]}>
      <View style={styles.headingCart}>
        {renderHeader()}
        {renderCartItems()}
      </View>
    </View>
  );
};

export default ProductListHeader;
