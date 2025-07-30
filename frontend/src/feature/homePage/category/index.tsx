
import React, {useEffect} from 'react';
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useDispatch, useSelector} from 'react-redux';
import Cement from '../../../assests/svg/categoriesIcon/cement';
import ConstructionChemicals from '../../../assests/svg/categoriesIcon/constructionChemicals';
import Steel from '../../../assests/svg/categoriesIcon/steel';
import Walling from '../../../assests/svg/categoriesIcon/walling';
import useStyle from './styles';
import {fetchCategoriesAsync} from '../../../redux/services/categoryService';
import {AppDispatch, RootState} from '../../../redux/store';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../../navigation';
import { Screens } from '../../../constants/screen';
import LoadingIndicator from '../../../errorAndLoading/loading';
import ErrorMessage from '../../../errorAndLoading/error';


const Category: React.FC = () => {
  const styles = useStyle();

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const {
    items: categories,
    loading,
    error,
  } = useSelector((state: RootState) => state.category);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchCategoriesAsync());
  }, [dispatch]);

  const iconMapping: {[key: number]: React.FC<React.SVGProps<SVGSVGElement>>} =
    {
      1: Cement,
      2: Steel,
      3: ConstructionChemicals,
      4: Walling,
    };

  const renderItem = ({item}: {item: {id: number; name: string;}}) => {
    const IconComponent = iconMapping[item.id];

    const navigateToProductList = () =>
      navigation.navigate(Screens.ProductList, {categoryID: item.id});
    return (
      <TouchableOpacity
        onPress={navigateToProductList}
        style={styles.rootComponent}>
        {IconComponent && (
          <View style={styles.iconPadding}>
            <IconComponent />
          </View>
        )}
        <Text style={styles.text} numberOfLines={2}>
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };
  const sortedCategories = categories ? [...categories].sort((a, b) => a.id - b.id) : [];
  return (
    loading ? (
      <LoadingIndicator />
    ) : error ? (
      <ErrorMessage message={error} />
    ) : (
      <View style={styles.flatlist}>
        <FlatList
          data={sortedCategories}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          scrollEnabled={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    )
  );
};

export default Category;
