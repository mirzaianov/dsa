function mergeIntervals(intervals, newIntervals) {
  const sorted = [...intervals, ...newIntervals].sort((a, b) => a.from - b.from || a.to - b.to);
  const n = sorted.length;

  if (n < 2) return sorted;

  const res = [];

  for (let i = 1; i < n; i += 1) {
    const curr = sorted[i];
    const last = res.pop() || sorted[0];

    if (last.to < curr.from) {
      res.push(last, curr);
    } else {
      const interval = {
        numbers: [...last.numbers, ...curr.numbers].sort((a, b) => a - b),
        from: last.from,
      };

      last.to < curr.to ? (interval.to = curr.to) : (interval.to = last.to);

      res.push(interval);
    }
  }

  return res;
}

export { mergeIntervals };
