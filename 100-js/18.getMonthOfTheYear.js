function getMonthOfTheYear(date) {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const index = date.getMonth();

  return months[index];
}

export default getMonthOfTheYear;
