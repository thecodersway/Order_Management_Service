import React from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../navigation';
import Styles from './styles';
import {useNavigation} from '@react-navigation/native';
import { Screens } from '../../../constants/screen';
import { Global } from '../../../constants/string';

interface IItem {
  id: number;
  product_name: string;
  image_url: string;
  sale: boolean;
  price: number;
  discount: number;
}

interface CartProps {
  data: IItem[];
}

const Items: React.FC<CartProps> = ({data}) => {
  const styles = Styles;

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const renderItem = ({item}: {item: IItem}) => {
    const discountedPrice = Math.round(
      item.price - (item.price * item.discount) / 100,
    );

    const navigateProductView = () =>
      navigation.navigate(Screens.ProductView, {productID: item.id});

    const renderProductDetails = () => (
      <View style={styles.textDesc}>
        <Text style={styles.text}>{item.product_name}</Text>
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
        onPress={navigateProductView}
        style={styles.topContainer}>
        <View style={styles.image}>
          <Image
              // source={{ uri: `data:image/png;base64,${item.image_url}` }}
              source={{uri: item.image_url}}
              style={styles.innerImage}
              resizeMode="contain"
          />
        </View>
        {renderProductDetails()}
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.flatlist}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default Items;
