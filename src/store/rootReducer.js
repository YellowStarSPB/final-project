import { combineReducers } from 'redux';
import { authorizationReducer } from './authorization/authorization-reducer';
import { infoAccountReducer } from './infoAccount/infoAccount-reducer';
import { searchReducer } from './search/search-reducer';

export const rootReducer = combineReducers({
    auth: authorizationReducer,
    infoAccount: infoAccountReducer,
    search: searchReducer,
});
