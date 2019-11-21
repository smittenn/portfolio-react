export default (str) => {
	str = str.toLowerCase().replace(/(?:(^.)|([-_\s]+.))/g, match => match.charAt(match.length-1).toUpperCase());
  return str.charAt(0).toLowerCase() + str.substring(1)
}
