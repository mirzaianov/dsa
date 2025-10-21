function extractElementsBetweenPositions(numbers, n, m) {
  let left;
  let right;

  if (n <= m) {
    left = n;
    right = m;
  } else {
    left = m;
    right = n;
  }

  return numbers.slice(left, right + 1);
}

export default extractElementsBetweenPositions;
