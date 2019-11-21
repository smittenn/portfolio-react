import navData from "../data/nav2"
import toCamelCase from '../services/toCamelCase'

const panelReducer = (state = toCamelCase(navData.name), action) => {
	switch (action.type) {
		case 'SET_PANEL':
			return toCamelCase(action.value)
		default:
			return state
	}
}

export default panelReducer
