const secondaryPanelReducer = (state = false, action) => {
	switch (action.type) {
		case 'SHOW_SECONDARY':
			return true
		case 'HIDE_SECONDARY':
			return false
		default:
			return state
	}
}

export default secondaryPanelReducer
