
import React from 'react'
//  import Index from './src/feature/homePage'
// import ProductListIndex from './src/feature/ProductList'
// import ProductListIndex from './src/feature/ProductList'
//  import ProductViewIndex from './src/feature/ProductView'
// import SortFilterPage from './src/feature/sortFilter'
// import Homepage from './src/feature/homePage'
//import SortFilterPage from './src/feature/sortFilter'
//import ProductListIndex from './src/feature/ProductList'
import RootNavigation from './src/navigation'
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

// import SuccessfulOrder from './src/feature/checkout/successfulOrder';
// import BillingAddress from './src/feature/checkout/billingAddress';
// import CartIndex from './src/feature/cart';
// import { Text } from 'react-native';
// import CartSummary from './src/feature/ProductView/productName/modal';
// import CheckoutIndex from './src/feature/checkout';
// import ShippingAddress from './src/feature/checkout/shippingAdrdess';
// import BillingAddress from './src/feature/checkout/billingAddress';
// import { Text,View } from 'react-native';
// import Homepage from './src/feature/homePage';
// import ProductViewIndex from './src/feature/ProductView';
// import PlaceOrder from './src/feature/checkout/placeOrder';
// import SuccessfulOrder from './src/feature/checkout/successfulOrder';
// import Homepage from './src/feature/homePage'
// import ProductViewIndex from './src/feature/ProductView'
// import ProductListCart from './src/feature/ProductList'
// import Cart from './src/feature/cart'
// import SortFilter from './src/feature/homePage/sortfilter'
// import { Text } from 'react-native'
import Live from './src/feature/liveNotification/livenotification';


const App = () => {
  return(
    // <Provider store={store}>
    // <RootNavigation/>
    // </Provider>
    <Provider store={store}>
      <Live />
    </Provider>
  )
}

export default App;
// .navigate('screen',{parasnfkjnasd})
// .navigate("tab",{screen:"sfdbasj",params:{asjbd}}
// )
// <div className="getrout"></div>dnsn asparams as componentprams
// interface