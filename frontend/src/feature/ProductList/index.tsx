
import { RouteProp, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootStackParamList } from '../../navigation';
import { resetProducts } from '../../redux/reducers/productsByCategoryId';
import { fetchProductsByCategoryAsync } from '../../redux/services/productsByCategoryId';
import { AppDispatch, RootState } from '../../redux/store';
import SearchBar from '../homePage/searchbar';
import SortFilter from '../homePage/sortfilter';
import Items from './Items';
import styles from './style';
import { Screens } from '../../constants/screen';
import LoadingIndicator from '../../errorAndLoading/loading';
import ErrorMessage from '../../errorAndLoading/error';
import ProductListHeader from './header';

interface IProduct {
  id: number;
  product_name: string;
  image_url: string;
  sale: boolean;
  price: number;
  discount: number;
  category_name: string;
  total_products: number;
  category_id: number;
}

const ProductListCart = () => {

  const route = useRoute<RouteProp<RootStackParamList, Screens.ProductList>>();
  const categoryID = route.params.categoryID;

  const dispatch = useDispatch<AppDispatch>();

  // console.log(categoryID);
  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState<IProduct[]>([]);


  const filteredSearchResults = searchResults.filter(
    (product) => product.category_id === categoryID
  );

  const {data, loading, error} = useSelector((state : RootState) => state.productsbyCategory);


  useEffect(() => {
    dispatch(resetProducts());
    dispatch(fetchProductsByCategoryAsync(categoryID));
  }, [categoryID, dispatch]);

  if (loading) {
    return <LoadingIndicator/>;
  }

  if (error) {
    return (
      <ErrorMessage message={error}/>
    );
  }

  const renderHeader = () => (
    <View style={styles.header}>
        <ProductListHeader
          data={data[0] || { category_name: 'Products', total_products: 0 }}
        />
      </View>
  );

  const renderSearchBar = () => (
    <View style={styles.SearchBar}>
        <SearchBar setSearchResults={setSearchResults} setIsSearching={setIsSearching}/>
      </View>
  );

  const renderProductItems = () => (
    <View style={styles.productItem}>
        {isSearching ? (
          filteredSearchResults.length > 0 ? (
            <Items data={filteredSearchResults} />
          ) : (
            // eslint-disable-next-line react-native/no-inline-styles
            <Text style={{ textAlign: 'center', marginTop: 20 }}>Products not available for now.</Text>
          )
        ) : (
          <Items  data={data}/>
        )}
      </View>
  );

  const renderFooter = () =>(
    <View style={styles.sortFilter}>
    <SortFilter />
  </View>
  );

  return (
    <SafeAreaView style={styles.rootComponent}>
      {renderHeader()}
      {renderSearchBar()}
      {renderProductItems()}
      {renderFooter()}
      </SafeAreaView>
  );
};

export default ProductListCart;
