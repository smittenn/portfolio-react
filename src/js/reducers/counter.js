const counterReducer = (state = 1	, action) => {
	switch (action.type) {
		case 'INCREMENT':
			return state + 1
		case 'DECREMENT':
			return state - 1
		case 'RESET':
			return 1
		case 'SETCOUNTER':
			return action.value
		default:
			return state
	}
}

export default counterReducer
