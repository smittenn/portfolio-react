import darken from "./darken"

export default function(color) {
	const palette = {
		"brand-red": "#ff483c",
		"brand-purple": "#7366FB",
		"brand-green": "#7EAF53",
		"brand-yellow": "#F3B600",
		"brand-orange": "#f9763e",
		"brand-pink": "#FED1CF",
		"brand-blue": "#00CAE0",
		"brand-teal": "#0AB489",

		"brand-white": "#F8FBF7",
		"brand-grey-lightest": "#F4F4F0",
		"brand-grey-light": "#DEDEDC",
		"brand-grey-medium": "#81717A",
		"brand-grey-dark": "#595358",
		"brand-grey-darkest": "#333031",
		"brand-black": "#131112",
	}
	return palette[color]
}