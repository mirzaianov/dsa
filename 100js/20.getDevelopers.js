function getDevelopers(employees) {
  return employees.filter((item) => item.job === 'developer');
}

export default getDevelopers;
