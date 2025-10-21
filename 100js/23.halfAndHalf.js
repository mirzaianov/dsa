function halfAndHalf(text) {
  const mid = Math.floor(text.length / 2);
  const first = text.slice(0, mid).toLowerCase();
  const second = text.slice(mid).toUpperCase();

  return `${first}${second}`;
}

export default halfAndHalf;
