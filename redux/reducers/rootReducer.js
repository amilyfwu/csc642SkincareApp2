import { combineReducers } from 'redux';
import dataReducer from './dataReducer';
import newDataReducer from './newDataReducer';

export default combineReducers({
    dataReducer,
    newDataReducer,
});
