import { legacy_createStore as createStore, combineReducers } from 'redux';
import { useDispatch } from 'react-redux';
import { themesReducer } from './reducers/themesReducer';
import { authReducer } from './reducers/authReducer';
import { usersReducer } from './reducers/usersReducer';

export const store = createStore(
  combineReducers({
    themes: themesReducer,
    auth: authReducer,
    // users: usersReducer,
  })
);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
