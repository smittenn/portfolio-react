const arrowNavReducer = (state = false, action) => {
	switch (action.type) {
		case 'OPEN_ARROW_NAV':
			return true
		case 'CLOSE_ARROW_NAV':
			return false
		default:
			return state
	}
}

export default arrowNavReducer
