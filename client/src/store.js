import { createStore, applyMiddleware, compose} from 'redux'
import rootReducer from './redux/reducers/index'
import thunk from 'redux-thunk'

const defaultState = {
  matches: [{groupName : "", matchNumber : 0, team1 : "", team2 : "", goals1 : 0, goals2 : 0}],
  upcomingmatches : [{matchNumber : 0, team1: "", team2 : "", playingDate : "", PlayingTime : "", stadium : ""}]
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
