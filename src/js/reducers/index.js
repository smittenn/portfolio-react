import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import counterReducer from './counter'
import abbreviationReducer from './abbreviation'
import colorReducer from './color'
import navTakeoverReducer from './navTakeover'

const rootReducer = (history) => combineReducers({
	isTakeoverOpen: navTakeoverReducer,
	count: counterReducer,
	abbreviation: abbreviationReducer,
	color: colorReducer,
	router: connectRouter(history)
})

export default rootReducer
