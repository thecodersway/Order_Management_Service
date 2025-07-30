import React, { useEffect} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';
import DetailsScreen from './Description/index';
import ProductName from './productName/index';
import ShortView from './shortView/index';
import styles from './styles';
import {RootStackParamList} from '../../navigation';
import {useDispatch, useSelector} from 'react-redux';
import {fetchProductDescriptionAsync} from '../../redux/services/productDescriptionService';
import {AppDispatch, RootState} from '../../redux/store';
import { Screens } from '../../constants/screen.ts';
import LoadingIndicator from '../../errorAndLoading/loading.tsx';
import ErrorMessage from '../../errorAndLoading/error.tsx';
import ProductViewHeader from './header/index';

const ProductViewIndex = () => {
  const style = styles();

  const route = useRoute<RouteProp<RootStackParamList, Screens.ProductView>>();
  const product_id = route.params.productID;

  const dispatch = useDispatch<AppDispatch>();

  const productData = useSelector(
    (state: RootState) => state.productsDescription.description,
  );

  console.log('Loggong on the productDescription',productData[0]);
  const loading = useSelector(
    (state: RootState) => state.productsDescription.loading,
  );
  const error = useSelector(
    (state: RootState) => state.productsDescription.error,
  );

  useEffect(() => {
    dispatch(fetchProductDescriptionAsync(product_id));
  }, [dispatch, product_id]);
  if (loading) {
    return <LoadingIndicator/>;
  }
  if (error) {
    return <ErrorMessage message={error}/>;
  }
  if (!productData) {
    return <Text>Product data not found.</Text>;
  }

  const renderHeader = () => (
    <View style={style.header}>
      <ProductViewHeader />
    </View>
  );

  const renderProductDetails = () => (
    <ScrollView>
      <View style={style.product}>
        <View style={style.image}>
        {productData[0]?.image_url &&
        <Image
            //  source={{ uri: `data:image/png;base64,${productData[0]?.image_url}` }}
            source={{uri: productData[0]?.image_url}}
            style={style.innerImage}
            // resizeMode="contain"
          />}
        </View>
        <View style={style.smallView}>
          <ShortView />
        </View>
      </View>
      <View style={style.aboutProduct}>
        <ProductName />
      </View>
      <View style={style.description}>
        <DetailsScreen />
      </View>
    </ScrollView>
  );

  return (
  <>
    {loading ? (
      <LoadingIndicator />
    ) : error ? (
      <ErrorMessage message={error} />
    ) : !productData ? (
      <Text>Product data not found.</Text>
    ) : (
      <SafeAreaView style={style.topContainer}>
        {renderHeader()}
        {renderProductDetails()}
      </SafeAreaView>
    )}
  </>
  );
};

export default ProductViewIndex;
