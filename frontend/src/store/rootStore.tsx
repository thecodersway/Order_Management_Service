import { TypedUseSelectorHook, useSelector } from 'react-redux';

import { compose, applyMiddleware, createStore } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

export type RootState = ReturnType<typeof rootReducer>;

const epicMiddleware = createEpicMiddleware<rootAction, rootAction, rootState>();

const configureStore = () => {
  const middlewares = [epicMiddleware];
  const enhancer = compose(applyMiddleware(...middlewares));
  const store = createStore(rootReducer, enhancer);
  return store;
};

const RootStore = configureStore();
epicMiddleware.run(rootEpic);
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
export default RootStore;