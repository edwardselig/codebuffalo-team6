import { combineReducers } from 'redux';
import main from './main';
import prefs from './prefs';

const rootReducer = combineReducers({
    main,
    prefs
});

export default rootReducer;
