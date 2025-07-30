/* eslint-disable react-native/no-inline-styles */

import * as React from 'react';
import { Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import styles from './styles';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
  const Tab = createMaterialTopTabNavigator();
  const WarrantyScreen: React.FC = () => {
    return (
      <View style={styles.container}>
        <Text>Warranty Content</Text>
      </View>
    );
  };

  const ReturnsScreen: React.FC = () => {
    return (
      <View style={styles.container}>
        <Text>Returns Content</Text>
      </View>
    );
  };

  const DetailsScreen: React.FC = () => {
    const productDataa = useSelector((state: RootState) => state.productsDescription.description);

    const productData = productDataa[0];

    return (
      <View style={styles.container}>
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>{productData?.description}</Text>
        </View>
        <View style={styles.specsContainer}>
          <Text style={styles.specTitle}>Package Dimensions</Text>
          <Text style={styles.specValue}>{productData?.dimensions}</Text>
        </View>
        <View style={styles.specsContainer}>
          <Text style={styles.specTitle}>Weight</Text>
          <Text style={styles.specValue}>{productData?.net_weight} Kgs</Text>
        </View>
        <View style={styles.specsContainer}>
          <Text style={styles.specTitle}>Date First Available</Text>
          <Text style={styles.specValue}>20 JAN 2003</Text>
        </View>
        <View style={styles.specsContainer}>
          <Text style={styles.specTitle}>Country of Origin</Text>
          <Text style={styles.specValue}>{productData?.country_of_origin}</Text>
        </View>
      </View>
    );
  };

  const DetailsNavigator: React.FC = () => {
    return (
      <Tab.Navigator
        style={{ height: 350 }}
        initialRouteName="Details"
        screenOptions={{
          tabBarStyle: { backgroundColor: 'white' },
          tabBarActiveTintColor: '#F15927',
          tabBarInactiveTintColor: 'gray',
          tabBarLabelStyle: { fontSize: 16, fontWeight: 'bold' },
          tabBarIndicatorStyle: { backgroundColor: '#F15927' },
        }}
      >
        <Tab.Screen
          name="Details"
          component={DetailsScreen}
        />
        <Tab.Screen name="Warranty" component={WarrantyScreen} />
        <Tab.Screen name="Returns" component={ReturnsScreen} />
      </Tab.Navigator>
    );
  };
  export default DetailsNavigator;


