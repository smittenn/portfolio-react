export default function(word, multiplier=1) {
  return word.split('').reduce((width, c) => {
    if (c == 'W' || c == 'M' || c == 'G' || c == 'C' || c == 'D' || c == 'O') width += 15;
    else if (c == 'w' || c == 'm' || c == 'N' || c == 'L') width += 12;
    else if (c == 'I' || c == 'i' || c == 'l' || c == 't' || c == 'f') width += 4;
    else if (c == 'r') width += 8;
    else if (c == c.toUpperCase()) width += 12;
    else width += 10;
    return width
  }, 0) * multiplier;
}
