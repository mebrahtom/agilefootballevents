import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import matches from './matches'
import upcomingmatches from './upcomingmatches'
const rootReducer = combineReducers({matches, upcomingmatches, routing: routerReducer})

export default rootReducer