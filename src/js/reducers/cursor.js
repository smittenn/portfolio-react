const cursorReducer = (state = false, action) => {
	switch (action.type) {
		case 'CURSOR_HOVER':
			return true
		case 'CURSOR_UNHOVER':
			return false
		default:
			return state
	}
}

export default cursorReducer
