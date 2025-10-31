function isValidPassword(password) {
  const hasThreeUpperLetters = /[A-Z].*[A-Z].*[A-Z]/.test(password);
  const hasDigit = /\d/.test(password);
  const hasSymbol = /[_!?*]/.test(password);

  return hasThreeUpperLetters && hasDigit && hasSymbol;
}

export default isValidPassword;
