import { combineReducers } from 'redux';

import contactReducer from './contacts.reducer';

const rootReducer = combineReducers({
    contactReducer: contactReducer
});

export default rootReducer;
