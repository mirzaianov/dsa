function findTargetUser(users, targetUserId) {
  return users.filter((user) => user.id === targetUserId);
}

function filterAndSortUsers(users, startAge, endAge, excludedUserId) {
  return users
    .filter((user) => user.age >= startAge && user.age < endAge && user.id !== excludedUserId)
    .sort((a, b) => b.age - a.age);
}

function customArraySort(users, currentUserId) {
  const targetUser = findTargetUser(users, currentUserId);
  const allUsersTo18 = filterAndSortUsers(users, 0, 18, currentUserId);
  const allUsersFrom18to35 = filterAndSortUsers(users, 18, 35, currentUserId);
  const allUsersFrom35to50 = filterAndSortUsers(users, 35, 50, currentUserId);
  const allUsersFrom50 = filterAndSortUsers(users, 50, Infinity, currentUserId);

  return [
    ...targetUser,
    ...allUsersFrom35to50,
    ...allUsersTo18,
    ...allUsersFrom50,
    ...allUsersFrom18to35,
  ];
}

export { customArraySort };
