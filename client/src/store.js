import { createStore, applyMiddleware, compose} from 'redux'
import rootReducer from './redux/reducers/index'
import thunk from 'redux-thunk'

// The default state of the globally accessible store
// Include what the object should be called in the store + of what type it is
// supposed to be
const defaultState = {
  matches: [{groupName : "", matchNumber : 0, team1 : "", team2 : "", goals1 : 0, goals2 : 0}],
  upcomingmatches : [{matchNumber : 0, team1: "", team2 : "", playingDate : "", PlayingTime : "", stadium : ""}],
  groups : [{groupName : ""}],
  groupresults : [{team : "", MP : 0, W : 0, D : 0, L : 0, points : 0}],
  squad:[{id: 0, country: "", firstname: "", surname: "", shirtNumber: 0, position:"", goals: 0, club:"", height:0, weight:0, img_id:""}]
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
