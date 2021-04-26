import { combineReducers } from 'redux';
import dataReducer from './dataReducer';
import newDataReducer from './newDataReducer';
import usedDataReducer from './usedDataReducer';

export default combineReducers({
    dataReducer,
    newDataReducer,
    usedDataReducer,
});
