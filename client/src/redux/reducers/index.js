import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import matches from './matches'
import upcomingmatches from './upcomingmatches'
import groups from './groups'
const rootReducer = combineReducers({matches, upcomingmatches, groups, routing: routerReducer})

export default rootReducer