// import navData from "../data/nav-legacy";
import navData from "../data/nav";

const abbreviationReducer = (state = 'H', action) => {
	switch (action.type) {
		case 'HOME':
			return navData.items[0].abbreviation
		case 'WORK':
			return navData.items[1].abbreviation
		// Start Projects 
		case 'GOOGLEDESIGN':
			return navData.items[1].items[0].items[0].abbreviation
		case 'JJHOME':
			return navData.items[1].items[1].items[0].abbreviation
		case 'JJMDC':
			return navData.items[1].items[1].items[1].abbreviation
		case 'AMERICANMADE':
			return navData.items[1].items[2].items[0].abbreviation
		case 'VAI':
			return navData.items[1].items[2].items[1].abbreviation
		case 'TRANSLATOR':
			return navData.items[1].items[2].items[2].abbreviation
		case 'WRAP1':
			return navData.items[1].items[3].items[0].abbreviation
		case 'WRAP2':
			return navData.items[1].items[3].items[1].abbreviation
		case 'PERFORCE1':
			return navData.items[1].items[4].items[0].abbreviation
		case 'PERFORCE2':
			return navData.items[1].items[4].items[1].abbreviation
		// End Projects 
		case 'PROCESS':
			return navData.items[2].abbreviation
		case 'ABOUTME':
			return navData.items[3].abbreviation
		case 'RESUME':
			return navData.items[4].abbreviation
		default:
			return state
	}
}

export default abbreviationReducer
