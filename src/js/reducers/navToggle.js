const navToggleReducer = (state = false, action) => {
	switch (action.type) {
		case 'HOVER_TOGGLE':
			return true
		case 'UNHOVER_TOGGLE':
			return false
		default:
			return state
	}
}

export default navToggleReducer
