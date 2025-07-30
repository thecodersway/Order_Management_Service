
import React, { useEffect, useState } from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation';
import { fetchProductsAsync } from '../../../redux/services/productsService';
import { AppDispatch, RootState } from '../../../redux/store';
import styles from './styles';
import { Screens } from '../../../constants/screen';
import { Global } from '../../../constants/string';
import LoadingIndicator from '../../../errorAndLoading/loading';
import ErrorMessage from '../../../errorAndLoading/error';
import Category from '../category';


interface Item {
  id: number;
  product_name: string;
  image_url: string;
  sale: boolean;
  price: number;
  discount: number;
}

interface IProductsProps {
  searchResults?: Item[];
}

const Products: React.FC<IProductsProps> = ({searchResults}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const dispatch = useDispatch<AppDispatch>();

  const {data, loading, error} = useSelector(
    (state: RootState) => state.products,
  );

  const [filteredData, setFilteredData] = useState<Item[]>(data);

  useEffect(() => {
    if (data.length === 0) {
      dispatch(fetchProductsAsync());
    }
  }, [data, dispatch]);

  // Update filtered data based on search results or original data
  useEffect(() => {
    if (searchResults && searchResults.length > 0) {
      setFilteredData(searchResults);
    } else {
      setFilteredData(data);
    }
  }, [searchResults, data]);

  const renderItem = ({item}: {item: Item}) => {
    const discountedPrice = Math.round(
      item.price - (item.price * item.discount) / 100,
    );

    const navigateToProductView = () =>
      navigation.navigate(Screens.ProductView, {productID: item.id});

    const productDetails = () => (
      <View style={styles.textDesc}>
        <Text style={styles.productName}>{item.product_name}</Text>
        <View style={styles.container}>
          <Text style={styles.actualPrice}>
            <Text style={styles.ruppeSymbol}>{Global.ruppeSymbol} </Text>
            {discountedPrice}
          </Text>
          <Text style={styles.originalPrice}>{Global.ruppeSymbol}{item.price}</Text>
          <Text style={styles.discountPercent}>
            {item.sale ? <Text>SALE</Text> : <Text>{item.discount}% OFF</Text>}
          </Text>
        </View>
      </View>
    );

    return (
      <TouchableOpacity
        onPress={navigateToProductView}
        style={styles.topContainer}>
        <View style={styles.image}>
        <Image
            source={{ uri: item.image_url }}
            style={styles.innerImage}
            resizeMode="contain"
        />
        </View>
        {productDetails()}
      </TouchableOpacity>
    );
  };

  const renderHeaderFlatlist = () => (
    (!searchResults) ? (
      <>
      <Category/>
      <Text style={styles.noProductText}>Top Deals for You</Text>
      </>
    ) : null
  );

  const renderProducts = () => (
    <>
      {loading ? (
      <LoadingIndicator/>
     ) : error ? (
       <ErrorMessage message={error}/>
     ) :
        <FlatList
          ListHeaderComponent={renderHeaderFlatlist}
          data={filteredData}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          numColumns={2}
          showsVerticalScrollIndicator={false}
        />}
    </>
  );

  return (
    <SafeAreaView style={styles.flatlist}>
      {(renderProducts())}
    </SafeAreaView>
  );
};

export default Products;
