function getCheckPassword(password) {
  return function getCheckPassword(newPassword) {
    return password === newPassword;
  };
}

export { getCheckPassword };
