const navToggleReducer = (state = false, action) => {
	switch (action.type) {
		case 'HOVER':
			return true
		case 'UNHOVER':
			return false
		default:
			return state
	}
}

export default navToggleReducer
