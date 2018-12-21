const abbreviationReducer = (state = 'H', action) => {
	switch (action.type) {
		case 'HOME':
			return 'H'
		case 'ABOUT':
			return 'A'
		case 'AMERICANMADE':
			return 'P1'
		case 'VAI':
			return 'P2'
		default:
			return state
	}
}

export default abbreviationReducer
