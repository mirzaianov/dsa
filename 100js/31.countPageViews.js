function countPageViews(pageViews, country, interval) {
  return pageViews
    .filter(
      (item) =>
        item.country === country &&
        item.date >= interval.startDate &&
        item.date <= interval.endDate,
    )
    .reduce((acc, item) => acc + item.count, 0);
}

export default countPageViews;
