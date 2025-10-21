function getMonthsNeededToWait(index1, index2) {
  const res = index2 - index1;

  return res >= 0 ? res : 12 + res;
}

export default getMonthsNeededToWait;
