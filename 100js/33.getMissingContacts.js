function getMissingContacts(contactsMap) {
  const users = [...contactsMap.keys()];
  const res = new Map();

  for (const [key, values] of contactsMap) {
    const newValues = [];

    for (const user of users) {
      if (user !== key && !values.includes(user)) {
        newValues.push(user);
      }
    }

    res.set(key, newValues);
  }

  return res;
}

export default getMissingContacts;
