

import React, {useState} from 'react';
import { SafeAreaView, Text, View} from 'react-native';
import Products from './product';
import SearchBar from './searchbar';
import SortFilter from './sortfilter';
import styles from './styles';
import HomeHeader from './header';

interface IItem {
  id: number;
  product_name: string;
  image_url: string;
  sale: boolean;
  price: number;
  discount: number;
}

const Homepage = () => {

  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState<IItem[]>([]);

  const renderHeaderSearch = () => (
    <>
      <View style={styles.header}>
        <HomeHeader/>
      </View>
      <View style={styles.SearchBar}>
        <SearchBar
          setSearchResults={setSearchResults}
          setIsSearching={setIsSearching}
        />
      </View>
    </>
  );

  const renderCategoryAndProductList = () => (
   <>
    {(isSearching) ? (
    (searchResults.length > 0 ) ? (
      <Products searchResults={searchResults}/>
    ) : (
      <View style={styles.noProductstyle}>
        <Text style={styles.noProductMessage}>
          No products match the search results.
        </Text>
      </View>
    )
  ) : (
      <Products />
  )}
  </>
  );
 console.log(searchResults.length);
  const renderFooter = () => (
    <View style={styles.sortFilter}>
        <SortFilter />
      </View>
  );

  return (
    <SafeAreaView style={styles.rootComponent}>
      {renderHeaderSearch()}
      {renderCategoryAndProductList()}
      {renderFooter()}
    </SafeAreaView>
  );
};

export default Homepage;
