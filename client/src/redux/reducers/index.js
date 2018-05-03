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
import admin from './admin'
import playerstats from './playerstats'
import teamstats from './teamstats'

const rootReducer = combineReducers({matches, upcomingmatches, groups, groupresults, routing: routerReducer, squad, countries, player, upcomingmatchesteam, matchesteam, countryinfo, admin, teamstats, playerstats })

export default rootReducer
