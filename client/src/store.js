import { createStore, applyMiddleware, compose} from 'redux'
import rootReducer from './redux/reducers/index'
import thunk from 'redux-thunk'

// The default state of the globally accessible store
// Include what the object should be called in the store + of what type it is
// supposed to be
const defaultState = {
  matches: []
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
