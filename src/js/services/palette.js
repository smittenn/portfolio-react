import darken from "./darken"

export default function(color) {
	const palette = {
		"brand-red": "#f63f43",
		"brand-purple": "#7366FB",
		"brand-green": "#14c735",
		"brand-yellow": "#F3B600",
		"brand-orange": "#f67e0d",
		"brand-pink": "#ef9b97",
		"brand-blue": "#0b67de",
		"brand-teal": "#00D9B6",

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