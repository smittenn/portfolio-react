export default function(n, width, z) {
	return n.length >= width ? (n + '') : new Array(width - (n + '').length + 1).join(z || '0') + (n + '')
}
