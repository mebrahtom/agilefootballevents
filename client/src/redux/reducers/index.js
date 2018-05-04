import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import matches from './matches'
import upcomingmatches from './upcomingmatches'
import groups from './groups'
import groupresults from './groupresults'
import squad from './squad'
import countries from './countries'
import player from './player'
import matchesteam from './matchesteam'
import upcomingmatchesteam from './upcomingmatchesteam'
import countryinfo from './countryinfo'
import locations from './locations'
import tablesize from './tablesize'
const rootReducer = combineReducers({tablesize, locations, matches, upcomingmatches, groups, groupresults, routing: routerReducer, squad, countries, player, upcomingmatchesteam, matchesteam, countryinfo })

export default rootReducer
