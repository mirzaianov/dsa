function decToHex(color) {
  return Number(color).toString(16).padStart(2, 0);
}

function rgbToHex(rgbColor) {
  const [r, g, b] = rgbColor
    .split('')
    .slice(4, rgbColor.length - 1)
    .join('')
    .split(', ');

  return `#${decToHex(r)}${decToHex(g)}${decToHex(b)}`;
}

export { rgbToHex };
