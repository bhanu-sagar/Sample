import { createStore, combineReducers } from 'redux';
import mainReducer from '../reducers/MainReducer/MainReducer'
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
main:mainReducer
})

const store = createStore(
    rootReducer, applyMiddleware(thunk)
)

export default store;