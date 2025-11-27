function getPaginatedData(users, sortBy, direction, perPage, pageNumber) {
  const start = perPage * (pageNumber - 1);
  const end = start + perPage;
  const sorted = [...users].sort((a, b) => {
    if (a[sortBy] > b[sortBy]) {
      return direction === 'asc' ? 1 : -1;
    } else if (a[sortBy] < b[sortBy]) {
      return direction === 'asc' ? -1 : 1;
    } else {
      return 0;
    }
  });

  return sorted.slice(start, end);
}

export { getPaginatedData };
