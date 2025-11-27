function formatDateTime(date, locale) {
  let options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
  };

  return new Intl.DateTimeFormat(locale, options).format(date);
}

export { formatDateTime };
