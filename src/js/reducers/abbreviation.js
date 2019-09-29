import navData from "../data/nav";

const abbreviationReducer = (state = 'H', action) => {
	switch (action.type) {
		case 'HOME':
			return navData.primary[0].abbreviation
		case 'PROCESS':
			return navData.primary[2].abbreviation
		case 'ABOUTME':
			return navData.primary[3].abbreviation
		// PROJECTS 
		case 'AMERICANMADE':
			return navData.secondary[1].abbreviation
		case 'VAI':
			return navData.secondary[2].abbreviation
		case 'TRANSLATOR':
			return navData.secondary[3].abbreviation
		case 'JJHOME':
			return navData.secondary[4].abbreviation
		case 'JJMDC':
			return navData.secondary[5].abbreviation
		case 'WRAP1':
			return navData.secondary[6].abbreviation
		case 'WRAP2':
			return navData.secondary[7].abbreviation
		case 'PERFORCE':
			return navData.secondary[8].abbreviation
		case 'CISCO':
			return 'P9'
		case 'PROTOHACK':
			return 'P10'
		default:
			return state
	}
}

export default abbreviationReducer
