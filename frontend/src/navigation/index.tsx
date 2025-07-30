
import React from 'react';

//screens
import ProductListCart from '../feature/ProductList';
import ProductDescription from '../feature/ProductView';
import CartIndex from '../feature/cart';
import Homepage from '../feature/homePage';

//Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator}  from '@react-navigation/native-stack';
import ShippingAddress from '../feature/checkout/shippingAdrdess';
import BillingAddress from '../feature/checkout/billingAddress';
import SuccessfulOrder from '../feature/checkout/successfulOrder';
import PaymentMethod from '../feature/checkout/PaymentMethod';
import { Screens } from '../constants/screen';

export type RootStackParamList={
    [Screens.Home]: undefined;
    [Screens.ProductList]: {categoryID:number};
    [Screens.ProductView]:{productID:number};
    [Screens.Cart]:undefined;
    [Screens.Checkout]:undefined;
    [Screens.ShippingAddress]:undefined;
    [Screens.BillingAddress]:undefined;
    [Screens.PaymentMethod]:undefined;
    [Screens.SuccessfulOrder]:undefined;

}
const RootNavigation = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={Screens.Home}>
         <Stack.Screen name={Screens.Home} component={Homepage} options={{headerShown:false}}/>
         <Stack.Screen name={Screens.ProductList} component={ProductListCart} options={{headerShown:false}}/>
         <Stack.Screen name={Screens.ProductView} component={ProductDescription} options={{headerShown:false}}/>
         <Stack.Screen name={Screens.Cart} component={CartIndex} options={{headerShown:false}}/>
         <Stack.Screen name={Screens.ShippingAddress} component={ShippingAddress} options={{headerShown:false}}/>
         <Stack.Screen name={Screens.BillingAddress} component={BillingAddress} options={{headerShown:false}}/>
         <Stack.Screen name={Screens.PaymentMethod} component={PaymentMethod} options={{headerShown:false}}/>
         <Stack.Screen name={Screens.SuccessfulOrder} component={SuccessfulOrder} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default RootNavigation;
