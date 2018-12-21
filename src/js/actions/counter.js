export const increment = () => ({
	type: 'INCREMENT',
})

export const decrement = () => ({
	type: 'DECREMENT',
})

export const reset = () => ({
	type: 'RESET',
})

export const setCounter = (value) => ({
	type: 'SETCOUNTER',
	value: value,
})
