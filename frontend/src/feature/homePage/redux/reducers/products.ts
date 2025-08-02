import { Reducer } from 'redux';
import { IProduct } from '../models/products';
import { IErrorActionData } from '../../../../utils/error';
import { ProductsActions, ProductsActionTypes } from '../actions/products';



interface IProductsState {
  data: IProduct[];
  isLoading: boolean;
  isSuccess: boolean;
  error?: IErrorActionData;
}

const initialState: IProductsState = {
  data: [],
  isLoading: false,
  isSuccess: false,
  error: undefined,
};

const ProductsReducer: Reducer<IProductsState, ProductsActions> = (
  state = initialState,
  action
): IProductsState => {
  switch (action.type) {
    case ProductsActionTypes.FETCH_PRODUCTS:
      return { ...state, isLoading: true, isSuccess: false };

    case ProductsActionTypes.FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        isSuccess: true,
        error: undefined,
      };

    case ProductsActionTypes.FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        isSuccess: false,
        error: action.payload,
      };

    case ProductsActionTypes.RESET_PRODUCTS:
      return initialState;

    default:
      return state;
  }
};

export default ProductsReducer;
