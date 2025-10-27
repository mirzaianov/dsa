function diffReactions(yesterdayReactions, todayReactions) {
  const res = [];

  for (const user in todayReactions) {
    for (const r of todayReactions[user]) {
      if (!yesterdayReactions[user]) {
        res.push(`${user} reacted with ${r}`);
      }

      if (yesterdayReactions[user] && yesterdayReactions[user].length > 0) {
        if (!yesterdayReactions[user].includes(r)) {
          res.push(`${user} reacted with ${r}`);
        }
      }
    }
  }

  for (const user in yesterdayReactions) {
    for (const r of yesterdayReactions[user]) {
      if (!todayReactions[user]) {
        res.push(`${user} removed their ${r}`);
      }

      if (todayReactions[user] && todayReactions[user].length > 0) {
        if (!todayReactions[user].includes(r)) {
          res.push(`${user} removed their ${r}`);
        }
      }
    }
  }

  return res;
}

export default diffReactions;
