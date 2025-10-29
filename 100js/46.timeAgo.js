const MINUTE = 60 * 1000;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;
const MONTH = 30 * DAY;
const YEAR = 365 * DAY;

function timeAgo(date1, date2) {
  const diff = Math.abs(date2 - date1);

  switch (true) {
    case diff < MINUTE: {
      return 'just now';
    }

    case diff < HOUR: {
      const minutes = Math.floor(diff / MINUTE);

      return `${minutes} minute${minutes === 1 ? '' : 's'} ago`;
    }

    case diff < DAY: {
      const hours = Math.floor(diff / HOUR);

      return `${hours} hour${hours === 1 ? '' : 's'} ago`;
    }

    case diff < MONTH: {
      const days = Math.floor(diff / DAY);

      return `${days} day${days === 1 ? '' : 's'} ago`;
    }

    case diff < YEAR: {
      const months = Math.floor(diff / MONTH);

      return `${months} month${months === 1 ? '' : 's'} ago`;
    }

    default: {
      return 'more than a year ago';
    }
  }
}

export default timeAgo;
