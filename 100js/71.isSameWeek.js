const DAY_MILLISECONDS = 24 * 60 * 60 * 1000;

function isSameWeek(date1, date2) {
  const startOfDate1 = new Date(date1.getFullYear(), date1.getMonth(), date1.getDate());

  const dayOfWeek1 = date1.getDay();
  const dayOfWeek1StartingMonday = dayOfWeek1 === 0 ? 6 : dayOfWeek1 - 1;

  const startOfWeek1 = new Date(
    startOfDate1.getTime() - dayOfWeek1StartingMonday * DAY_MILLISECONDS,
  );
  const endOfWeek1 = new Date(startOfWeek1.getTime() + 7 * DAY_MILLISECONDS - 1);

  return startOfWeek1 <= date2 && date2 <= endOfWeek1;
}

export { isSameWeek };
