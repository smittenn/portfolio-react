import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import counterReducer from './counter'
import abbreviationReducer from './abbreviation'
import colorReducer from './color'
import navTakeoverReducer from './navTakeover'
import navToggleReducer from './navToggle'
import secondaryPanelReducer from './secondaryPanel'
import sidebarReducer from './sidebar'

const rootReducer = (history) => combineReducers({
	count: counterReducer,
	abbreviation: abbreviationReducer,
	color: colorReducer,
	isTakeoverOpen: navTakeoverReducer,
	isToggleHovered: navToggleReducer,
	isSecondaryPanelOpen: secondaryPanelReducer,
	isSidebarOpen: sidebarReducer,
	router: connectRouter(history)
})

export default rootReducer
