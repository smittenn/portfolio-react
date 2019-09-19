const abbreviationReducer = (state = 'H', action) => {
	switch (action.type) {
		case 'HOME':
			return 'H'
		case 'ABOUTME':
			return 'A'
		case 'PROCESS':
			return 'P'
		case 'AMERICANMADE':
			return 'P1'
		case 'VAI':
			return 'P2'
		case 'TRANSLATOR':
			return 'P3'
		case 'JJMDC':
			return 'P4'
		case 'JJHOME':
			return 'P5'
		case 'WRAP1':
			return 'P6'
		case 'WRAP2':
			return 'P7'
		case 'PERFORCE':
			return 'P8'
		case 'CISCO':
			return 'P9'
		case 'PROTOHACK':
			return 'P10'
		default:
			return state
	}
}

export default abbreviationReducer
