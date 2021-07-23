import  { combineReducers } from 'redux';

import blogsReducer from "./blogs"

const rootReducer = combineReducers({
    blogsReducer
})
export default rootReducer;