import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import counterReducer from './counter'
import abbreviationReducer from './abbreviation'
import colorReducer from './color'

const rootReducer = (history) => combineReducers({
	count: counterReducer,
	abbreviation: abbreviationReducer,
	color: colorReducer,
	router: connectRouter(history)
})

export default rootReducer
