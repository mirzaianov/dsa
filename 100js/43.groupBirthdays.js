function groupBirthdays(users, groupBy) {
  const map = new Map();

  for (const user of users) {
    let key;

    switch (groupBy) {
      case 'year': {
        key = user.birthday.getFullYear();
        break;
      }
      case 'month': {
        key = user.birthday.getMonth() + 1;
        break;
      }
      case 'day': {
        key = user.birthday.getDate();
        break;
      }
      default:
        break;
    }

    const value = map.get(key);

    if (value === undefined) {
      map.set(key, [user]);
    } else {
      map.set(key, [...value, user]);
    }
  }

  return map;
}

export default groupBirthdays;
