import navData from "../data/nav2"

const panelReducer = (state = navData.name, action) => {
	switch (action.type) {
		case 'SET_PANEL':
			return action.value
		default:
			return state
	}
}

export default counterReducer
