import { combineReducers } from 'redux'
import memeReducer from '../reducers/memeReducer';
import authReducer from '../reducers/authRedicer';

const rootReducers = combineReducers({
    meme: memeReducer,
    auth: authReducer,
});

export default rootReducers;