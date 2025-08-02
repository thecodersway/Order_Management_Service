import { ActionsObservable } from 'redux-observable';
import { from, of } from 'rxjs';
import { filter, map, mergeMap, catchError } from 'rxjs/operators';
import { isOfType } from 'typesafe-actions';

import {
  fetchProductsSuccess,
  fetchProductsFailure,
  ProductsActionTypes,
  ProductsActions,
} from '../actions/products';
import getProductsService from '../services/getProducts';
import { processServerObject } from '../../../../utils/dataMappers';

const ProductsEpic = (action$: ActionsObservable<ProductsActions>) =>
  action$.pipe(
    filter(isOfType(ProductsActionTypes.FETCH_PRODUCTS)),
    mergeMap(() => {
      return from(getProductsService()).pipe(
        map((response) => fetchProductsSuccess(processServerObject(response.data.data ?? []))),
        catchError((error: any) => {
          return of(
            fetchProductsFailure({
              errorCode: error.networkError?.statusCode ?? 500,
              errorMessage: error.networkError?.result?.error_message ?? 'Unknown error',
              callBack: error.callBack,
            }),
          );
        }),
      );
    }),
  );

export default ProductsEpic;


