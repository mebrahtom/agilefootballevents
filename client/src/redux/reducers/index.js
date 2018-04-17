import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import matches from './matches'
const rootReducer = combineReducers({matches, routing: routerReducer})

export default rootReducer
