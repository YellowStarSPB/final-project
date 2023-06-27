import { combineReducers } from 'redux';
import { authorizationReducer } from './authorization/authorization-reducer';

export const rootReducer = combineReducers({
    auth: authorizationReducer,
});
