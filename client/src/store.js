import { createStore, applyMiddleware, compose} from 'redux'
import rootReducer from './redux/reducers/index'
import thunk from 'redux-thunk'

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
