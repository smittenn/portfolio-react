const primaryPanelReducer = (state = true, action) => {
	switch (action.type) {
		case 'SHOW_PRIMARY':
			return true
		case 'HIDE_PRIMARY':
			return false
		default:
			return state
	}
}

export default primaryPanelReducer
