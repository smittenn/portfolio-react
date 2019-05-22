const navTakeoverReducer = (state = false, action) => {
	switch (action.type) {
		case 'OPEN_TAKEOVER':
			return true
		case 'CLOSE_TAKEOVER':
			return false
		default:
			return state
	}
}

export default navTakeoverReducer
