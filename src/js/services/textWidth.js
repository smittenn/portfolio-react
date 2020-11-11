export default function(word, multiplier) {
  return word.split('').reduce((width, c) => {
    if (c == 'W' || c == 'M') width += 15;
    else if (c == 'w' || c == 'm') width += 12;
    else if (c == 'I' || c == 'i' || c == 'l' || c == 't' || c == 'f') width += 4;
    else if (c == 'r') width += 8;
    else if (c == c.toUpperCase()) width += 12;
    else width += 10;
    return width
  }, 0) * multiplier;
}
