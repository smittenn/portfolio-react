import jsonDepth from "../services/jsonDepth"
import navData from '../data/nav'

export const openPrimaryPanel = () => ({
	type: 'SHOW_PRIMARY',
})

export const closePrimaryPanel = () => ({
	type: 'HIDE_PRIMARY',
})

export const setPanelNumber = (value) => ({
	type: 'SET_PANEL',
	value,
})
