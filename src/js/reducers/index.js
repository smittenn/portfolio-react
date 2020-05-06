import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import counterReducer from './counter'
import abbreviationReducer from './abbreviation'
import cursorReducer from './cursor'
import navTakeoverReducer from './navTakeover'
import navToggleReducer from './navToggle'
import panelReducer from './panel'
import primaryPanelReducer from './primaryPanel'
import secondaryPanelReducer from './secondaryPanel'
import sidebarReducer from './sidebar'
import mobileReducer from './mobile'
import windowHeightReducer from './windowHeight'

const rootReducer = (history) => combineReducers({
	count: counterReducer,
	abbreviation: abbreviationReducer,
	isCursorHovering: cursorReducer,
	isToggleHovered: navToggleReducer,
	isTakeoverOpen: navTakeoverReducer,
	openNavPanel: panelReducer,
	isPrimaryPanelOpen: primaryPanelReducer,
	isSecondaryPanelOpen: secondaryPanelReducer,
	isSidebarOpen: sidebarReducer,
	isMobile: mobileReducer,
	windowHeight: windowHeightReducer,
	router: connectRouter(history)
})

export default rootReducer
