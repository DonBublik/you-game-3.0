import { legacy_createStore as createStore, combineReducers } from 'redux';
import { useDispatch } from 'react-redux';
import { themesReducer } from './reducers/themesReducer';
import { authReducer } from './reducers/authReducer';

export const store = createStore(
  combineReducers({
    themes: themesReducer,
    auth: authReducer,
  })
);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
