const colorReducer = (state = 'WHITE', action) => {
	switch (action.type) {
		case 'WHITE':
			return 'WHITE'
		case 'BLACK':
			return 'BLACK'
		default:
			return state
	}
}

export default colorReducer
