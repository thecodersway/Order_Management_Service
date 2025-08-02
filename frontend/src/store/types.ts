import { Action } from 'redux';
import { Epic } from 'redux-observable';
import { Services } from '../services';

export interface RootState {
  // Define your root state shape here
  // Example:
  // products: ProductsState;
}

export interface Dependencies {
  api: Services;
}

export type RootEpic = Epic<RootAction, RootAction, RootState, Dependencies>;

export interface RootAction extends Action<string> {
  payload?: any;
  error?: boolean;
  meta?: any;
}

declare module 'typesafe-actions' {
  interface Types {
    RootAction: RootAction;
  }
}
