import { createStore, combineReducers, applyMiddleware } from 'redux';
import { drawerReducer } from './drawer/reducer';
import { categoryReducer } from './category/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({ drawerReducer, categoryReducer });

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
