function groupBy(callback) {
  const map = new Map();

  for (const item of this) {
    const key = callback(item);
    const values = map.get(key) || [];

    map.set(key, [...values, item]);
  }

  return map;
}

Array.prototype.groupBy = groupBy;

const numbers = [1, 2, 3, 4, 5];

const groupingMap = numbers.groupBy((number) => (number % 2 === 0 ? 'even' : 'odd'));

console.log(groupingMap); // Map: 'odd' => [ 1, 3, 5 ], 'even' => [ 2, 4 ]

export { groupBy };
