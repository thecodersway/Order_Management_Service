
import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './reducers/categoeyReducer';
import shippingReducer from './reducers/shippingAddressReducer';
import billingReducer from './reducers/billingAddressReducer';
import productsReducer from './reducers/productsReducer';
import productsByCategoryReducer from './reducers/productsByCategoryId';
import productsDescription from './reducers/productDescriptioReducer';
import addorUpdateCartItemReducer from './reducers/addorUpdateCartItem';
import getCartItemReducer from './reducers/getCartItems';
import placeOrder from './reducers/postOrderreducer';

export const store = configureStore({
  reducer: {
    category: categoryReducer,
    shipping: shippingReducer,
    billing:billingReducer,
    products:productsReducer,
    productsbyCategory:productsByCategoryReducer,
    productsDescription:productsDescription,
    addorUpdateCartItem:addorUpdateCartItemReducer,
    getCartItems:getCartItemReducer,
    placeOrder:placeOrder,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


