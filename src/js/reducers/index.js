import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import counterReducer from './counter'
import abbreviationReducer from './abbreviation'

const rootReducer = (history) => combineReducers({
  count: counterReducer,
  abbreviation: abbreviationReducer,
  router: connectRouter(history)
})

export default rootReducer
