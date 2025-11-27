function findFreeCalendarSpots(meetings) {
  let freeIntervals = [
    {
      startTime: {
        hours: 9,
        minutes: 0,
      },
      endTime: {
        hours: 17,
        minutes: 0,
      },
    },
  ];

  meetings.forEach((meeting) => {
    freeIntervals = freeIntervals
      .map((interval) => splitIntoFreeIntervals(interval.startTime, interval.endTime, meeting))
      .flat();
  });

  return freeIntervals.map(({ startTime, endTime }) => ({
    startTime,
    duration: timeToMinutes(endTime) - timeToMinutes(startTime),
  }));
}

function splitIntoFreeIntervals(startTime, endTime, meeting) {
  const startMinutes = timeToMinutes(startTime);
  const endMinutes = timeToMinutes(endTime);
  const meetingMinutes = [
    timeToMinutes(meeting.startTime),
    timeToMinutes(meeting.startTime) + meeting.duration,
  ];

  // 1. Meeting is not inside our interval
  if (meetingMinutes[1] <= startMinutes || meetingMinutes[0] >= endMinutes) {
    return [{ startTime, endTime }];
  }

  // 2. Meeting fully covers our interval
  if (meetingMinutes[0] <= startMinutes && meetingMinutes[1] >= endMinutes) {
    return [];
  }

  // 3. Meeting starts before this interval
  if (meetingMinutes[0] <= startMinutes) {
    return [
      {
        startTime: minutesToTime(meetingMinutes[1]),
        endTime,
      },
    ];
  }

  // 4. Meeting ends after this interval
  if (meetingMinutes[1] >= endMinutes) {
    return [
      {
        startTime,
        endTime: minutesToTime(meetingMinutes[0]),
      },
    ];
  }

  // 5. Meeting is inside this interval
  return [
    {
      startTime,
      endTime: minutesToTime(meetingMinutes[0]),
    },
    {
      startTime: minutesToTime(meetingMinutes[1]),
      endTime,
    },
  ];
}

function minutesToTime(minutes) {
  return {
    hours: Math.floor(minutes / 60),
    minutes: minutes % 60,
  };
}

function timeToMinutes(time) {
  return time.hours * 60 + time.minutes;
}

export { findFreeCalendarSpots };
