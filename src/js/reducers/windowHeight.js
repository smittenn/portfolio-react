const windowHeight = (state = window.innerHeight, action) => {
	switch (action.type) {
		case 'DETECT_WINDOW_HEIGHT':
			return (window.innerWidth <= 800) ? Math.min(state, window.innerHeight) : window.innerHeight
		case 'SET_WINDOW_HEIGHT':
			return window.innerHeight
		default:
			return state
	}
}

export default windowHeight
