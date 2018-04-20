import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import matches from './matches'
import upcomingmatches from './upcomingmatches'
import groups from './groups'
import groupresults from './groupresults'
import squad from './squad'
const rootReducer = combineReducers({matches, upcomingmatches, groups, groupresults, routing: routerReducer, squad})

export default rootReducer
