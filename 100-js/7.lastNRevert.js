function lastNRevert(text, n) {
  return text
    .slice(text.length - n)
    .split('')
    .reverse()
    .join('');
}

export default lastNRevert;
