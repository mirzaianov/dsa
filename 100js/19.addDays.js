function addDays(initialDate, daysCount) {
  const date = new Date(initialDate);

  date.setDate(date.getDate() + daysCount);

  return date;
}

export default addDays;
