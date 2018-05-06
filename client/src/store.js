import { createStore, applyMiddleware, compose} from 'redux'
import rootReducer from './redux/reducers/index'
import thunk from 'redux-thunk'

// The default state of the globally accessible store
// Include what the object should be called in the store + of what type it is
// supposed to be
const defaultState = {
  matches: [{team1 : "", team2 : "", goals1 : 0, goals2 : 0, playingDate : "", playingTime : "", stadium : ""}],
  matchesteam: [{groupName : "", matchNumber : 0, team1 : "", team2 : "", goals1 : 0, goals2 : 0}],
  upcomingmatches : [{matchNumber : 0, abbreviation1: "", abbreviation2: "", team1: "", team2 : "", playingDate : "", playingTime : "", stadium : ""}],
  upcomingmatchesteam : [{matchNumber : 0, team1: "", team2 : "", playingDate : "", playingTime : "", stadium : ""}],
  groups : [{groupName : ""}],
  groupresults : [{team : "", countryName : "", groupName : "", MP : 0, W : 0, D : 0, L : 0, GF : 0, GA : 0, Diff : 0, points : 0}],
  squad:[{id: 0, country: "", firstname: "", surname: "", shirtNumber: 0, position:"", goals: 0, club:"", height:0, weight:0, img_id:""}],
  countries:[{abbreviation:"", countryName:"", groupName:""}],
  player:[{id: 0, country: "", firstname: "", surname: "", shirtNumber: 0, position:"", goals: 0, club:"", height:0, weight:0, img_id:""}],
  countryinfo:[{abrevation:"", worldrank:0, history:""}],
  admin: '',
  teamstats: [{abbreviation: "", countryName: "", goals: 0}],
  playerstats: [{id: 0, country: "", countryName: "", firstname: "", surname: "", goals: 0, img_id: ""}],
  locations:[{id: 0, locationName:"", locationType:"", latitude:10, longitude:10}],
  tablesize:[{COUNT: 0}]
}

const store = createStore(
  rootReducer,
  defaultState,
  applyMiddleware(thunk),
  compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

export default store
