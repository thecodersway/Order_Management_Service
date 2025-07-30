
import React, {FC, useEffect, useState} from 'react';
import { Alert, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import RatingIcon from '../../../assests/svg/star';
import {AppDispatch, RootState} from '../../../redux/store';
import QuantitySelector from './addtoCart';
import styles from './styles';
import { Global } from '../../../constants/string';
import { setProductData } from '../../../redux/reducers/productDescriptioReducer';

const ProductName: FC = () => {
  const style = styles();

  const allProductData = useSelector(
    (state: RootState) => state.productsDescription.description,
  );
  const productData = useSelector(
    (state: RootState) => state.productsDescription.productData);


  const [selectedCategories, setSelectedCategories] = useState<{
    [key: string]: string;
  }>({
    Grade:allProductData[0]?.grade,
    BagSize:Number(allProductData[0]?.net_weight).toString() + ' Kg',
  });

  const handleCategorySelect = (key: string, category: string) => {
    setSelectedCategories(prev => ({
      ...prev,
      [key]: category,
    }));
  };

  const dispatch = useDispatch<AppDispatch>();

  const filterProduct = () => {
    if (!allProductData || allProductData.length === 0) {
      return;
    }
    const filteredProduct = allProductData.find(
      product =>
        product.grade === selectedCategories.Grade &&
        (product.net_weight === parseInt(selectedCategories.BagSize, 10))
    );

    if (filteredProduct) {
      dispatch(setProductData(filteredProduct));
    }
    else{
      Alert.alert('Product Out of Stock');
      if(productData)
      { setSelectedCategories({
        Grade:allProductData[0].grade,
        BagSize:Number(allProductData[0].net_weight).toString() + ' Kg',
      });}
    }
  };

  useEffect(() => {
    filterProduct();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCategories]);

  const productSpecs: {[key: string]: string[]} = {
    Grade: ['PPC', 'OPC 33', 'OPC 43', 'OPC 53'],
    BagSize: ['50 Kg', '100 Kg'],
  };

  const originalPrice = productData
    ? Math.round(
        productData?.price - (productData.discount / 100) * productData.price,
      )
    : 0;

  if (!productData) {
    return <Text>Loading product data...</Text>;
  }

  const renderProductInfo = () => (
    <View style={style.productName}>
      <View style={style.id}>
        <View
          style={style.skuIdBrandName}>
          <Text style={style.skuId}>SKU ID</Text>
          <Text style={style.brandName}>{productData.sku_id}</Text>
        </View>
        <View
          style={style.skuIdBrandName}>
          <Text style={style.skuId}>Brand</Text>
          <Text style={style.brandName}>{productData.brand}</Text>
        </View>
      </View>
      <View style={style.name}>
        <Text style={style.nameOfproduct}>{productData.product_name}</Text>
      </View>
      <View style={style.rating}>
        <View style={style.ratingIcon}>
          <RatingIcon />
          <RatingIcon />
          <RatingIcon />
          <RatingIcon />
          <RatingIcon />
        </View>
        <View>
          <Text style={style.reviews}><Text style={style.ratingNumber}> 5 </Text>(22 Reviews)</Text>
        </View>
        <TouchableOpacity>
          <Text style={style.writeReview}>
            WRITE A REVIEW
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderPriceDetails = () => (
    <View style={style.price}>
      <Text style={style.rupeeSymbol}>{Global.ruppeSymbol}</Text>
      <Text style={style.actualPrice}>{originalPrice}</Text>
      <Text style={style.originalPrice}>{Global.ruppeSymbol}{productData.price}</Text>
      <Text style={style.discountPercent}>
        {productData.sale ? 'SALE' : `${productData.discount}% OFF`}
      </Text>
    </View>
  );

  const renderKeyValuePair = () => {
    return Object.entries(productSpecs).map(([element, categories]) => (
      <View key={element} style={style.elementContainer}>
        <View style={style.specsContainer}>
          <Text style={style.elementText}>{element}</Text>
        </View>
        <View style={style.specsTypeTopContainer}>
          {categories.map((category, index) => (
            <TouchableOpacity
              key={index}
              style={[
                style.specsTypesContainer,
                  selectedCategories[element] === category ? style.selectedCategory : style.defaultCategory,
              ]}
              onPress={() => handleCategorySelect(element, category)}>
              <Text style={style.categoryText}>{category}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    ));
  };

  const renderStockInfo = () => (
    <View style={style.stockContainer}>
      <View style={style.row}>
        <View style={style.item}>
          <Text style={style.skuIdBrandName}>In Stock</Text>
          <Text style={style.quantity}>{productData.stocks}</Text>
        </View>
        <View style={style.item}>
          <Text style={style.skuIdBrandName}>Min Order Qty</Text>
          <Text style={style.quantity}>{productData.min_order_quantity}</Text>
        </View>
        <View style={style.item}>
          <Text style={style.skuIdBrandName}>Max Order Qty</Text>
          <Text style={style.quantity}>{productData.max_order_quantity}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <>
      {renderProductInfo()}
      {renderPriceDetails()}
       <View style={style.specifications}>
      {renderKeyValuePair()}
      </View>
      {renderStockInfo()}
      <QuantitySelector />
      </>
  );
};

export default ProductName;
