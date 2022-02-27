import { combineReducers } from 'redux';
import reducer from './reducer';
const rootReducer = combineReducers({
    common: reducer
});
export default rootReducer;
