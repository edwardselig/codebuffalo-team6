import { combineReducers } from 'redux';
import main from './main';
import repeat from './repeat';

const rootReducer = combineReducers({
    main,
    repeat
});

export default rootReducer;
