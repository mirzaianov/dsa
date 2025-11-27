function removeFirstAndLast(source, target) {
  return source
    .replace(target, '')
    .split('')
    .reverse()
    .join('')
    .replace(target.split('').reverse().join(''), '')
    .split('')
    .reverse()
    .join('');
}

export { removeFirstAndLast };
