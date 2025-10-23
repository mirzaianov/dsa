function getHighestPaidEmployee(employees, departmentId) {
  if (!employees.length) return '';

  const res = employees
    .filter((item) => item.departmentId === departmentId)
    .map((item) => [item.name, item.salary])
    .sort((a, b) => b[1] - a[1] || a[0] - b[0]);

  if (!res.length) return undefined;

  return res[0][0];
}

export default getHighestPaidEmployee;
