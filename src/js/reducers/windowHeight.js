const windowHeight = (state = window.innerHeight + 1, action) => {
	switch (action.type) {
		case 'DETECT_WINDOW_HEIGHT':
			return (window.innerWidth <= 800) ? Math.min(state, window.innerHeight + 1) : window.innerHeight + 1
		case 'SET_WINDOW_HEIGHT':
			return window.innerHeight + 1
		default:
			return state
	}
}

export default windowHeight
