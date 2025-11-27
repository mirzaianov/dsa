function getDaysInMonth(date) {
  const year = date.getFullYear();
  const month = date.getMonth();

  const currentMonthsFirstDay = new Date(year, month, 1);
  const nextMonthsFirstDay = month === 11 ? new Date(year + 1, 0, 1) : new Date(year, month + 1, 1);

  const millisecondsInOneDay = 24 * 60 * 60 * 1000;

  return Math.floor((nextMonthsFirstDay - currentMonthsFirstDay) / millisecondsInOneDay);
}

export { getDaysInMonth };
