import darken from "./darken"

export default function(color) {
	const palette = {
		"brand-red": "#ff483c",
		"brand-purple": "#7366fb",
		"brand-green": "#8CB369",
		"brand-yellow": "#F3B600",
		"brand-orange": "#fd8451",
		"brand-pink": "#FEC3CB",
		"brand-blue": "#00CAE0",
		"brand-teal": "#2FACAC",

		"brand-white": "#F8FBF7",
		"brand-grey-lightest": "#F4F4F0",
		"brand-grey-light": "#DEDEDC",
		"brand-grey-medium": "#81717A",
		"brand-grey-dark": "#595358",
		"brand-grey-darkest": "#333031",
		"brand-black": darken("#232021", 4),
	}
	return palette[color]
}