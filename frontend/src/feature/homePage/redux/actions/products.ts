import { ActionType, createAction } from 'typesafe-actions';
import { IErrorActionData } from '../../../../utils/error';
import { IProduct } from '../models/products';


export enum ProductsActionTypes {
  FETCH_PRODUCTS = 'FETCH_PRODUCTS',
  FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS',
  FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE',
  RESET_PRODUCTS = 'RESET_PRODUCTS',
}

// If in future you want to filter/search products, define this properly
export interface IFetchProductsPayload {
  search?: string;
}

export const fetchProducts = createAction(ProductsActionTypes.FETCH_PRODUCTS)<IFetchProductsPayload | undefined>();
export const fetchProductsSuccess = createAction(ProductsActionTypes.FETCH_PRODUCTS_SUCCESS)<IProduct[]>();
export const fetchProductsFailure = createAction(ProductsActionTypes.FETCH_PRODUCTS_FAILURE)<IErrorActionData>();
export const resetProducts = createAction(ProductsActionTypes.RESET_PRODUCTS)();

// Action Types
export type FetchProductsAction = ActionType<typeof fetchProducts>;
type FetchProductsSuccessAction = ActionType<typeof fetchProductsSuccess>;
type FetchProductsFailureAction = ActionType<typeof fetchProductsFailure>;
type ResetProductsAction = ActionType<typeof resetProducts>;

export type ProductsActions =
  | FetchProductsAction
  | FetchProductsSuccessAction
  | FetchProductsFailureAction
  | ResetProductsAction;

