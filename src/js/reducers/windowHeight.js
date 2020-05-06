const windowHeight = (state = window.innerHeight, action) => {
	switch (action.type) {
		case 'DETECT_WINDOW_HEIGHT':
			return Math.min(state, window.innerHeight)
		default:
			return state
	}
}

export default windowHeight
