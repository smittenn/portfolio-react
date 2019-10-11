export default function(num, digits, z) {
	return num.length >= digits ? (num + '') : new Array(digits - (num + '').length + 1).join(z || '0') + (num + '')
}
